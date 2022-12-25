import React from 'react'
import './Score.css'
export const Score = ({score, xPlayer}) => {
    const {x, o} = score;
  return (
    <div className='scoreBoard'>
        <span className={`score x-score ${!xPlayer && "inactive"}`}>X - {x}</span>
        <span className={`score o-score ${xPlayer && "inactive"}`}>O - {o}</span>

    </div>
  )
}
