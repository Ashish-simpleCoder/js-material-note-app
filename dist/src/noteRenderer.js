export default async function noteRenderer(note_obj,fromLocal){
    const div = document.createElement('div')
    div.classList.add('each_note_container')
    div.setAttribute('id',`${note_obj.id}`)
    div.contentEditable = false

    div.innerHTML = `<h3 contenteditable='false'>${note_obj.title}</h3>
                    <p contenteditable='false'>${note_obj.content}</p>
                     <div>
                        <button id='delete_btn' class='delete_btn'><span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg></span></button>
                     </div>`

    const span = document.createElement('span')
    span.classList.add('random_elements')
    let range_clr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hex_clr = '#'
    for(let i=0;i<6;i++){
        let index = Math.floor(Math.random(0)*range_clr.length)
        hex_clr += range_clr[index]
        span.style.background = hex_clr
    }
    div.appendChild(span)
    div.style.animation = 'load_div 0.3s linear forwards'

    if(fromLocal==true){
        note_output_section.append(div)
        let divs = []
        divs.push(div)
        if(divs){
                const loazyLoder = await import('./lazyLoader.js')
                divs.forEach(loazyLoder.default)
        }
    }else {
        div.appendChild(span)
        note_output_section.insertAdjacentElement('afterbegin',div)
    }
    dummy.style.display = 'none'
    search_form_title.style.display = 'block'
    search_keyword.style.display = 'block'

    note_title.value='', note_content.value='' //emptying the inputs

    div.addEventListener('click',async function (e){
        // e.stopPropagation()
        const editModer = await import('./editModer.js')
        editModer.default(this.id,e)
    },false)


    // div.querySelector('div h3').addEventListener('click',async function(e){
    //     e.stopPropagation()
    //     if(this.getAttribute('contenteditable') == 'false'){
    //         const editModer = await import('./editModer.js')
    //         editModer.default(div,true,true,e,div.querySelector('.save_btn'))
    //     }
    // })
    // div.querySelector('div p').addEventListener('click',async function(e){
    //     e.stopPropagation()
    //     if(this.getAttribute('contenteditable') == 'false'){
    //         const editModer = await import('./editModer.js')
    //         editModer.default(div,true,true,e,div.querySelector('.save_btn'))
    //     }
    // })

    document.body.addEventListener('click',async()=>{
        if(div.children[0].getAttribute('contenteditable') === 'false') return
        const saveEditedNote = await import('./saveEditedNote.js')
        saveEditedNote.default(div)
    })

    // div.querySelector('.save_btn').addEventListener('click',async()=>{
    //     const saveEditedNote = await import('./saveEditedNote.js')
    //     saveEditedNote.default(div)
    // },false)


    div.querySelector('#delete_btn').addEventListener('click',async (e)=>{
        e.stopPropagation()
        div.style.animation = 'deletion 0.3s ease forwards'
        div.addEventListener('animationend',async ()=>{
            const deleteNote = await import('./noteDelete.js')
            deleteNote.default(div)
        })
    })
}


