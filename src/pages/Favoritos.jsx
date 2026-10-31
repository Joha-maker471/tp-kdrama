import { favoritos } from '../data/favoritos'

function Favoritos() {
  return (
    <section>
      <h2>Mis Kdramas Favoritos</h2>
      <div className="grid">
        {favoritos.map((k) => (
          <article className="card" key={k.id}>
            <img src={k.imagen} alt={k.titulo} className="card-img" />
            <h3>{k.titulo}</h3>
            <p>{k.genero} ({k.año})</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Favoritos
