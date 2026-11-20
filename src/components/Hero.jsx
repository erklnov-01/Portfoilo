import { motion } from 'framer-motion'
import { Button, Chip, Stack } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { useT } from '../i18n'
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  const { t } = useT()
  return (
    <section id="home" className="section hero">
      <div className="container hero__grid">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow">{t.hero.greeting}</p>
          <h1>{profile.name}</h1>
          <p className="hero__role">{t.hero.role}</p>
          <p className="lead">{t.hero.intro}</p>
          <Chip variant="outlined" label={`${projects.length} ${t.hero.count}`} sx={{ mt: 2 }} />
          <Stack direction="row" spacing={1.5} className="actions" useFlexGap flexWrap="wrap">
            <Button variant="contained" endIcon={<ArrowDownwardIcon />} onClick={() => go('projects')}>{t.hero.viewProjects}</Button>
            <Button variant="outlined" color="inherit" startIcon={<MailOutlineIcon />} onClick={() => go('contact')}>{t.hero.contactMe}</Button>
          </Stack>
        </motion.div>
        <motion.img className="hero__photo" src="/portrait.png" alt={profile.name} width="300" height="300" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} />
      </div>
    </section>
  )
}
