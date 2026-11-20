import { useT } from '../i18n'
import Reveal from './Reveal.jsx'

export default function About() {
  const { t } = useT()
  return (
    <section id="about" className="section">
      <Reveal className="container narrow">
        <h2>{t.about.title}</h2>
        <p className="lead">{t.about.body}</p>
      </Reveal>
    </section>
  )
}
