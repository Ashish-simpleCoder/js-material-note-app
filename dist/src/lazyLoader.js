export default function lazyLoader(divs){
    const io = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const div = entry.target
                div.style.animation = 'load_div 0.3s linear forwards'
            }
            if(!entry.isIntersecting){
                const div = entry.target
                div.style.animation =''
            }
        })
    })
    io.observe(divs)
}