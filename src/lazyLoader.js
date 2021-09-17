const options = {
    root:null,
    rootMargin:'0px',
    threshold:0.6
}
export default function lazyLoader(divs){
    const io = new IntersectionObserver(callback,options)
    function callback(entries){
        entries.forEach(entry=>{
            const div = entry.target
            if(entry.isIntersecting){
                div.style.animation = 'load_div 0.3s linear forwards'
                div.classList.add('animate_list_loading')
            }
            // else{
            //     div.style.animation =''
            //     div.classList.remove('animate_list_loading')
            // }
        })
    }
    io.observe(divs)
}
