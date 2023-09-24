import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DataWindow() {
  const style = {
    dataWindow:{
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto auto auto auto',
      gap: '10px',
    }
  }
  return (
    <div style={style.dataWindow}>
      <div style={style.grid}>
        <Outlet/>
      </div>
    </div>
  )
}