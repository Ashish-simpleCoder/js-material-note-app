export default function searchNote(val,note_containers,arr,j){
    val = val.toLowerCase().trim()
    if(val.includes("  ")){
        for(let i=0;i<val.length; i++){
            val = val.replace("  "," ")
        }
    }

    for(let i=0; i<note_containers.length; i++){
        let str = note_containers[i].children[0].innerText.toLowerCase().trim()
        let str2 = note_containers[i].children[1].innerText.toLowerCase().trim()
        if(str2.includes("\n")){
            for(let i=0;i<str2.length; i++){
                str = str2.replace("\n"," ")
            }
        }
        if(str.includes(val) || str2.includes(val)){
            arr[j] = i
            j++
        }
    }
    return arr
}