import { useState } from "react"

import './styles'
import { Button, Main } from "./styles";
import { GlobalStyle } from "./styles";
function App() {
  const[lado1,setLado1] = useState();
  const[lado2,setLado2] = useState();
  const[lado3,setLado3] = useState();
  const[tipo,setTipo] = useState();

  function tipoTriangulo() {
    if (lado1 < 1 || lado2 < 1 || lado3 < 1) {
        setTipo('Inválido');
    } else if (lado1 === lado2 && lado2 === lado3) {
        setTipo('Equilátero');
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        setTipo('Isósceles');
    } else {
        setTipo('Escaleno');
    }
}

/*function calcularCosseno(){
  const lado1 = ((b * b ) - (a-a)) / (2 * b * c);
  const lado2 = ((a*a) + (c*c) - b * b);
  const lado2 =  ((a * a) + (b * b) - c*c)
}*/


  return (
    <>
      <GlobalStyle />
    <Main>
      <div className="container">
      <h1>Triângulo</h1>

      <input
        type="number"
        placeholder="Digite o primeiro lado"
        value={lado1}
        onChange={(e) => setLado1(e.target.value)}
        
      />
      
      <input
        type="number" 
        placeholder="Digite o segundo lado"
        onChange={(e) => setLado2(e.target.value)}
        value={lado2}
      />

      <input
        type="number"
        placeholder="Digite o terceiro lado"
        value={lado3}
        onChange={(e) => setLado3(e.target.value)}

      />

      < Button onClick={tipoTriangulo}>Tipo de triângulo</Button>

      <p>O triângulo é : {tipo}</p>
      </div>
    </Main>
    </>
  )
}

export default App
