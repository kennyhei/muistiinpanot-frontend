import React from 'react'

const NoteForm = ({ onSubmit, value, handleChange }) => {
    return (
        <div>
            <h2>Luo uusi muistiinpano</h2>

            <form onSubmit={onSubmit}>
                <input value={value} onChange={handleChange} />
                <button type="submit">Tallenna</button>
            </form>
        </div>
    )
}

export default NoteForm
