/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postSlice";
import PostItem from "./PostItem";
import { useEffect } from "react";

const PostsList = () => {
  const dispatch = useDispatch();



  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if(postsStatus === 'idle'){
      dispatch(fetchPosts());
    }
  }, [postsStatus,dispatch]);

  let content;
  if(postsStatus === 'loading'){
    content = <p>Loading...</p>
  }
  else if(postsStatus === 'succeeded'){
    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date));
    content = orderedPosts.map(post => <PostItem key={post.id} post={post} />);

  }else if(postsStatus === 'failed') {
    content = <p>{error}</p>
  }

  return (
    <section>
      <h1>Posts</h1>
      {content}
    </section>
  );
};

export default PostsList;
