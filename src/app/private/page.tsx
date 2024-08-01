import { redirect } from 'next/navigation'

import { createSupabaseServerClient } from '@/utils/supabase/clients'

export default async function PrivatePage() {
  const supabase = createSupabaseServerClient()
  supabase.from('to-dos').select('*').then(console.log)
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return <p>Hello {data.user.email}</p>
}
