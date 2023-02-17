import Button from "./Main/Button";
import Write from "./Write";

import { useContext, useState } from "react";
import Preview from "./Preview";
import { NoteContext } from "../context/NoteContext";

const Main = () => {

    const {write,setWrite, show} = useContext(NoteContext)

    const handleClick = (e) => {
        if (e.target.name === "Write") {
            setWrite(true)
        } else  if (e.target.name === "Preview"){
            setWrite(false)
        } else if (show) {
            setWrite(false)
        }
    }

    return (
        <main>
            <div className="main--butons">
                <Button text="Write" clickEvent={handleClick}/>
                <Button text="Preview" clickEvent={handleClick}/>
            </div>
            {write ? <Write /> : <Preview/>}
        </main>
    )
}

export default Main;