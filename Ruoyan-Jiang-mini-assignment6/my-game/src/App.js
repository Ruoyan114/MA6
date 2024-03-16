import React, { Component } from 'react'
import Card from './card'
import './App.css'
export default class App extends Component {
  state = {
    arr: [false, false, false, false],
    Count:0
  }
  handleChange = async(index) => {

    const {arr}= this.state
    let NewArr = arr.map((item,i) => {
      return i===index?!item:item
    })
    let conuntArr = NewArr.filter((item) => {
              
     return item
    })
    console.log(conuntArr);
    await this.setState({ arr: NewArr ,Count:conuntArr.length})
      
  }
  render() {
    return (
      <div>
        <h1>Count:{this.state.Count }</h1>
        <div className='Big_box'>
          {this.state.arr.map((item,index) => {
            return <Card isShow={item} index={index} handleChange={this.handleChange} key={index}></Card>
          })}
        </div>
      </div>
    )
  }
}
