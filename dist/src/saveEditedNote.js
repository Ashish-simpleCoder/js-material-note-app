export default function saveEditedNote(div){
    if(!div) return
    // save_btn && (save_btn.style.display = 'none')
    console.log('saving')
    div.children[0].setAttribute('contenteditable',false)
    div.children[1].setAttribute('contenteditable',false)
    div.classList.remove('active_editing')
    document.body.classList.remove('body_relative')

    let notes = JSON.parse(localStorage.getItem('notes'))
    notes = notes.map(note=>{
        if(note.id == div.id){
            const childrens = div.children
            return{...note,title:childrens[0].textContent,content:childrens[1].textContent}
        }
        return note
    })
    localStorage.setItem('notes',JSON.stringify(notes))
}