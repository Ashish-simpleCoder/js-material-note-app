export default function editModer(div,c1,c2,e){
    if(div.children[0].getAttribute('contenteditable') === 'false'){
        let x = e.clientX - div.getBoundingClientRect().left
        let y = e.clientY - div.getBoundingClientRect().top
        const span = document.createElement('span')
        span.classList.add('ripple_effect')
        span.style.left = x+'px'
        span.style.top = y+'px'
        div.appendChild(span)
        setTimeout(()=>span.remove(),600)
    }
    save_btn.style.display = 'block'
    div.children[0].setAttribute('contenteditable',c1)
    div.children[1].setAttribute('contenteditable',c2)
    div.classList.add('active_editing')
    document.body.classList.add('body_relative')
}