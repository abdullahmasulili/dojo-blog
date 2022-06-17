import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/create-blog.css';

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isCreating, setIsCreating] = useState(false)
    const navigation = useHistory()

    const handleSubmit = (e) => {
        setIsCreating(true)
        e.preventDefault()
        const data = { title, body, author }
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(() => {
            setTitle('')
            setBody('')
            setIsCreating(false)
            navigation.push('/')
        })
    }
    return ( 
        <div className="create">
            <h2>Add Blog List</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label>Blog Body</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                { !isCreating && <button type='submit'>Create Blog</button>}
                { isCreating && <button type='submit' disabled>Creating...</button>}
            </form>
        </div>
     );
}
 
export default Create;