export default function noteRenderer(note_obj,fromLocal){
    const div = document.createElement('div')
    div.classList.add('each_note_container')
    div.setAttribute('id',`${note_obj.id}`)
    div.setAttribute('contenteditable',false)

    div.innerHTML = `<h3>${note_obj.title}</h3>
                     <p>${note_obj.content}</p>
                     <div>
                        <button id='delete_btn'>delete</button>
                     </div>`

    if(fromLocal==true) note_output_section.append(div)
    else note_output_section.insertAdjacentElement('afterbegin',div)

    note_title.value='',note_content.value=''

    div.addEventListener('click',()=>{
        div.children[0].setAttribute('contenteditable',true)
        div.children[1].setAttribute('contenteditable',true)
        div.classList.add('active_editing')
        document.body.classList.add('body_relative')
    })

    document.body.addEventListener('click',()=>{
        div.children[0].setAttribute('contenteditable',true)
        div.children[1].setAttribute('contenteditable',true)
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
    },true)

    const delete_btn = div.querySelector('#delete_btn')
    delete_btn.addEventListener('click',function(){
        let notes = JSON.parse(localStorage.getItem('notes'))
        notes = notes.filter(note=>note.id != div.id)
        localStorage.setItem('notes',JSON.stringify(notes))
        div.remove()
    })
}
