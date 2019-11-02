import React, {Component} from 'react'
import CommentItem from '../comment-item'

export default class index extends Component{
    constructor(props) {
        super(props);
        
    }
    handleClick = (index)=>{
        this.props.delComment(index)
    }
    render(){
        const {comments} = this.props
        return(
            <div>
            {
                comments.map((item, index)=>{
                    return (
                        <div key={index}>
                            <div style={{display:'inline-block'}}>
                                <CommentItem item={item} key={index}></CommentItem>
                            </div>
                            <div style={{display:'inline-block'}}>
                                <button className='btn btn-link' onClick={()=>{this.handleClick(index)}}>删除</button>
                            </div>
                            <hr/>

                        </div>
                    )
                })      
            }
            </div>
        )
    }
    
}