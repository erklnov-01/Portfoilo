import { useT } from '../i18n'
import { profile } from '../data/profile.js'

export default function Footer() {
  const { t } = useT()
  return (
    <footer className="footer">
      <div className="container">© {new Date().getFullYear()} {profile.name}. {t.footer.rights}</div>
    </footer>
  )
}
