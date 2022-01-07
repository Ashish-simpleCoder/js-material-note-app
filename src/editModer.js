export default function editModer(id,e){
    const div = document.getElementById(id)
    div.style.opacity = 0
    const {top, left, width, height} = div.getBoundingClientRect()

    const editor_mode = document.querySelector('.editor_mode')
    editor_mode.id = id
    editor_mode.style.top = top + 'px'
    editor_mode.style.left = left + 'px'
    editor_mode.style.width = width +'px'
    editor_mode.style.height = height + 'px'
    editor_mode.style.display = 'block'


    setTimeout(()=>{
        document.body.classList.add('edit_mode')
        const obj = {e,editor_mode,left,top}

        // generateAndAppendSpan(obj)

        editor_mode.children[0].textContent = div.children[0].textContent
        editor_mode.children[1].value = div.children[1].textContent
    },20)

    addEventListener('keyup',(e)=>e.key === 'Escape' && saveNotes())
    editor_mode.querySelector('.save_btn').addEventListener('click',saveNotes)
    modal_wrapper.addEventListener('click',saveNotes)

   async function saveNotes(){
        // calling for saving the notes to local storage
        const saveEditedNote = await import('./saveEditedNote.js')
        saveEditedNote.default(editor_mode)

        // getting the updated note from local storage via id
        let updated_note = JSON.parse(localStorage.getItem('notes'))
        updated_note = updated_note.filter(({id:c})=>c===id)

        // updating the editing notes details
        div.children[0].textContent = updated_note[0].title
        div.children[1].textContent = updated_note[0].content
        document.body.classList.remove('edit_mode')

        // restting the modal
        setTimeout(()=>{
            editor_mode.style.display = 'none'
            div.style.opacity = 1
            editor_mode.children[0].textContent = ''
            editor_mode.children[1].value = ''
        },501)
    }
}


function generateAndAppendSpan({e, editor_mode, left, top}){
    let x = e.clientX - left
    let y = e.clientY - top
    const span = document.createElement('span')
    span.style.left = x+'px'
    span.style.top = y+'px'

    editor_mode.appendChild(span)
    setTimeout(()=>span.remove(),500)
}