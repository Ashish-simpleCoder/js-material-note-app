export default function lazyLoader(divs){
    const io = new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry=>{
            console.log(divs)
            if(entry.isIntersecting){
                const div = entry.target
                div.style.animation = 'load_div 0.7s ease forwards'
                // observer.disconnect()
            }
            if(!entry.isIntersecting){
                const div = entry.target
                div.style.animation = ''
            }
        })
    })
    io.observe(divs)
}