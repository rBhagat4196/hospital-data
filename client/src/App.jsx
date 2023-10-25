
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Patent from "./components/Patent"
function App() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="patent/:id?" element={<Patent/>}/>
    </Routes>
  )
}

export default App
