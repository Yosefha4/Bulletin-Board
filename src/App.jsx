import PostsList from "./features/posts/PostsList"
import AddPostForm from "./features/posts/AddPostForm"
import "./index.css";
import { Routes,Route } from "react-router-dom"
import Layout from "./components/Layout";
import SinglePostPage from "./features/posts/SinglePostPage";
// import Header from "./components/Header";
import EditPost from "./features/posts/EditPost";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
      {/* <Route path="/head" element={<Header />} /> */}
      <Route index  element={<PostsList />}/>

      <Route path="post">
        <Route index element={<AddPostForm />} />
        <Route path=":postId" element={<SinglePostPage />}/>
        <Route path="edit/:postId" element={<EditPost />}/>
      </Route>

      </Route>
    </Routes>
  )
}

export default App