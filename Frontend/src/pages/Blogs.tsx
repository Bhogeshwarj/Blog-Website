import  Appbar  from "../components/Appbar"
import  {BlogCard}  from "../components/Blogcard"
import { Spinner } from "../components/Spinner";
// import {BlogSkeleton} from "../skeletons/Blogskeleton.jsx";
import { useBlogs } from "../hooks";

const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>
            <Appbar /> 
            <div  className="flex justify-center">
                <div>
                  <Spinner />
                    {/* <BlogSkeleton /> */}
                    {/* <BlogSkeleton /> */}
                    {/* <BlogSkeleton /> */}
                    {/* <BlogSkeleton /> */}
                    {/* <BlogSkeleton /> */}
                </div>
            </div>
        </div>
    }

    return <div>
        <Appbar />
        <div  className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
                />)}
            </div>
        </div>
    </div>
}
export default Blogs
