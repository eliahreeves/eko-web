import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'

// Fallback values for development
const supabaseUrl = PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
