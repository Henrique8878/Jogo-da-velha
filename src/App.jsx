import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/title';
import EndGame from './components/EndGame';
import TelaEmpate from './components/TelaEmpate';

const App = () => {

  const [Start, setStart] = useState(false);
  const [Player, setPlayer] = useState("Jogador 1");
  const [ArrayJogo, setArrayJogo] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);
  const [XisOuBolinha, setXisOuBolinha] = useState("X");
  const [Vitoria, setVitoria] = useState("");
  const [PlayerWin, setPlayerWin] = useState("");
  const [FimJogo, setFimJogo] = useState(false);
  const [empate, setEmpate] = useState(false);

  function Play(e) {
    if (XisOuBolinha === "X") {
      if (e.target.textContent === "") {
        const array = [...ArrayJogo];
        e.target.textContent = "X";
        setXisOuBolinha("O");
        setPlayer("Jogador 2");
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (e.target.id === i.toString() + j.toString()) {
              array[i][j] = "X";
              setArrayJogo(array);
            }
          }
        }
      }
    }
    if (XisOuBolinha === "O") {
      if (e.target.textContent === "") {
        e.target.textContent = "O";
        setXisOuBolinha("X");
        setPlayer("Jogador 1");
        const array = [...ArrayJogo];
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (e.target.id === i.toString() + j.toString()) {
              array[i][j] = "O";
              setArrayJogo(array);
            }
          }
        }
      }
    }
    VerificaVitoria();
  }

  function VerificaVitoria(e) {
    //Verifica a vitória das linhas X
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (ArrayJogo[i][j] === "X") {
          if (ArrayJogo[i][j + 1] === "X") {
            if (ArrayJogo[i][j + 2] === "X") {
              setPlayerWin("Jogador 1");
              setFimJogo(true);
            }
          }
        }
      }
    }
    //Verifica a vitória das linhas O
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (ArrayJogo[i][j] === "O") {
          if (ArrayJogo[i][j + 1] === "O") {
            if (ArrayJogo[i][j + 2] === "O") {
              setPlayerWin("Jogador 2");
              setFimJogo(true);
            }
          }
        }
      }
    }
    //Verifica a vitória das colunas X
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (ArrayJogo[i][j] === "X") {
          if (ArrayJogo[i+1][j] === "X") {
            if (ArrayJogo[i+2][j] === "X") {
              setPlayerWin("Jogador 1");
              setFimJogo(true);
            }
          }
        }
      }
    }
    //Verifica a vitória das colunas O
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (ArrayJogo[i][j] === "O") {
          if (ArrayJogo[i+1][j] === "O") {
            if (ArrayJogo[i+2][j] === "O") {
              setPlayerWin("Jogador 2");
              setFimJogo(true);
            }
          }
        }
      }
    }
// Verifica vitória Diagonal esquerda p/direita X
    for(let i = 0;i<3;i++){
      for(let j = 0;j<3;j++){
        if(i.toString()==j.toString()){
          if(ArrayJogo[i][j]=="X"){
            if(ArrayJogo[i+1][j+1]=="X"){
              if(ArrayJogo[i+2][j+2]=="X"){
                setPlayerWin("Jogador 1")
                setFimJogo(true)
              }
            }
          }
        }
      }
    }

    // Verifica vitória Diagonal esquerda p/direita O
    for(let i = 0;i<3;i++){
      for(let j = 0;j<3;j++){
        if(i.toString()==j.toString()){
          if(ArrayJogo[i][j]=="O"){
            if(ArrayJogo[i+1][j+1]=="O"){
              if(ArrayJogo[i+2][j+2]=="O"){
                setPlayerWin("Jogador 2")
                setFimJogo(true)
              }
            }
          }
        }
      }
    }

     // Verifica vitória Diagonal direita p/esquerda X
    for(let i = 0;i<3;i++){
      for(let j = 0;j>3;j++){
        if(ArrayJogo[0][2]=="X"){
          if(ArrayJogo[1][1]=="X"){
            if(ArrayJogo[2][0]=="X"){
              setPlayerWin("Jogador 1")
              setFimJogo(true)
            }
          }
        }
      }
    }

        // Verifica vitória Diagonal direita p/esquerda O
        for(let i = 0;i<3;i++){
          for(let j = 0;j>3;j++){
            if(ArrayJogo[0][2]=="O"){
              if(ArrayJogo[1][1]=="O"){
                if(ArrayJogo[2][0]=="O"){
                  setPlayerWin("Jogador 2")
                  setFimJogo(true)
                }
              }
            }
          }
        }
  }



  function RestartGame() {
    setXisOuBolinha("X")
    setPlayerWin("");
    setVitoria(false);
    setFimJogo(false);
    setStart(false);
    setEmpate(false);
    setArrayJogo([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]);
  }

  return (
    <div>
      <Title />
      {Start === false ?
        (
          <div id="div_btn_play">
            <button onClick={() => setStart(true)} id='btn_play'>Jogar</button>
          </div>
        )
        :
        FimJogo === true ?
          <EndGame PlayerWin={PlayerWin} RestartGame={RestartGame} />
          : empate === true ?
            <TelaEmpate RestartGame={RestartGame} />
            :
            (
              <div id="container">
                <h4>Quem joga: {Player}</h4>
                <h5>Símbolo: {XisOuBolinha}</h5>
                <div id='tabuleiro'>
                  <div id="linha_1" className='linha'>
                    <div id='00' className='caixa' value={ArrayJogo[0][0]} onClick={Play}></div>
                    <div id='01' className='caixa' value={ArrayJogo[0][1]} onClick={Play}></div>
                    <div id='02' className='caixa' value={ArrayJogo[0][2]} onClick={Play}></div>
                  </div>
                  <div id="linha_2" className='linha'>
                    <div id='10' className='caixa' value={ArrayJogo[1][0]} onClick={Play}></div>
                    <div id='11' className='caixa' value={ArrayJogo[1][1]} onClick={Play}></div>
                    <div id='12' className='caixa' value={ArrayJogo[1][2]} onClick={Play}></div>
                  </div>
                  <div id="linha_3" className='linha'>
                    <div id='20' className='caixa' value={ArrayJogo[2][0]} onClick={Play}></div>
                    <div id='21' className='caixa' value={ArrayJogo[2][1]} onClick={Play}></div>
                    <div id='22' className='caixa' value={ArrayJogo[2][2]} onClick={Play}></div>
                  </div>
                </div>
                <button onClick={() => RestartGame()} id='btn_reiniciarrr'>Reiniciar partida</button>
              </div>
            )
      }
    </div>
  )
}

export default App;
