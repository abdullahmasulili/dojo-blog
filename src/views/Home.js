import useFetch from "../api/useFetch";
import BlogList from "../components/BlogList";
import "../styles/home.css";
const Home = () => {
  const { data, isLoading, isError } = useFetch(`http://localhost:8000/blogs`)
  return (
    <div className="home">
      {isError && <div>{isError}</div>}
      {isLoading && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="All Blog Post" />}
    </div>
  );
};

export default Home;
