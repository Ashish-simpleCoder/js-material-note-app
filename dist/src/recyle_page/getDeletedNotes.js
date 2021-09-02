export default function getDeletedNotes(){
    let deleted_notes = JSON.parse(localStorage.getItem('deleted_notes'))
    console.log(deleted_notes)
    deleted_notes.forEach(async(note)=>{
        const noteRenderer = await import('../noteRenderer.js')
        noteRenderer.default(note,true)
    })
}