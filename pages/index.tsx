import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recruiters Help</title>
        <meta name="description" content="Recruiters Help" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Consejos para <span className={styles.recruitersText}>recruiters</span>
        </h1>

        <div className={styles.description}>
          La idea es que nos pongamos de acuerdo entre reclutadores/as y candidatos/as para que el primer contacto sea más eficaz y aumentemos la tasa de respuesta de ambos lados.
          <p>La intención es que sigamos conversando entre ambas partes para lograr una mejor comunicación. 🤗</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.line} />

          <div className={styles.sectionTitle}>Mensajes que no nos gustan 😔</div>

          <div className={styles.card}>
            <p>Hola Jorge, ¿cómo estás? ...</p>
            <h4>❌ Se equivoca tu nombre.</h4>
          </div>

          <div className={styles.card}>
            <p>Hola, ¿cómo estás? ¿Estás escuchando ofertas laborales?</p>
            <h4>❌ Te pregunta si estás buscando ofertas en vez de enviarte la oferta directamente.</h4>
          </div>

          <div className={styles.card}>
            <p>Hola, ¿cómo estás? Estamos buscando Desarrolladores para importante empresa, excelentes beneficios.</p>
            <h4>❌ Mensaje sin ningún tipo de detalle.</h4>
          </div>

          <div className={styles.card}>
            <p>Hola, ¿cómo estás? Revisando tu perfil vi que eres experto en COBOL.</p>
            <h4>❌ Te menciona que eres experto en una tecnología que ni siquiera tenés en el perfil.</h4>
          </div>

          <div className={styles.card}>
            <p>Propuesta profesional. Estimado/a te contacto por ofertas laborales. Oferta #1 ...</p>
            <h4>❌ Mensaje genérico, copiado y pegado.</h4>
          
          </div>

          <div className={styles.line} />
          
          <div className={styles.sectionTitle}>Propuesta con toda la información necesaria 😍</div>

          <div className={styles.likeCard}>
            <p>¡Hola, Martín! ¿Cómo estás?</p>
            <br />
            <p>Estamos buscando Frontend React Semi Senior para EMPRESA, más de 10 años en el rubro de e-commerce. Clientes: Frávega, Garbarino, ...</p>
            <br />
            <p>Actualmente el equipo de desarrollo cuenta con 2 Tech Leads y 8 programadores/as.</p>
            <br />
            <p><strong>Contrato</strong>: relación de dependencia.</p>
            <br />
            <p><strong>Requisitos:</strong></p>
              <p>- Al menos 3 años de experiencia en HTML, CSS y JavaScript.</p>
              <p>- Se valora experiencia con React Query, Next.js y Styled Components.</p>
              <p>- Inglés B1, buena escritura.</p>
            <br />
            <p><strong>Beneficios:</strong></p>
              <p>- Home Office.</p>
              <p>- Horario flexible.</p>
              <p>- Vacaciones pagas.</p>
              <p>- Días off por cumpleaños y fiestas.</p>
              <p>- Obra Social Swiss Medical Plan SM-300.</p>
              <p> - Capacitaciones a tu medida.</p>
              <p>- Metodologías Agile.</p>
              <p>- Te damos Notebook y accesorios.</p>
            <br />
            <p>Remuneración estimada en Dólares/Pesos: U$S 2.000 / $180.000 (se negocia en la entrevista).</p>
            <br />
            <p>Te dejamos enlace para que veas nuestros clientes y/o proyectos: www.empresa.com/proyectos</p>
            <br />
            <p>Si estás interesado podés enviarme el CV adjunto por acá o vía e-mail a: empleos@empresa.com</p>
            <br />
            <p>Y luego coordinamos una entrevista para avanzar con el proceso.</p>
            <br />
            <p>Saludos!</p>
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.twitter.com/martindevaluado"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ♥️ by @martindevaluado{' '}
        </a>
      </footer>
    </div>
  )
}

export default Home
