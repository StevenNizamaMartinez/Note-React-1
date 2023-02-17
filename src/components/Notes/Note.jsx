import { useContext } from "react"
import { NoteContext } from "../../context/NoteContext"
import { AiFillDelete } from "react-icons/ai"

const Note = () => {
    const { remNote, note, setWrite} = useContext(NoteContext)

    const handleClick = (e) => {
        const element = parseInt(e.target.parentElement.parentElement.id)
        remNote(element)
    }

    const handleShow = () => {
        setWrite(false)
    }
    
    const listNote = note.map((n,i) => {

        return (
            <h5 
            key={n.id + 1} 
            id={n.id}
            className="note--item"
            onClick={handleShow}
            >
                Note {i + 1}
                <AiFillDelete onClick= {handleClick}/>
            </h5>
        )
    }
    )

    return (
        <>
            {listNote}
        </>
    )
}

export default Note