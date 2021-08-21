export default async function noteGenerator(){
    const note_obj = {
        title:note_title.value,
        content:note_content.value,
        id:new Date().getTime().toString()
    }

    const noteRenderer = await import('./noteRenderer.js')
    noteRenderer.default(note_obj)

    let save = await import('./saveNoteToLocalStorage.js')
    save.default(note_obj)
}
