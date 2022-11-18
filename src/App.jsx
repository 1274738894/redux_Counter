import React, { Component } from 'react'
import { connect } from 'react-redux'
import {add,sub} from './actions'
class App extends Component {

  render() {
    console.log(this.props);
    let {count,dispatch}= this.props
    return (
      <div>App
        <p>{"count:"+count}</p>
        <button onClick={()=>dispatch(add())}>+</button>
        <button onClick={()=>dispatch(sub())}>-</button>
      </div>
    )
  }
}
const mapStateToProps=(state,props)=>{
  return{
    count:state
  }
}

export default connect(mapStateToProps)(App)
