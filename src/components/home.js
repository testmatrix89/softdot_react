import React, { Component } from "react";

class Home extends Component{
    myfn(e) {
        console.log(e.target.value)
    }
    render(){
        const myfnc = (e) => {
            console.log(e.target.value)
        }
        return(
            <div>
                <h1>Home page contents details</h1>
                <input type="text" onChange={ myfnc } />
            </div>
        )
    }
}
export default Home;