import React from "react";
import Faker from 'faker';

const CommentDetails =(props)=>{
    console.log(props);
    return(
            
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={Faker.image.avatar()}/>
                </a>
            

                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date"> {props.timeAgo}</span>
                    </div>

                    <div className="text">{props.commentText}</div>

                </div>
            </div>

            
    );
}

export default CommentDetails;