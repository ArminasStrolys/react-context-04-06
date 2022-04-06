import React, { useState } from 'react';

const Post = (props) => {

  const [numb, setNumb] = useState(0)

  return (
    <div style={{ margin: "50px" }} className="ui card">
      <div className="content">
        <img
          className="ui avatar image"
          src={"https://picsum.photos/seed/picsum/200/300"}
          alt="not loading pic" />
        {props.header}
      </div>
      <div className="image">
        <img src='https://picsum.photos/199' alt='picccc' />
      </div>
      <div className="content">
      <p>{props.title}</p>
        <span className="right floated">
          <i onClick={()=>setNumb(numb + 1)} className="heart outline like icon"></i>
          {numb} likes
        </span>
      </div>
    </div>
  );
};

export default Post;
