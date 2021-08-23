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
        note_containers.forEach(note=>note.style.display='none')

        for(let i=0; i<matched.length;i++){
            for(let k=0;k<note_containers.length;k++){
                if(matched[i] == k){
                    note_containers[k].style.border = '1px solid rgb(200,0,0)'
                    note_containers[k].style.display = 'block'
                }
            }
        }
    }
})

addEventListener('load',()=>{
    let divs;
    setTimeout(async()=>{
         divs = document.querySelectorAll('.each_note_container')
         if(divs){
             const loazyLoder = await import('./lazyLoader.js')
             divs.forEach((div)=>loazyLoder.default(div))
         }
    },150)

})