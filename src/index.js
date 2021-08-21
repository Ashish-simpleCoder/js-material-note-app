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
    let arr =[]
    let j=0
    const handleSearch = await import('./handleSearch.js')
    const matched = handleSearch.default(e.target.value,note_containers,arr,j)
    console.log(matched)
    if(e.target.value == ''){
        note_containers.forEach(note=>{
            note.style.display='block'
            note.style.border='none'
        })
    }else{
        // for(let i=0; i<note_containers.length;i++){
        //     if(i !== matched){
        //         note_containers[i].style.display = 'none'
        //     }
        //     if(i == matched){
        //         note_containers[i].style.display = 'block'
        //     }
        // }
        note_containers.forEach(note=>note.style.display='none')

        for(let i=0; i<matched.length;i++){
            for(let k=0;k<note_containers.length;k++){
                if(matched[i] == k){
                    // log(matched[i],k)
                    note_containers[k].style.border = '1px solid red'
                    note_containers[k].style.display = 'block'
                }

            }
        }
    }

})