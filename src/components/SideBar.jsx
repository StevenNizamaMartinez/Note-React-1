import { useContext } from "react"
import { NoteContext } from "../context/NoteContext"
import Note from "./Notes/Note"

const SideBar = () => {

    const {getId} = useContext(NoteContext)


    const handleClick = (e) => {
        const element = parseInt(e.target.id)
        getId(element)
    }

    return (
        <aside className="aside">
            <h2 className="aside--title">Notes</h2>
            <div className="aside--note"  
            onClick={handleClick}>
                <Note/>
            </div>
        </aside>
    )
}

export default SideBar