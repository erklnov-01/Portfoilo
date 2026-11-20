import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppBar, Toolbar, Container, Box, Button, IconButton, Drawer, List, ListItemButton, ListItemText, ToggleButton, ToggleButtonGroup } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useT } from '../i18n'
import { changeLanguage } from '../store/languageSlice.js'
import { sections, profile } from '../data/profile.js'

export default function Navbar() {
  const { t, lang } = useT()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const go = (id) => {
    setOpen(false)
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50)
  }

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ bgcolor: 'rgba(255,255,255,.88)', backdropFilter: 'blur(12px)', borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2, justifyContent: 'space-between', minHeight: 64 }}>
          <Button color="inherit" onClick={() => go('home')} sx={{ fontWeight: 700, px: 0, '&:hover': { bgcolor: 'transparent' } }}>{profile.name}</Button>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {sections.map((id) => (
              <Button key={id} color="inherit" onClick={() => go(id)} sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>{t.nav[id]}</Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ToggleButtonGroup size="small" exclusive value={lang} onChange={(_, v) => v && dispatch(changeLanguage(v))} aria-label="Language">
              <ToggleButton value="en" sx={{ px: 1.5, borderRadius: '999px 0 0 999px' }}>EN</ToggleButton>
              <ToggleButton value="uz" sx={{ px: 1.5, borderRadius: '0 999px 999px 0' }}>UZ</ToggleButton>
            </ToggleButtonGroup>
            <IconButton sx={{ display: { md: 'none' } }} aria-label={t.nav.menu} onClick={() => setOpen(true)}><MenuIcon /></IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 1 }}>
          <IconButton aria-label="Close" onClick={() => setOpen(false)}><CloseIcon /></IconButton>
          <List>
            {sections.map((id) => (
              <ListItemButton key={id} onClick={() => go(id)}><ListItemText primary={t.nav[id]} /></ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
