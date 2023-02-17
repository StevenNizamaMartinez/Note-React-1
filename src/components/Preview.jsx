import AddButton from "./Main/AddButton";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

const Preview = () => {

    const {content} = useContext(NoteContext)

    const handleContentChange = (event) => {
        
    };

    return (
        <>
            <div className="edit--content">
                <textarea className="edit--text" name="" id="" value={content} onChange={handleContentChange}></textarea>
                {/* <AddButton text={"Save Note"}/> */}
            </div>
        </>
    )
}

export default Preview;