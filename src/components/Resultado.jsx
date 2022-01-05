import React from 'react'

function Resultado({resultado}) {

  return(
    <div>
      {Object.keys(resultado).length === 0 ? '' :
        <div className="w-full bg-orange-500 mt-5 text-center text-3xl p-3">
          <p>Precio actual: <span className="text-emerald-800">{resultado.PRICE}</span></p>
          <p>Precio más alto del día: <span className="text-emerald-800">{resultado.HIGHDAY}</span></p>
          <p>Precio más bajo del día: <span className="text-emerald-800">{resultado.LOWDAY}</span></p>
          <p>Variación en las últimas 24hs: <span className="text-emerald-800">{resultado.CHANGEPCT24HOUR}%</span></p>
        </div>
      }
    </div>
  )

}

export default Resultado
