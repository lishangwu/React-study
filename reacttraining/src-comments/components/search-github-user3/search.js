import React,{Component} from 'react'

import PropTypes from 'prop-types'
import { Input } from 'antd';
const { Search } = Input;

class index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[],
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    static propTypes = {
        search: PropTypes.func.isRequired
    }
    handleSearch(keywords){
        if(keywords){
            this.props.search(keywords)
        }
    }
    
    render(){
        return(
                <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={this.handleSearch}
            />
        )
    }
    
}

export default index