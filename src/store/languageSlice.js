import { createSlice } from '@reduxjs/toolkit'

const KEY = 'portfolio-lang'

function readLang() {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'uz' || v === 'en' ? v : 'en'
  } catch {
    return 'en'
  }
}

const languageSlice = createSlice({
  name: 'language',
  initialState: { lang: readLang() },
  reducers: {
    setLanguage(state, action) {
      state.lang = action.payload
    },
  },
})

export const { setLanguage } = languageSlice.actions

// Thunk keeps the reducer pure: persist first, then update state.
export const changeLanguage = (lang) => (dispatch) => {
  try {
    localStorage.setItem(KEY, lang)
  } catch {
    /* storage unavailable: language still changes for this visit */
  }
  dispatch(setLanguage(lang))
}

export default languageSlice.reducer
