import { redirect } from 'next/navigation'

// The admin dashboard is now merged into the profile dashboard.
export default function AdminPage() {
  redirect('/dashboard')
}
