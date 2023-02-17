import { createContext, useState, useEffect , useMemo} from "react";

export const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {

  //Use State 

  const [note, setNote] = useState([]);
  
  const [index, setIndex] = useState([])

  const [content, setContent] = useState("")

  const [write, setWrite] = useState(true);


  //Use Index

  useEffect(() => {
    const newNote = localStorage.getItem("note")
    newNote && setNote(JSON.parse(newNote))
    const newIndex = localStorage.getItem("index")
    newIndex && setIndex(JSON.parse(newIndex))
  }, [])

  //Functions

  const addNote = (text) => {
    setNote(prevNote => {
      const newState = [...prevNote, { id: index.length, content: text }]
      localStorage.setItem("note", JSON.stringify(newState))
      return newState
    }
    );
    setIndex(preState => {
      const newState = [...preState, {}]
      localStorage.setItem("index", JSON.stringify(newState))
      return newState
    }
    )
  };

  const remNote = (element) => {
    setNote(prevNote => {
      console.log(element)
      const newNote = note.filter((n) => n.id !== element)
      console.log(newNote)
      localStorage.setItem("note", JSON.stringify(newNote))
      return newNote
    }
    )
  }

  const getId = (id) => {
    const newNote = note.filter((n) => n.id === id)
    const text = newNote[0].content
    setContent(text)
  }

  return (
    <NoteContext.Provider
      value={{
        note,
        addNote,
        remNote,
        getId,
        content,
        setWrite,
        write,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
