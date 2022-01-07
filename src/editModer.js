export default function editModer(div,c1,c2,e,save_btn){
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
        // span.classList.add('ripple_effect')
        span.style.left = x+'px'
        span.style.top = y+'px'

        editor_mode.appendChild(span)
        setTimeout(()=>span.remove(),500)


        editor_mode.children[0].innerHTML = div.children[0].textContent
        editor_mode.children[1].innerHTML = div.children[1].textContent
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
       const saveEditedNote = await import('./saveEditedNote.js')
       saveEditedNote.default(editor_mode)

        document.body.classList.remove('edit_mode')
        div.children[0].textContent = editor_mode.children[0].textContent
        div.children[1].textContent = editor_mode.children[1].value
        editor_mode.children[0].contentEditable = false
        editor_mode.children[1].contentEditable = false
        setTimeout(()=>{
            editor_mode.style.display = 'none'
            div.style.opacity = 1
        },401)
    }
}
