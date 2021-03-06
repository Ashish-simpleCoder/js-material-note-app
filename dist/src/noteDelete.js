export default function noteDeleter(div){
    let notes = JSON.parse(localStorage.getItem('notes'))

    notes = notes.filter(note=>{
        let deleted_notes = JSON.parse(localStorage.getItem('deleted_notes')) || []
        if(note.id === div.id){
            deleted_notes = [note,...deleted_notes],
            localStorage.setItem('deleted_notes',JSON.stringify(deleted_notes))
        }
        return note.id != div.id
    })
    localStorage.setItem('notes',JSON.stringify(notes))
    div.remove()

    setTimeout(()=>{
        document.body.classList.remove('body_relative')
        if(notes.length === 0){
            dummy.style.display = 'block'
            search_form_title.style.display = 'none'
            search_keyword.style.display = 'none'
        }
    })
}