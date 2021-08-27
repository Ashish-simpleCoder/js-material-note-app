export default function noteDeleter(div){
    let notes = JSON.parse(localStorage.getItem('notes'))

    notes = notes.filter(note=>note.id != div.id)
    localStorage.setItem('notes',JSON.stringify(notes))
    div.remove()

    setTimeout(()=>{
        document.body.classList.remove('body_relative')
        if(notes.length === 0){
            dummy.style.display = 'block'
            // search_form.style.opacity = '0'
            search_form_title.style.display = 'none'
            search_keyword.style.display = 'none'
        }
    },100)


}