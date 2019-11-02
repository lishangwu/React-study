import React,{Component} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Input } from 'antd';
const { Search } = Input;

class index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            loading:false
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    static propTypes = {
        search: PropTypes.func.isRequired
    }
    handleSearch(val){
        if(val){
            this.setState({loading:true})
            const _this = this
            axios.get('http://api.github.com/search/users?q=' + val)
                .then(function (response) {
                    // handle success
                    const {items} = response.data
                    _this.props.search(items)
                    _this.setState({loading:false})
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                }); 
            }
    }
    
    render(){
        const {loading} = this.state
        return(
                <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                // value='aa'
                loading={loading}
                onSearch={this.handleSearch}
            />
        )
    }
    
}

export default index