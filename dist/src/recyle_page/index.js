addEventListener('load',async()=>{
    const getDeletedNotes = await import('./getDeletedNotes.js')
    getDeletedNotes.default();
})