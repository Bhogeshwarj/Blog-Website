
import { Link } from "react-router-dom"
import Signup from "./Signup"

const Home = () => {
  return (
    <div>
<div className="border-b flex justify-between px-10 py-4">
        <Link to={'/'} className="flex flex-col justify-center cursor-pointer text-2xl font-bold">
                Blog
        </Link>
        </div>
<Signup />

    </div>
  )
}

export default Home