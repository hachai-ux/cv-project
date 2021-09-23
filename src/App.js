import React, { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import uniqid from "uniqid";

class App extends Component {

  constructor() {
    super();

    this.state = {
      renderChild: true,
      keyList: [],
    }
  }


  addEducationalExperienceSections = () => {
    //create key when clicking on add button
    const id = uniqid();
    this.setState({
      keyList: this.state.keyList.concat(id),
    });
  }

  removeEEComponent = (e) => {
    //non-mutating state change to remove component
    this.setState({keyList: this.state.keyList.filter(id => id!== e.target.id)})
  }
 
  render() {
    
    //function and key passed down as prop
    //EESections created/mapped for keyList
    //Components are created from keyList and then put into the return

    const educationalExperienceSections = this.state.keyList.map((id) => {
      return <EducationalExperience remove={this.removeEEComponent} key = {id} id = {id} />
    })


    return (
    <div className="App">
      <h1>General Information</h1>
      <GeneralInformation />
        <h1>Educational Experience</h1>
         {educationalExperienceSections}
        <button onClick={this.addEducationalExperienceSections}>Add</button>
       
    </div>
  );
}


  }
  
export default App;
