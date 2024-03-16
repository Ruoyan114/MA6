import React, { Component } from 'react'
import './card.css'
export default class card extends Component {
      handleChange = () => {
        this.props.handleChange(this.props.index)
        }
    render() {
        
       
        return (
            <div className={this.props.isShow?'black':"white"} onClick={this.handleChange}> 
                
            </div>
        )
    }
}
