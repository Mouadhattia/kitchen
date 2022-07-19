import React from 'react'
import "../screens/Card.css"
import LoopIcon from '@mui/icons-material/Loop';
const Card = () => {
  return (
    <div className='Card'>
        <div style={{backgroundColor:"#f4c8bb", height:"17%"}}>
            {LoopIcon}
        </div>
    </div>
  )
}

export default Card