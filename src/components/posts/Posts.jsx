import React from 'react';
import { useGlobalContext } from '../../context/Context';
import AddPost from '../addPost/AddPost';
import Post from '../post/Post';

const Posts = () => {
    const {posts} = useGlobalContext()

    return (
        <div>
        <AddPost />
            {posts.length && posts.map((post, i)=> <Post
            key={i}
            header={post.header}
            title={post.title}
            />
            )}
        </div>
    );
}

export default Posts;
