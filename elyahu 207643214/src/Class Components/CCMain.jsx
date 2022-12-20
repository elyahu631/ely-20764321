import React, { Component } from 'react'
import FCInput from '../Functional Components/FCInput'
import FCResult from '../Functional Components/FCResult'
import FCButton from '../Functional Components/FCButton'

export default class CCMain extends Component {
  constructor(props){
    super(props)
    this.state = {
      num1:0,
      num2:0,
      res:0
    }
  }

  chgFirstNum = (num) =>{
    this.setState({num1: num})
    console.log(num1);
  }

  chgSecondNum = (num) =>{
    this.setState({num2: num})
    console.log(num2);
  }


  render() {
    return (
      <div>
        <FCInput firstNum={this.chgFirstNum} />
        <FCButton/>
        <FCInput firstNum={this.chgSecondNum}/>
        <FCResult finalres={this.state.res}/>
      </div>
    )
  }
}
