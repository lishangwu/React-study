import React,{Component} from 'react'
import axios from 'axios'
import Search from './search'
import Main from './main'
class index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            keywords:'',
        }
        this.search = this.search.bind(this)
    }
    search(keywords){
        this.setState({keywords})
    }
    
    render(){
        const {keywords} = this.state
        return(
            <div>
                <Search search={this.search}></Search>
                <Main keywords={keywords} ></Main>
            </div>
        )
    }
    
}

export default index