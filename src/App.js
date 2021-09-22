import React, { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";

class App extends Component {

  constructor() {
    super();

    this.state = {
      educationalExperienceSections : 0
    }
  }

  addEducationalExperienceSections = () => {
    this.setState({
      educationalExperienceSections: this.state.educationalExperienceSections+1
    })
  }

  removeEducationalExperienceSection = (e) => {
   
  }
 
  render() {
    
    //count number of educational experience sections
    const educationalExperience = [];
    for (let i = 0; i < this.state.educationalExperienceSections; i++){
      educationalExperience.push(<EducationalExperience removeSection = {this.removeEducationalExperienceSection} key = {i} number ={i} />)
    }
    console.log(educationalExperience);

    return (
    <div className="App">
      <h1>General Information</h1>
      <GeneralInformation />
        <h1>Educational Experience</h1>
         {educationalExperience}
        <button onClick={this.addEducationalExperienceSections}>Add</button>
       
    </div>
  );
}


  }
  
export default App;
