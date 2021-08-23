export default function noteRenderer(note_obj,fromLocal){
    const div = document.createElement('div')
    div.classList.add('each_note_container')
    div.setAttribute('id',`${note_obj.id}`)
    div.setAttribute('contenteditable',false)

    div.innerHTML = `<h3>${note_obj.title}</h3>
                     <p>${note_obj.content}</p>
                     <div>
                        <button id='save_btn'>save</button>
                        <button id='delete_btn'>delete</button>
                     </div>`

    if(fromLocal==true) note_output_section.append(div)
    else note_output_section.insertAdjacentElement('afterbegin',div)

    note_title.value='',note_content.value=''

    const h3 = div.querySelector('div h3')
    const p = div.querySelector('div p')
    const save_btn = div.querySelector('#save_btn')

    h3.addEventListener('click',async(e)=>{
        e.stopPropagation()
        save_btn.style.display = 'block'
        const editModer = await import('./editModer.js')
        editModer.default(div,true,true)
    })
    p.addEventListener('click',async(e)=>{
        e.stopPropagation()
        save_btn.style.display = 'block'
        const editModer = await import('./editModer.js')
        editModer.default(div,true,true)
    })

    document.body.addEventListener('click',async()=>{
        save_btn.style.display = 'none'
        const saveEditedNote = await import('./saveEditedNote.js')
        saveEditedNote.default(div)
    })

    save_btn.addEventListener('click',async(e)=>{
        e.stopPropagation()
        save_btn.style.display = 'none'
        const saveEditedNote = await import('./saveEditedNote.js')
        saveEditedNote.default(div)
    })

    const delete_btn = div.querySelector('#delete_btn')
    delete_btn.addEventListener('click',async (e)=>{
        e.stopPropagation()
        const deleteNote = await import('./noteDelete.js')
        deleteNote.default(div)
    })
}


