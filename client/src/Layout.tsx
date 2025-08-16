import Body from "./components/Body"
import Sidebar from "./components/Sidebar"


const Layout = () => {
  return (
    <div className="flex">
    <Sidebar/>
    <Body/>
    </div>
  )
}

export default Layout