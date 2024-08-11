import React, { Component } from 'react'
import HomeContent from '../components/home'
import CustomTextInput from '../components/refTest'

export default class home extends Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount(){
    this.textInput.current.focusTextInput();
    console.log('check', this)
  }
  render() {
    return (
      <div>
        <HomeContent />
        <hr />
        <CustomTextInput ref={this.textInput} />
      </div>
    )
  }
}
