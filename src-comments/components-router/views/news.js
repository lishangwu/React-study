import React, {Component} from 'react'

export default class index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            news:[]
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            const news = [
                {id:1, title:'m001'},
                {id:2, title:'m002'},
                {id:3, title:'m003'},
                {id:4, title:'m004'},
                {id:5, title:'m005'},
            ]
            this.setState({news})
        },1)
    }
    render(){
        return(
            <div>
                {
                    this.state.news.map((n, index) => (
                        <li key={index}>
                            {'news:' + n.title}
                        </li>
                    ) )
                }
                
            </div>
            
        )
    }
    
}