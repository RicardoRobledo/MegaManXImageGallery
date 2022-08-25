import { useState } from 'react';

import './App.css';


function App() {

  //const [linea1, setLinea1] = useState('');
  //const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('w1');

  const onChangeImagen = function(valor){
    setImagen(valor.target.value);
  }

  var nombre = "Michael";

  //Deja guardar codigo de este tipo en variables ya que esto es JSX
  var saludo = <p>
                  Hola Mundo soy {nombre}<br/>
                  Edit <code>src/App.js</code> and save to reload.
                </p>;


  return (
    <div className="App">

      <select onChange={onChangeImagen}>
          <option value="w1">X</option>
          <option value="w2">Zero</option>
          <option value="w3">Vile</option>
          <option value="w4">Axl</option>
          <option value="w5">Sigma</option>
      </select><br />
      
      <div className="meme">
          <img src={"/imagenes/"+imagen+".jpg"} />
      </div>

    </div>
  );


}

export default App;
