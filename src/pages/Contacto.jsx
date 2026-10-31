import { useState } from 'react'

function Contacto() {
  const [estado, setEstado] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setEstado('enviando')
    
    const form = e.currentTarget
    const res = await fetch('https://formsubmit.co/ajax/jaquelinarivero311@gmail.com', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' },
    })

    if (res.ok) {
      setEstado('ok')
      form.reset()
    } else {
      setEstado('error')
    }
  }

  return (
    <section>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Contacto</h2>
      <div className="contact-grid">
        
        <form onSubmit={handleSubmit}>
          <label>Nombre
            <input type="text" name="nombre" required placeholder="Tu nombre..." />
          </label>
          <label>Correo electrónico
            <input type="email" name="email" required placeholder="tu@email.com" />
          </label>
          <label>Mensaje
            <textarea name="mensaje" rows="5" required placeholder="Escribí tu mensaje acá..."></textarea>
          </label>
          <button type="submit" disabled={estado === 'enviando'}>
            {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {estado === 'ok' && <p style={{color: 'green', textAlign: 'center'}}>¡Mensaje enviado!</p>}
          {estado === 'error' && <p style={{color: 'red', textAlign: 'center'}}>Hubo un error. Probá de nuevo.</p>}
        </form>

        <iframe
          title="Mapa de Seúl"
          src="https://www.google.com/maps?q=Seoul&output=embed"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
          loading="lazy"
        ></iframe>
        
      </div>
    </section>
  )
}

export default Contacto
