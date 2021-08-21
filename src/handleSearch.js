// export default function searchNote(val,note_containers){
//     for(let i=0; i<note_containers.length; i++){
//         const str2 = note_containers[i].children[0].innerText
//         const str = note_containers[i].children[1].innerText
//         if(str2.includes(val) || str.includes(val)){
//             return i
//         }
//     }
// }
export default function searchNote(val,note_containers,arr,j){
    for(let i=0; i<note_containers.length; i++){
        let str = note_containers[i].children[0].innerText
        let str2 = note_containers[i].children[1].innerText
        if(str.includes(val) || str2.includes(val)){
            arr[j] = i
            j++
        }
    }
    return arr
}