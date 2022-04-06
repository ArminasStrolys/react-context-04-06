import React, { useState } from 'react';
import { useGlobalContext } from '../../context/Context';
import './addPost.css'

const AddPost = () => {
    const {addPost} = useGlobalContext()
    const [newPost, setNewPost] = useState({
        'header':'',
        'title':''
    })

const handleChange = (e) => {
    setNewPost({
        ...newPost,
        [e.target.name]:e.target.value
    })
}

const submitHandler = (e) => {
    e.preventDefault()
    addPost(newPost)
}

console.log(newPost)

    return (
        <div className='former'>
            <form onSubmit={submitHandler}>
                <input style={{margin:'10px', width:'30%'}} type="text" placeholder='Enter header' value={newPost.header} onChange={handleChange} name='header' />
                <br />
                <input style={{margin:'10px', width:'30%'}} type="text" placeholder='Enter title' value={newPost.title} onChange={handleChange} name='title' />
                <br />
                <button type='submit'>Add post</button>
            </form>
        </div>
    );
}

export default AddPost;
