import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data: notes } = await supabase.from('notes').select()

  //return <pre>{JSON.stringify(notes, null, 2)}</pre>
  if (!notes) {
    return <p>No posts found.</p>
  }

  return notes.map((note) => (
    <p key={note.id}>
      <Link href={`/static/${note.id}`}>{note.title}</Link>
    </p>
  ))
}
