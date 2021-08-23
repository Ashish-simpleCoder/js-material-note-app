export default function editModer(div,c1,c2){
    div.children[0].setAttribute('contenteditable',c1)
    div.children[1].setAttribute('contenteditable',c2)
    div.classList.add('active_editing')
    document.body.classList.add('body_relative')
}