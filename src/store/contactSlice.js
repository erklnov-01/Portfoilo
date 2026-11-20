import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { sendContactMessage } from '../lib/supabase.js'

export const submitMessage = createAsyncThunk(
  'contact/submit',
  async (payload, { rejectWithValue }) => {
    try {
      await sendContactMessage(payload)
      return true
    } catch (e) {
      return rejectWithValue(e.message === 'SUPABASE_NOT_CONFIGURED' ? 'config' : 'network')
    }
  }
)

const contactSlice = createSlice({
  name: 'contact',
  initialState: { status: 'idle', error: null },
  reducers: {
    resetContact(state) {
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (b) => {
    b.addCase(submitMessage.pending, (s) => {
      s.status = 'loading'
      s.error = null
    })
      .addCase(submitMessage.fulfilled, (s) => {
        s.status = 'success'
      })
      .addCase(submitMessage.rejected, (s, a) => {
        s.status = 'error'
        s.error = a.payload || 'network'
      })
  },
})

export const { resetContact } = contactSlice.actions
export default contactSlice.reducer
