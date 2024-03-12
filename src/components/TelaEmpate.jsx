import React from 'react'
import "../App.css"

const TelaEmpate = ({RestartGame}) => {
  return (
    <div id='container3'>
   
   <h3 style={{fontSize:"4vw",textAlign:"center"}}>Empate !</h3>
   <h4 style={{fontSize:"3vw",textAlign:"center"}}>"Nenhum jogador venceu a partida!"</h4>
   <button onClick={()=>RestartGame()} id='btn_reiniciarr'>Reiniciar partida</button>
   </div>
  )
}

export default TelaEmpate