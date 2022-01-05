import React, {useState} from 'react'

const useCoin = (opciones) => {

  const [state, setState] = useState('')

  const Seleccionar = ({error}) => {
    return(

        <div className="flex flex-col my-5">
          <label className={`text-4xl ${error ? "text-red-600" : "text-white"}`}><i className="fas fa-dollar-sign"></i> Moneda</label>
          <select onChange={ e => setState(e.target.value)} value={state} className={`p-3 text-2xl bg-transparent border-4 text-white transition-all ease-linear duration-150 focus:outline-none cursor-pointer ${error ? "text-red-500 border-red-600 hover:border-red-700" : "border-orange-500 hover:border-orange-700"}`}>
            <option hidden disabled value="">SELECCIONAR MONEDA</option>
            {opciones.map( (opcion) => (
              <option className="text-black" key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
            ))}
          </select>
        </div>

    )
  }

  return [state, Seleccionar, setState];

}

export default useCoin
