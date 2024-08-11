import React, { Component } from "react";

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {value: 'Jay Shri Ram'}
    }

    myfnc(e) {
        this.setState({value: e.target.value});
    }

    render(){
        return(
            <section className="container py-5 text-center">
                <div className="row py-lg-5">
                    <h1>Home page contents details</h1>
                    <input type="text" onChange={ (e) => this.myfnc(e) } className="form-control text-center form-control-lg" />
                    <br />
                    <h2 className="py-5">{ this.state.value }</h2>
                </div>
            </section>
        )
    }
}
export default Home;