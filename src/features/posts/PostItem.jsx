/* eslint-disable react/prop-types */
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  // const post = useSelecto(state => selectPostById(state, postId))

  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body.substring(0,75)}</p>
      <p className="postCredit">
        <Link className="link" to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostItem;
