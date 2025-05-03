import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qupuoreezozqyljtfjfj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1cHVvcmVlem96cXlsanRmamZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyNzAzODksImV4cCI6MjA2MTg0NjM4OX0.lPynzJzwEXqNyZt2ZT4enH5x8Rh7yPUtIgnQrvsLurM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  }
})