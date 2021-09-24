import React, { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";
import uniqid from "uniqid";

class App extends Component {

  constructor() {
    super();

    this.state = {
      renderChild: true,
      keyListEE: [],
      keyListPE: [],
    }
  }


  addEducationalExperienceSections = () => {
    //create key when clicking on add button
    const id = uniqid();
    this.setState({
      keyListEE: this.state.keyListEE.concat(id),
    });
  }

  addPracticalExperienceSections = () => {
    //create key when clicking on add button
    const id = uniqid();
    this.setState({
      keyListPE: this.state.keyListPE.concat(id),
    });
  }

  removeEEComponent = (e) => {
    //non-mutating state change to remove component
    this.setState({keyListEE: this.state.keyListEE.filter(id => id!== e.target.id)})
  }

  removePEComponent = (e) => {
    //non-mutating state change to remove component
    this.setState({keyListPE: this.state.keyListPE.filter(id => id!== e.target.id)})
  }
 
 
  render() {
    
    //function and key passed down as prop
    //EESections created/mapped for keyList
    //Components are created from keyList and then put into the return

    const educationalExperienceSections = this.state.keyListEE.map((id) => {
      return <EducationalExperience remove={this.removeEEComponent} key = {id} id = {id} />
    })

     const practicalExperienceSections = this.state.keyListPE.map((id) => {
      return <PracticalExperience remove={this.removePEComponent} key = {id} id = {id} />
    })


    return (
    <div className="App">
      <h1>General Information</h1>
      <GeneralInformation />
        <h1>Educational Experience</h1>
         {educationalExperienceSections}
        <button onClick={this.addEducationalExperienceSections}>Add</button>
        <h1>Practical Experience</h1>
         {practicalExperienceSections}
        <button onClick={this.addPracticalExperienceSections}>Add</button>

       
    </div>
  );
}


  }
  
export default App;
