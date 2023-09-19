import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DataWindow() {
  const style = {
    dataWindow:{
      color: "white",
      display: 'grid',
      flex: '1',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridTemplateRows: 'repeat(5, 1fr)',
      gridColumnGap: '5px',
      gridRowGap: '5px',
    }
  }
  return (
    <div style={style.dataWindow}>
        <Outlet/>
    </div>
  )
}