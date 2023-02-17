import Main from "./components/Main"
import SideBar from "./components/SideBar"
import "./App.css"
import { NoteContextProvider } from "./context/NoteContext"

const App = () => {
  return (
    <NoteContextProvider>
      <div className="container">
        <SideBar />
        <Main />
      </div>
    </NoteContextProvider>
  )
}

export default App