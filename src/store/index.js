import { configureStore } from '@reduxjs/toolkit'
import language from './languageSlice.js'
import contact from './contactSlice.js'

export const store = configureStore({ reducer: { language, contact } })
