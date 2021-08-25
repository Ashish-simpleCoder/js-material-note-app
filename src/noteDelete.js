export default function noteDeleter(div){

    console.log('deleting')
    let notes = JSON.parse(localStorage.getItem('notes'))

    notes = notes.filter(note=>note.id != div.id)
    localStorage.setItem('notes',JSON.stringify(notes))
    div.remove()
    setTimeout(()=>document.body.classList.remove('body_relative'),100)


    // if(notes.length === 0){
    //     dummy.style.display = 'block'
    //     search_form.style.opacity = '0'
    // }
}