export default async function noteRenderer(note_obj,fromLocal){
    const div = document.createElement('div')
    div.classList.add('each_note_container')
    div.setAttribute('id',`${note_obj.id}`)

    div.innerHTML = `<h3 contenteditable='false'>${note_obj.title}</h3>
                     <p contenteditable='false'>${note_obj.content}</p>
                     <div>
                        <button id='save_btn'>save</button>
                        <button id='delete_btn'><span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg></span></button>
                     </div>`

    if(fromLocal==true){
        note_output_section.append(div)
        let divs = []
        divs.push(div)
        if(divs){
            const loazyLoder = await import('./lazyLoader.js')
            divs.forEach((div)=>loazyLoder.default(div))
        }
    }
    else {
        note_output_section.insertAdjacentElement('afterbegin',div)
    }
    dummy.style.display = 'none'

    search_form_title.style.display = 'block'
    search_keyword.style.display = 'block'

    note_title.value='', note_content.value='' //emptying the inputs
    const save_btn = div.querySelector('#save_btn')

    div.querySelector('div h3').addEventListener('click',async function(e){
        e.stopPropagation()
        if(this.getAttribute('contenteditable') == 'false'){
            const editModer = await import('./editModer.js')
            editModer.default(div,true,true,e)
        }
    })
    div.querySelector('div p').addEventListener('click',async function(e){
        e.stopPropagation()
        if(this.getAttribute('contenteditable') == 'false'){
            const editModer = await import('./editModer.js')
            editModer.default(div,true,true,e)
        }
    })

    document.body.addEventListener('click',async(e)=>{
        // e.stopPropagation()
        if(div.children[0].getAttribute('contenteditable') === 'false') return
        const saveEditedNote = await import('./saveEditedNote.js')
        saveEditedNote.default(div)
    })

    save_btn.addEventListener('click',async(e)=>{
        // e.stopPropagation()
        // if(div.children[0].getAttribute('contenteditable') === 'false') return
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


