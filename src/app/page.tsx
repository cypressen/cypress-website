import { MDXRemote } from 'next-mdx-remote/rsc'
import { createSupabaseServerClient } from '@/utils/supabase/clients'
export default async function Home() {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase.from('blogs').select()

  return (
    <main>
      <h1>Home</h1>
      <div className="bg-blue-500">
        <MDXRemote source={data![0].content} />
      </div>
    </main>
  )
}
