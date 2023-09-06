import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DataWindow() {
  const style = {
    dataWindow:{
      height: "100vh",
      width: "100%",
      color: "white"
    }
  }
  return (
    <div style={style.dataWindow}>
        <Outlet/>
    </div>
  )
}