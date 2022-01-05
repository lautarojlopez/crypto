import {useState, useEffect} from 'react'
import imagen from './cryptomonedas.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import axios from 'axios'

function App() {

  const [moneda, setMoneda] = useState('')
  const [cripto, setCripto] = useState('')
  const [resultado, setResultado] = useState({})

  useEffect( () => {
    const cotizar = async () =>{
      if(moneda === ''){
        return
      }
      //Request a la API
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
      const resultado = await axios.get(url)
      setResultado(resultado.data.DISPLAY[cripto][moneda])
    }
    cotizar()
  }, [moneda, cripto])

  return (
    <div className="App flex flex-col items-center md:grid md:grid-cols-2 font-bebas">
      <div className="hidden p-20 md:block min-h-screen flex items-center justify-center">
        <img src={imagen} alt="" className="m-auto"/>
      </div>
      <div className="flex my-10 md:my-0 flex-col w-10/12 justify-center min-h-screen">
        <h1 className="subrayado text-7xl mb-5 text-white">Cotizador de Criptomonedas</h1>
        <Formulario
          setMoneda = {setMoneda}
          setCripto = {setCripto}
        />
        <Resultado
            resultado = {resultado}
        />
      </div>
    </div>
  );
}

export default App;
