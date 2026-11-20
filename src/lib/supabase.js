import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(url && anonKey)

export const supabase = isSupabaseConfigured ? createClient(url, anonKey) : null

export async function sendContactMessage({ name, email, message }) {
  if (!supabase) throw new Error('SUPABASE_NOT_CONFIGURED')
  // No .select(): the table allows insert only, so reading back is not permitted.
  const { error } = await supabase
    .from('contact_messages')
    .insert({ name, email, message })
  if (error) throw error
}
