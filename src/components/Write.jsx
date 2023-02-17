import Edit from "./Edit";
import AddButton from "./Main/AddButton";
import { NoteContext } from "../context/NoteContext"
import { useContext, useState } from "react";

const Write = () => {

    const [text, setText] = useState("")

    const { addNote } = useContext(NoteContext)

    const handleClick = () => {
        addNote(text)
        setText("")
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <Edit />
            <div className="edit--content">
                <textarea className="edit--text" name="" id="" onChange={handleChange} value={text}></textarea>
                <AddButton text={"Add Note"} event={handleClick}/>
            </div>
        </>
    )
}

export default Write;