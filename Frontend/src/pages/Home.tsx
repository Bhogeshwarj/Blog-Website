import { Link } from "react-router-dom"
import Signin from "./Signin"

const Home = () => {
  return (
    <div>
<div className="border-b flex justify-between px-10 py-4">
<div>
        <Link to={'/'} className="flex flex-col justify-center cursor-pointer text-2xl font-bold">
                Blog
        </Link>
        </div>
        <Signin />
    </div>
    </div>
  )
}

export default Home