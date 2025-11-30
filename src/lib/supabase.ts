import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    return createBrowserClient(
        "https://msybnwkwmreukxemijfy.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zeWJud2t3bXJldWt4ZW1pamZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1MzA5MzgsImV4cCI6MjA4MDEwNjkzOH0.Jje7-ttygOXIEoltCid5FBFaEeyuRg2D-Hkhrm51NAg"
    )
}
