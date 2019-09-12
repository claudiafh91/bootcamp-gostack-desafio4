import React from "react";

function Post({ post }) {
  return (
    <li className="post">
      <div className="post-data">
        <img src={post.author.avatar} className="logo" alt="logo pefil" />
        <p className="autor">
          <strong> {post.author.name} </strong>
          <i>{post.date}</i>
        </p>
      </div>
      <p>{post.content}</p>
      <div className="divider" />
      {post.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </li>
  );
}

function Comment({ data }) {
  return (
    <div className="comment">
      <img src={data.author.avatar} className="logo" alt="logo pefil" />
      <p>
        <strong> {data.author.name} </strong>
        {data.content}
      </p>
    </div>
  );
}

export default Post;
