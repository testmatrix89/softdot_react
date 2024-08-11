import React, { Component } from 'react'

class About extends Component {
  render() {
    async function apiCall() {
      const url = 'https://api.restful-api.dev/objects'
      try{
        const response = await fetch(url);
        if(!response.ok){
          throw new Error(`Response status: ${response.status}`);
        }
        const data = response;
        return data.json();
      }
      catch(error){
        console.log("Throwing errors here-------", error.message);
      }
    }

    const person = {
      updates: false,
      firstName: "Test",
      lastName: "Mate",
      age: 30,
      gender: "male",
      hobbies: ["Sports", "Cooking"],
      getName: function(){
        return this.firstName + " " + this.lastName;
      },
      updateName: function(fname, lname, isUpdate){
        this.updates = isUpdate;
        return new Promise((resolve, reject) => {
          if(this.updates){
              this.firstName = fname;
              this.lastName = lname;
              const resApi = apiCall();
              resolve(resApi);
          }else {
            reject(new Error("Updates not allowed"))
          }
        })
      }
    }

    person.updateName("Prince", "Kumar", true).then((vls) => {
      console.log(vls);
      console.log(person.getName());
    }).then(()=>{
      person.updateName("Shashi", "Singh", true).then(() => {
        console.log(person.getName());
      });
    })

    return (
      <div>
        <h1>About page</h1>
      </div>
    )
  }
}
export default About;