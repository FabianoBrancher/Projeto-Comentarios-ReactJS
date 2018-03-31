import React from 'react';

class NewComment extends React.Component {
    constructor(props) {
        super(props);
        this.handleEnter = this.handleEnter.bind(this);
    };
    
    // handleEnter = (event) => {
    //     if (event.keyCode === 13) {
    //         this.props.postNewComment({
    //             comment: this.refs.comment.value
    //         });
    //         // console.log(event.keyCode);
    //         this.refs.comment.value = '';
    //         event.preventDefault();
    //     };
    // }

    handleEnter(event) {
        if (event.keyCode === 13) {
            this.props.postNewComment({
                comment: this.refs.comment.value
            });
            // console.log(event.keyCode);
            this.refs.comment.value = '';
            event.preventDefault();
        };
    };

    render() {
        return (
            <div className="row">
                <textarea ref="comment" placeholder="Comente!" className="form-control" 
                          onKeyDown={this.handleEnter}> 
                </textarea>
            </div>
        )
    }
}

export default NewComment;