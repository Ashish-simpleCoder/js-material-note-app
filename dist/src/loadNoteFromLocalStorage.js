export default function loadNoteFromLocalStorage(){
    const notes = JSON.parse(localStorage.getItem('notes')) || []
    notes.forEach((note)=>{
        x(note)
    })
    async function x(note){
        const noteRenderer = await import('./noteRenderer.js')
        noteRenderer.default(note,true)
    }
}