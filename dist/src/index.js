const log = console.log
window.countEvent = 0;
note_title.addEventListener('click',()=>{note_content.style.display = 'block',note_gen_btn.style.display='grid'})
note_title.addEventListener('dblclick',()=>{note_content.style.display = 'none',note_gen_btn.style.display='none'})

note_gen_btn.addEventListener('click', async()=>{
    if(!note_title.value) return
    (await import("./noteGenerator.js")).default()
})
addEventListener('load', async()=>{
    let notes = JSON.parse(localStorage.getItem('notes'))
    if(notes?.length === 0 || !notes){
        search_form_title.style.display = 'none'
        search_keyword.style.display = 'none'
        return
    }else{
        dummy.style.display = 'none';
        (await import('./loadNoteFromLocalStorage.js')).default()
    }
})

search_keyword.addEventListener('input',async (e)=>{
    const note_containers = document.querySelectorAll('.each_note_container')
    let arr = []  //contains index of matched div container
    let j=0
    const handleSearch = await import('./handleSearch.js')
    const matched = handleSearch.default(e.target.value, note_containers, arr, j)
    if(!e.target.value){
        note_containers.forEach(note=>{
            note.style.display='block'
            note.style.border='none'
        })
    }else{
        note_containers.forEach(note=>note.style.display='none')
        for(let i=0; i<matched.length;i++){
            for(let k=0;k<note_containers.length;k++){
                if(matched[i] == k){
                    note_containers[k].style.border = '1px solid rgb(20, 61, 95)'
                    note_containers[k].style.display = 'block'
                }
            }
        }
    }
})

redirect_to_input_btn.addEventListener('click',()=>note_title.focus())
theme_toggler.addEventListener('click',(e)=>{
    e.stopPropagation()
    document.body.classList.toggle('light_theme')
})
