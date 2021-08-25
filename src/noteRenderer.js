export default function noteRenderer(note_obj,fromLocal){
    const div = document.createElement('div')
    div.classList.add('each_note_container')
    div.setAttribute('id',`${note_obj.id}`)
    div.setAttribute('contenteditable',false)

    div.innerHTML = `<h3>${note_obj.title}</h3>
                     <p>${note_obj.content}</p>
                     <div>
                        <button id='save_btn'>save</button>
                        <button id='delete_btn'><span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg></span></button>
                     </div>`

    if(fromLocal==true) note_output_section.append(div)
    else note_output_section.insertAdjacentElement('afterbegin',div)
    dummy.style.display = 'none'
    search_form.style.opacity = '1'

    note_title.value='',note_content.value='' //emptying the inputs

    const h3 = div.querySelector('div h3')
    const p = div.querySelector('div p')
    const save_btn = div.querySelector('#save_btn')

    h3.addEventListener('click',async(e)=>{
        e.stopPropagation()
        const editModer = await import('./editModer.js')
        editModer.default(div,true,true,e)
    })
    p.addEventListener('click',async(e)=>{
        e.stopPropagation()
        const editModer = await import('./editModer.js')
        editModer.default(div,true,true,e)
    })


    document.body.addEventListener('click',async()=>{
        const saveEditedNote = await import('./saveEditedNote.js')
        saveEditedNote.default(div)
    })
    save_btn.addEventListener('click',async(e)=>{
        e.stopPropagation()
        const saveEditedNote = await import('./saveEditedNote.js')
        saveEditedNote.default(div)
    })



    delete_btn.addEventListener('click',async (e)=>{
        e.stopPropagation()
        const deleteNote = await import('./noteDelete.js')
        deleteNote.default(div)
    })
}


