import React from 'react'

const Note = ({ note, toggleImportance }) => {
    const label = note.important ? 'make not important' : 'make important'
    
    return (
        <div className="wrapper">
            <div className="content">
                {note.content} <button onClick={toggleImportance}>{label}</button>
            </div>
        </div>
    )
}

export default Note