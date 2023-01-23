import { format } from "date-fns"

export const handleDelete = (id) => {
  const newPostArray = posts.filter((post) => post.id !== id)
  setPosts(newPostArray)
  navigate("/")
}

export const handleSubmit = (e) => {
  e.preventDefault()
  const id = posts.length ? posts[posts.length - 1].id + 1 : 1
  const datetime = format(new Date(), "MMM dd, yyy pp")
  const newPost = {
    id,
    title: postTitle,
    datetime,
    body: postBody,
  }
  const allPosts = [...posts, newPost]
  setPosts(allPosts)
  setPostTitle("")
  setPostBody("")
  navigate("/")
}
