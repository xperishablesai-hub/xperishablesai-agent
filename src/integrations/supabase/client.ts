import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mgdhxkkbqbxeaweitwtv.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nZGh4a2ticWJ4ZWF3ZWl0d3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MDc5MDAsImV4cCI6MjA3MzQ4MzkwMH0.3U0w47aaKe8lC2UWusy9WndOn63wiQWaVgtxTzst9L4';

export const supabase = createClient(supabaseUrl, supabaseKey);