import React, { Component, useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";
import uniqid from "uniqid";

const App = () => {
    
  const [renderChild, setRenderChild] = useState(true);
  const [keyListEE, setKeyListEE] = useState([]);
  const [keyListPE, setKeyListPE] = useState([]);
  

  const addEducationalExperienceSections = () => {
    //create key when clicking on add button
    const id = uniqid();
    setKeyListEE(keyListEE.concat(id));
  }

  const addPracticalExperienceSections = () => {
    //create key when clicking on add button
    const id = uniqid();
    setKeyListPE(keyListPE.concat(id));
  }

  const removeEEComponent = (e) => {
    //non-mutating state change to remove component
    setKeyListEE(keyListEE.filter(id => id !== e.target.id))
  }

  const removePEComponent = (e) => {
    //non-mutating state change to remove component
    setKeyListPE(keyListPE.filter(id => id!== e.target.id))
  }
 
    
    //function and key passed down as prop
    //EESections created/mapped for keyList
    //Components are created from keyList and then put into the return

    const educationalExperienceSections = keyListEE.map((id) => {
      return <EducationalExperience remove={removeEEComponent} key = {id} id = {id} />
    })

     const practicalExperienceSections = keyListPE.map((id) => {
      return <PracticalExperience remove={removePEComponent} key = {id} id = {id} />
    })


    return (
    <div className="App">
      <h1>General Information</h1>
      <GeneralInformation />
        <h1>Educational Experience</h1>
         {educationalExperienceSections}
        <button onClick={addEducationalExperienceSections}>Add</button>
        <h1>Practical Experience</h1>
         {practicalExperienceSections}
        <button onClick={addPracticalExperienceSections}>Add</button>
    </div>
  );
}


  
  
export default App;
