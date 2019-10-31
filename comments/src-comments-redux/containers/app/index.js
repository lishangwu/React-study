import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {addComment,delComment, getComments} from '../../redux/action'

import CommentAdd from '../../components/comment-add'
import CommentList from '../../components/comment-list'

class App extends Component{
    constructor(props) {
        super(props);
    }

    static propTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        delComment: PropTypes.func.isRequired,
        getComments: PropTypes.func.isRequired,
    }
    componentDidMount(){
        this.props.getComments()
    }
    
    render(){
        const {comments, addComment, delComment} = this.props
        return(
            <div className='container'>
                <div className="col-sm-6">
                    <CommentAdd addComment={addComment}></CommentAdd>
                </div>
                <div className="col-sm-6">
                    <CommentList comments={comments} delComment={delComment}></CommentList>
                </div>
            </div>
        )
    }
    
}

export default connect(
    state=>({comments: state}),
    {addComment, delComment, getComments}
)(App)