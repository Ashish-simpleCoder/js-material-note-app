const log = console.log

note_gen_btn.addEventListener('click',async function(e){
    if(!note_title.value || !note_content.value) return
    const noteGenerator = await import("./noteGenerator.js")
    noteGenerator.default()
})
addEventListener('load',async()=>{
    const loadNoteFromLocalStorage = await import('./loadNoteFromLocalStorage.js')
    loadNoteFromLocalStorage.default()
})


search_keyword.addEventListener('input',async (e)=>{

    const note_containers = document.querySelectorAll('.each_note_container')
    const handleSearch = await import('./handleSearch.js')
    const matched = handleSearch.default(e.target.value,note_containers)

    if(e.target.value == ''){
        note_containers.forEach(note=>{
            note.style.display='block'
        })
    }else{
        for(let i=0; i<note_containers.length;i++){
            if(i !== matched){
                note_containers[i].style.display = 'none'
            }
            if(i == matched){
                note_containers[i].style.display = 'block'
            }
        }
    }

})