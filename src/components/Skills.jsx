import { Chip } from '@mui/material'
import { useT } from '../i18n'
import { skills } from '../data/skills.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  const { t } = useT()
  return (
    <section id="skills" className="section section--alt">
      <Reveal className="container">
        <h2>{t.skills.title}</h2>
        <p className="muted">{t.skills.subtitle}</p>
        <ul className="chips">
          {skills.map((s) => <li key={s}><Chip label={s} variant="outlined" sx={{ bgcolor: '#fff' }} /></li>)}
        </ul>
      </Reveal>
    </section>
  )
}
