/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  ));
  return (
    <section>
      <h1>Posts</h1>
      {renderPosts}
    </section>
  );
};

export default PostsList;
