import { useSelector } from 'react-redux'
import en from './en.js'
import uz from './uz.js'

export const translations = { en, uz }

export function useT() {
  const lang = useSelector((s) => s.language.lang)
  return { t: translations[lang], lang }
}
