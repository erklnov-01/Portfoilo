import { Card, CardContent, CardActions, Button, Chip, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useT } from '../i18n'
import { projects } from '../data/projects.js'
import Reveal from './Reveal.jsx'

export default function Projects() {
  const { t } = useT()
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <h2>{t.projects.title}</h2>
          <p className="muted">{t.projects.subtitle}</p>
        </Reveal>
        <div className="cards">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08} className="card-wrap">
              <Card variant="outlined" className="card">
                <div className="card__thumb" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6" component="h3" fontWeight={700}>{p.name}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 0.5 }}>{t.projects.items[p.id]}</Typography>
                  {p.tags.length > 0 && (
                    <ul className="chips chips--sm">
                      {p.tags.map((tag) => <li key={tag}><Chip size="small" label={tag} /></li>)}
                    </ul>
                  )}
                </CardContent>
                <CardActions sx={{ flexDirection: 'column', alignItems: 'stretch', gap: 1, p: 2, pt: 0, '& > :not(style) ~ :not(style)': { ml: 0 } }}>
                  <Button variant="contained" fullWidth endIcon={<OpenInNewIcon />} href={p.live} target="_blank" rel="noopener noreferrer">{t.projects.live}</Button>
                  {p.repo && (
                    <Button variant="outlined" color="inherit" fullWidth startIcon={<GitHubIcon />} href={p.repo} target="_blank" rel="noopener noreferrer">{t.projects.code}</Button>
                  )}
                </CardActions>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
