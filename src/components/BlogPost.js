import React from 'react';

const BlogPost = ({ post }) => {
    return (
        <div className="post">
            <img src={post.img} alt="cat" />
            <p>{ post.content }</p>
        </div>
    )
}

export default BlogPost
