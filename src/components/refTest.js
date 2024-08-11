import React, { Component } from "react";

class CustomTextInput extends Component {
    constructor(props){
        super(props);
        this.state = {value: "Focus the text input"}
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput(e){
        this.textInput.current.focus();
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.textInput} className="form-control text-center form-control-lg" />
                <br />
                <input type="text" onClick={(e) => this.focusTextInput(e)} className="form-control text-center form-control-lg" />
            </div>
        )
    }
}

export default CustomTextInput;