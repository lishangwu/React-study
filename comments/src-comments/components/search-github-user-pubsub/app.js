import React,{Component} from 'react'
import Search from './search'
import Main from './main'
class index extends Component{

    render(){
        return(
            <div>
                <Search ></Search>
                <Main ></Main>
            </div>
        )
    }
    
}

export default index