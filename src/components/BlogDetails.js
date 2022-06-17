import { useHistory, useParams } from "react-router-dom";
import useFetch from "../api/useFetch";
import '../styles/blog-details.css';

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const navigator = useHistory()
  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      navigator.push("/");
    })
  }
  return (
    <div className="blog-details">
      {isError && <div>{isError}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
