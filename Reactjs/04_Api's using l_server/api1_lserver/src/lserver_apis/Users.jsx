import React, { Component } from 'react'
import Recipie from './Recipie'
import axios from 'axios'
export default class Users extends Component {
 constructor(props) {
   super(props)
 
   this.state = {

      recipies : []
   }
 }
 
  render() {
    return (
      <div className='container' style={{display : "flex"}}>
          {this.state.recipies.map((usr,i)=> <Recipie key={i} {...usr} recipieDetails ={usr} />)}
      </div>
    )
  }

  async componentDidMount(){
    // // fetch with await
    // let data = await (await fetch("http://localhost:3001/recipes")).json()
    // console.log(data)
    // this.setState({recipies:data})

    // // axios 
    // axios.get("http://localhost:3001/recipes").then((res)=>{
    //   console.log(res)
    // })

    // axios with await
    let response = await axios.get("http://localhost:3001/recipes")
    // console.log(response)
    this.setState({recipies:response.data})
  }
}