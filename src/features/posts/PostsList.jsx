/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,

} from "./postSlice";
import PostItem from "./PostItem";

const PostsList = () => {



  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);


  let content;
    if (postsStatus === 'loading') {
        content = <p>Loading...</p>;
    } else if (postsStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostItem key={post.id} post={post} />)
    } else if (postsStatus === 'failed') {
        content = <p>{error}</p>;
    }

  return (
    <section>
      {/* <h1>Posts</h1> */}
      {content}
    </section>
  );
};

export default PostsList;
