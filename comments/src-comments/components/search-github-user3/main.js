import React,{Component} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import {  Card } from 'antd';
const { Meta } = Card;
// https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png
class index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            loading:false
        }
    }
    static propTypes={
        keywords: PropTypes.string.isRequired
    }
    componentWillReceiveProps(newProps){
        console.log('componentWillReceiveProps..');
        const {keywords} = newProps
        this.setState({loading: true})
        const _this = this
        axios.get('http://api.github.com/search/users?q=' + keywords)
            .then(function (response) {
                // handle success
                const {items} = response.data
                _this.setState({items, loading:false})
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
        const {items,loading} = this.state
        const display = loading ? 'block' : 'none'
        if(loading){
            return <h1 style={{display}}>loading..</h1>
        }else{
            return(
                <div >
                    {
                        items.map((item, index)=>{
                            const {login, avatar_url, html_url} = item
                            return (
                                <div style={{display:'inline-block'}} key={index}>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt={login} src={avatar_url} />}
                                    />
                                    <Meta title={login} description={html_url} />
                                </div>
                                
                            )
                        })
                    }
                    
                </div>
            )
        }
        
    }
    
}

export default index