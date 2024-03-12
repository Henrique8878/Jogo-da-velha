import React from 'react'
import "../App.css"

const EndGame = ({PlayerWin, RestartGame}) => {
  return (
   <div id='container2'>
   
   <h3 style={{fontSize:"4vw",textAlign:"center"}}>Fim de Jogo !</h3>
   <h4 style={{fontSize:"3vw",textAlign:"center"}}>"O {PlayerWin} venceu a partida"</h4>
   <button onClick={()=>RestartGame()} id='btn_reiniciar'>Reiniciar partida</button>
   </div>
  )
}

export default EndGame