import {useState, useEffect} from 'react'
import useCoin from '../hooks/useCoin'
import useCripto from '../hooks/useCripto'
import axios from 'axios'

function Formulario({setMoneda, setCripto}) {

  //State
  const [listcripto, setListcripto] = useState([])

  const monedas = [
    {codigo: 'ARS', nombre: 'Peso Argentino'},
    {codigo: 'USD', nombre: 'Dolar Estadounidense'},
    {codigo: 'EUR', nombre: 'Euro'},
    {codigo: 'GBP', nombre: 'Libra Esterlina'},
    {codigo: 'CAD', nombre: 'Dolar Canadiense'},
    {codigo: 'AUD', nombre: 'Dolar Australiano'},
    {codigo: 'BRL', nombre: 'Real Brasilero'},
  ]
  const [moneda, SelectMonedas] = useCoin(monedas)
  const [cripto, SelectCripto] = useCripto(listcripto)
  const [errorMoneda, setErrorMoneda] = useState(false)
  const [errorCripto, setErrorCripto] = useState(false)

  const cotizarMoneda = (e) => {
    e.preventDefault()
    //Validar
    if(moneda === ''){
      setErrorMoneda(true)
    }
    else{
      setErrorMoneda(false)
    }
    if(cripto === ''){
      setErrorCripto(true)
    }
    else{
      setErrorCripto(false)
    }
    if(moneda !== '' && cripto !== ''){
      setCripto(cripto)
      setMoneda(moneda)
    }
  }

  //Request a la API
  useEffect( () => {

    const requestAPI = async () => {
      const response = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD')
      setListcripto(response.data.Data)
    }
    requestAPI()
  }, [])

  return(
    <form onSubmit={cotizarMoneda} className="">
      <SelectMonedas
        error = {errorMoneda}
      />
      <SelectCripto
        error = {errorCripto}
      />
      <button
        type="submit"
        className="p-3 w-full text-white text-3xl bg-orange-500 hover:bg-orange-600 transition-all ease-linear duration-150"
        ><i className="fas fa-calculator"></i> Calcular</button>
    </form>
  )

}

export default Formulario
