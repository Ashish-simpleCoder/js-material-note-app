export default function lazyLoader(divs){
    const io = new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const div = entry.target
                div.style.animation = 'load_div 0.3s linear forwards'
                observer.disconnect()
            }
        })
    })
    io.observe(divs)
}