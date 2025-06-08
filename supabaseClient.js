import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://yzhxztmusxfrpkopcpgk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6aHh6dG11c3hmcnBrb3BjcGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MjUzODEsImV4cCI6MjA2NTAwMTM4MX0.pSlW443xUPgQImqWMjsFwseoCOSEJ3G1vCT3CzDM_OU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
