import React from 'react';

// class Comment extends React.Component {
//     render() {
//         return (
//             <div className="card">
//                 <p className="card-body">{this.props.comment.comment}</p>
//             </div>
//         )
//     }
// };

const Comment = (props) => {
    return (
        <div className="card">
            <p className="card-body">{props.comment.comment} <br />
               <strong>por: {props.comment && props.comment.user && props.comment.user.name && props.comment.user.name}</strong> </p>
        </div>    
    )
};

export default Comment;