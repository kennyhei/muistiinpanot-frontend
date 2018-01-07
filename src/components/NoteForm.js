import React from 'react'

const NoteForm = ({ addNote, new_note, handleNoteChange }) => {
    return (
        <div>
            <h2>Luo uusi muistiinpano</h2>

            <form onSubmit={addNote}>
                <input value={new_note} onChange={handleNoteChange} />
                <button type="submit">Tallenna</button>
            </form>
        </div>
    )
}

export default NoteForm
