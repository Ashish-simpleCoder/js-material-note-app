export default function searchNote(val,note_containers){
    for(let i=0; i<note_containers.length; i++){
        const str2 = note_containers[i].children[0].innerText
        const str = note_containers[i].children[1].innerText
        if(str2.includes(val) || str.includes(val)){
            return i
        }
    }
}