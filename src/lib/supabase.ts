import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private'

// Fallback values for development
const supabaseUrl = SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
