import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://bkykmmbwjzqsddeaecda.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJreWttbWJ3anpxc2RkZWFlY2RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MDg3MDEsImV4cCI6MjA2MjI4NDcwMX0.8YyljOWyQdfd1HqmYBU3sSB5WNJfA3Uv5gNq8ezS1Bs';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };