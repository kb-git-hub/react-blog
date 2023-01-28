import { useEffect} from "react"
import { useParams, Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { format } from "date-fns"


const EditPost = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const editTitle = useStoreState(state=>state.editTitle)
  const editBody = useStoreState(state=>state.editBody)

  const editPost = useStoreActions(actions => actions.editPost)
  const setEditTitle = useStoreActions(actions => actions.setEditTitle)
  const setEditBody = useStoreActions(actions => actions.setEditBody)
  

  const getPostById = useStoreState(state=> state.getPostById)
  const post = getPostById(id)

  const handleEdit = async (id) =>{
    const datetime = format(new Date(), "MMM dd, yyyy pp")
    const updatedPost = {id, title: editTitle, datetime,body: editBody}
    editPost(updatedPost)
    // navigate(`/`)
    navigate(`/post/${id}`)
  
  }



    useEffect(()=>{
      if (post){
        setEditTitle(post.title)
        setEditBody(post.body)
      }
    }, [post, setEditTitle, setEditBody])

    return (
        <main className='NewPost'>
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className='newPostForm' onSubmit={(e)=> e.preventDefault()}>
                        <label htmlFor='postTitle'>Title:</label>
                        <input 
                        required
                        type="text" 
                        id="postTitle"
                        value={editTitle}
                        onChange={((e)=>setEditTitle(e.target.value))}
                        />
                        <label htmlFor='postBody'>Post:</label>
                        <textarea
                        required
                        id='postBody'
                        value={editBody}
                        onChange={(e)=> setEditBody(e.target.value)}
                        />
                        <button type='button' onClick={()=> handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!editTitle &&
          <>
            <h2>Post not found</h2>
            <p>
              <Link to='/'>Visit our homepage</Link>
            </p>
          </>
        }
        </main>

    )
}

export default EditPost