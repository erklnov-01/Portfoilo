import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Button, Alert, Stack } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import EmailIcon from '@mui/icons-material/Email'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'
import { useT } from '../i18n'
import { submitMessage, resetContact } from '../store/contactSlice.js'
import { profile } from '../data/profile.js'
import Reveal from './Reveal.jsx'

const empty = { name: '', email: '', message: '' }
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export default function Contact() {
  const { t } = useT()
  const dispatch = useDispatch()
  const { status, error } = useSelector((s) => s.contact)
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (status === 'success') setForm(empty)
  }, [status])

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (status !== 'idle') dispatch(resetContact())
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const v = { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() }
    const next = {}
    if (v.name.length < 2) next.name = t.contact.errors.name
    if (!emailOk(v.email)) next.email = t.contact.errors.email
    if (v.message.length < 10) next.message = t.contact.errors.message
    setErrors(next)
    if (Object.keys(next).length === 0) dispatch(submitMessage(v))
  }

  const loading = status === 'loading'
  const ext = { target: '_blank', rel: 'noopener noreferrer' }
  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <Reveal>
          <h2>{t.contact.title}</h2>
          <p className="muted">{t.contact.subtitle}</p>
          <Stack spacing={1} alignItems="flex-start" sx={{ mt: 2 }}>
            <Button color="inherit" startIcon={<EmailIcon />} href={`mailto:${profile.email}`}>{profile.email}</Button>
            <Button color="inherit" startIcon={<TelegramIcon />} href={profile.telegram} {...ext}>Telegram</Button>
            <Button color="inherit" startIcon={<InstagramIcon />} href={profile.instagram} {...ext}>Instagram</Button>
          </Stack>
        </Reveal>
        <Reveal delay={0.1}>
          <form className="form" onSubmit={onSubmit} noValidate>
            {['name', 'email', 'message'].map((f) => (
              <TextField key={f} name={f} label={t.contact[f]} type={f === 'email' ? 'email' : 'text'} value={form[f]} onChange={onChange} error={Boolean(errors[f])} helperText={errors[f]} multiline={f === 'message'} rows={f === 'message' ? 5 : undefined} inputProps={{ maxLength: f === 'message' ? 2000 : 200 }} fullWidth sx={{ bgcolor: '#fff' }} />
            ))}
            <Button type="submit" variant="contained" endIcon={<SendIcon />} disabled={loading} sx={{ alignSelf: 'flex-start' }}>{loading ? t.contact.sending : t.contact.send}</Button>
            <div role="status" aria-live="polite">
              {status === 'success' && <Alert severity="success">{t.contact.success}</Alert>}
              {status === 'error' && <Alert severity="error">{t.contact.errors[error]}</Alert>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
