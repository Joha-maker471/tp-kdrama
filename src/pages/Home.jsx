import { useEffect, useState } from 'react'

function Home() {
  const [series, setSeries] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const buscarSeries = async () => {
      try {
        // Buscamos estos dramas puntuales
        const busquedas = ['crash landing', 'goblin korean', 'vincenzo korean', 'itaewon class', 'true beauty']
        
        let todosLosResultados = []

        for (let termino of busquedas) {
          const res = await fetch(`https://api.tvmaze.com/search/shows?q=${termino}`)
          const data = await res.json()
          todosLosResultados = [...todosLosResultados, ...data]
        }

        // Filtro estricto: Que sea de Corea del Sur (KR) Y que tenga foto
        const soloKdramasReales = todosLosResultados.filter(item => 
          item.show.network && 
          item.show.network.country && 
          item.show.network.country.code === 'KR' &&
          item.show.image !== null
        )

        // Para no repetir series, usamos un filtro de IDs únicos
        const unicos = soloKdramasReales.filter((v, i, a) => a.findIndex(t => t.show.id === v.show.id) === i)

        setSeries(unicos.slice(0, 9)) 
        setCargando(false)
      } catch (error) {
        setCargando(false)
      }
    }

    buscarSeries()
  }, [])

  if (cargando) return <p>Cargando Kdramas...</p>

  return (
    <section>
      <h2>Explorando series</h2>
      <div className="grid">
        {series.map((item) => (
          <article className="card" key={item.show.id}>
            <img 
              src={item.show.image.medium} 
              alt={item.show.name} 
            />
            <h3>{item.show.name}</h3>
            <p><strong>Géneros:</strong> {item.show.genres.join(', ')}</p>
            <p><strong>Año:</strong> {item.show.premiered ? item.show.premiered.substring(0, 4) : 'Desconocido'}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Home