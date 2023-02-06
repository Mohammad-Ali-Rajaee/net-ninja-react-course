import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  function handleDelete() {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      console.log("blog deleted");
      navigate("/");
    });
  }

  return (
    <div className="blog-details">
      {isPending && (
        <div className="pending">
          <h3>Loading...</h3>
        </div>
      )}
      {error && (
        <div className="error">
          <h3>{error}</h3>
        </div>
      )}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}> Delete Blog </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
