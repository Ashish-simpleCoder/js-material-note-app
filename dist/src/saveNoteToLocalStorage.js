export default function saveNoteToLocalStorage(note_obj){
    let notes = JSON.parse(localStorage.getItem('notes')) || []
    notes= [note_obj,...notes]
    localStorage.setItem('notes',JSON.stringify(notes))
}