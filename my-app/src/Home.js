import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && (
        <div className="error">
          <h3>
          {error}
          </h3>
        </div>
      )}
      {isPending && (
        <div className="pending">
          <h3>Loading...</h3>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
