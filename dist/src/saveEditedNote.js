export default function saveEditedNote(modal){
    let notes = JSON.parse(localStorage.getItem('notes'))
    notes = notes.map(note=>{
        if(note.id == modal.id){
            const childrens = modal.children
            return{...note,title:childrens[0].textContent,content:childrens[1].value}
        }
        return note
    })
    localStorage.setItem('notes',JSON.stringify(notes))
}