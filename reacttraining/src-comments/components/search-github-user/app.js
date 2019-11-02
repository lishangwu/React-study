import React,{Component} from 'react'
import axios from 'axios'
import Search from './search'
import Main from './main'
class index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[],
        }
        this.search = this.search.bind(this)
    }
    search(val){
        const _this = this
        axios.get('http://api.github.com/search/users?q=' + val)
            .then(function (response) {
                // handle success
                const {items} = response.data
                _this.setState({items})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    
    render(){
        const {items, loading} = this.state
        const display = items.length === 0 ? 'block' : 'none'
        return(
            <div>
                <Search search={this.search}></Search>
                <h1 style={{display}}>nothing please searching</h1>
                <Main items={this.state.items} ></Main>
            </div>
        )
    }
    
}

export default index