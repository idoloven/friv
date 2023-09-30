from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from starlette.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import List, Dict
import os
import csv

class Game(BaseModel):
    game_name: str
    game_url: str
    logo_name: str

    
class User(BaseModel):
    username: str
    profile_pic_name: str
    anaf: str
    mador: str
    scores: Dict

users = []

catom_scores = {"chess": 100, "monkeytype": 333, "achtung": 222, "cuphead": 5}
dp_scores = {"chess": 777, "monkeytype": 222, "achtung": 444, "cuphead": 333}
denis_scores = {"chess": 999, "monkeytype": 111, "achtung": 357, "cuphead": 4}
scores = {"catom": catom_scores, "dp": dp_scores, "denis": denis_scores}

with open("./database/users.csv", 'r') as users_file:
  users_raw = csv.reader(users_file)
  next(users_raw)
  users = [User(username=user[0], anaf=user[1], mador=user[2], scores=scores[user[0]], profile_pic_name=user[3]) for user in users_raw]
  print(users)


    
games_list = [
    {'game_name': 'chess','game_url': "https://www.example.com", 'logo_name': 'chess.png'},
    {'game_name': 'monkeytype','game_url': "https://www.example.com", 'logo_name': 'monkeytype.png'},
    {'game_name': 'achtung','game_url': "https://www.example.com", 'logo_name': 'achtung.jpg'},
    {'game_name': 'cuphead','game_url': "https://www.example.com", 'logo_name': 'cuphead.jpg'},
] # move to env later and make the static folder a mount in openshift

games = [Game(game_name=game['game_name'], game_url=game['game_url'], logo_name=game['logo_name']) for game in games_list]

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

#CORS middleware to allow requests from the frontend running on a different domain (update origins as needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/games/", response_model=List[Game])
def get_games():
    return games

@app.get("/api/users/", response_model=User)
def get_user(username):
    for user in users:
        if user.username == username:
            return user
    raise HTTPException(status_code=404, detail="User not found")


@app.get("/api/leaderboard/", response_model=List[User])
def get_leaderboard(game):
    leaderboard = sorted(users, key=lambda user: user.scores[game], reverse=True) #sort users by game score
    return leaderboard