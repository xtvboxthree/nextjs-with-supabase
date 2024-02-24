import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data: notes } = await supabase.from('notes').select()

  //return <pre>{JSON.stringify(notes, null, 2)}</pre>
  return (
    <div>
      {notes.map(note => (
        <p key={note.id}>{note.title}</p>
      ))}
    </div>
  )
}
