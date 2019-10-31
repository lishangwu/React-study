import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {  Card } from 'antd';
const { Meta } = Card;
// https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png
class index extends Component{
    constructor(props) {
        super(props);
        
    }
    static propTypes={
        items: PropTypes.array.isRequired
    }
    
    render(){
        const {items} = this.props
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

export default index