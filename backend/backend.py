from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from starlette.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import List
import os

class Game(BaseModel):
    game_name: str
    game_url: str
    logo_name: str

    
class User(BaseModel):
    username: str
    profile_photo_name: str
    anaf: str
    mador: str
    scores: List
    
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

#think about api calls, should receive from games scores.
# @app.get("/api/user/", response_model=List[Game])
# def get_games():
#     return games
