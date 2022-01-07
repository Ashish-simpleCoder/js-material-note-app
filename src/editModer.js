export default function editModer(id,e){
    // console.log(div)
    // return
    const div = document.getElementById(id)
    console.log(div)
    div.style.opacity = 0
    const {top, left, width, height} = div.getBoundingClientRect()

    const editor_mode = document.querySelector('.editor_mode')
    editor_mode.id = div.id
    editor_mode.style.top = top + 'px'
    editor_mode.style.left = left + 'px'
    editor_mode.style.width = width +'px'
    editor_mode.style.height = height + 'px'
    editor_mode.style.display = 'block'


    setTimeout(()=>{
        document.body.classList.add('edit_mode')
        let x = e.clientX - left
        let y = e.clientY - top
        const span = document.createElement('span')
        span.style.left = x+'px'
        span.style.top = y+'px'

        editor_mode.appendChild(span)
        setTimeout(()=>span.remove(),500)

        editor_mode.children[0].textContent = div.children[0].textContent
        editor_mode.children[1].value = div.children[1].textContent
        editor_mode.children[0].contentEditable = true
        editor_mode.children[1].contentEditable = true
    },20)

    addEventListener('keyup',async(e)=>{
        if(e.key === 'Escape'){
           saveNotes()
        }
    })
    editor_mode.querySelector('.save_btn').addEventListener('click',saveNotes)
    modal_wrapper.addEventListener('click',saveNotes)

   async function saveNotes(){
        // calling for saving the notes to local storage
        const saveEditedNote = await import('./saveEditedNote.js')
        saveEditedNote.default(editor_mode)

        // getting the updated note from local storage via id
        let updated_note = JSON.parse(localStorage.getItem('notes'))
        updated_note = updated_note.filter(({id:c})=>c===id)

        div.children[0].textContent = updated_note[0].title
        div.children[1].textContent = updated_note[0].content
        document.body.classList.remove('edit_mode')

        setTimeout(()=>{
            editor_mode.style.display = 'none'
            div.style.opacity = 1
            editor_mode.children[0].textContent = ''
            editor_mode.children[1].value = ''
        },401)
    }
}
