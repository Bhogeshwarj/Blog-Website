import { BlogCard } from "../components/Blogcard"

// import { Appbar } from "../components/Appbar"
// import { BlogSkeleton } from "../components/BlogSkeleton";
// import { useBlogs } from "../hooks";

const Blogs = () => {
  return (
    <div>

    <div>Blogs</div>
    <BlogCard 
    authorName={"Kamlesh"}
    title={"helloe e asfe asf "}
    content={"hello lorem23 aosifj oagjoaigj aogj a sef asiefj asief osiejfoi oijljl l"}
    publishedDate={"20 jan 2023"}
    id ={1}
    />
    <BlogCard 
    authorName={"fefseKamlesh"}
    title={"helloe e aefsfe asf "}
    content={"hello lorefem23 aosifj oagjoaigj aogj a sef asiefj asief osiejfoi oijljl l"}
    publishedDate={"20 jans 2023"}
    id ={1}
    />
    <BlogCard 
    authorName={"hello"}
    title={"hello"}
    content={"hello"}
    publishedDate={"esef"}
    id ={1}
    />
    
    </div>
  )
}

export default Blogs