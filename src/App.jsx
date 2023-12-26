import PostsList from "./features/posts/PostsList"
import AddPostForm from "./features/posts/AddPostForm"
import "./App.css"

const App = () => {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  )
}

export default App