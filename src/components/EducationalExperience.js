import React, {useState} from "react";
 
const EducationalExperience = (props) => {
    
    const [schoolName, setSchoolName] = useState('');
    const [studyTitle, setStudyTitle] = useState('');
    const [studyDateFrom, setStudyDateFrom] = useState('');
    const [studyDateTo, setStudyDateTo] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    


    const handleChange = (e) => {
        switch (e.target.id) {
            case 'school-name':
                setSchoolName(e.target.value);
            break;
            case 'study-title':
                setStudyTitle(e.target.value);
             break;
            case 'study-date-from':
                setStudyDateFrom(e.target.value);
                break;
            case 'study-date-to':
                setStudyDateTo(e.target.value);
                break;
            default:
                break;
        }
        
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    }


    const onEdit = (e) => {
        e.preventDefault();
        setIsSubmitted(false);
    }

        
        if(isSubmitted === false){
            return (
                <div>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="school-name">School Name:
                            <input onChange={handleChange} value={schoolName} type="text" id="school-name" />
                        </label>

                        <label htmlFor="study-title">Title of Study:
                        <input onChange={handleChange} value={studyTitle} type="text" id="study-title" />
                        </label>
                            
                            <label htmlFor="study-date-from">From:
                        <input onChange={handleChange} value={studyDateFrom} type="date" id="study-date-from"/>
                        </label>

                        <label htmlFor="study-date-to">To:
                        <input onChange={handleChange} value={studyDateTo} type="date" id="study-date-to"/>
                        </label>

                        <button type="submit">
                            Submit
                        </button>
                        <button onClick={props.remove} id={props.id} type="button">
                            Delete
                        </button>
                    </form>
                    
                </div>
            )
        }
        else if (isSubmitted === true) {

                
            return (
                <div>
                    <p>School Name: {schoolName}</p>
                    <p>Title of Study: {studyTitle}</p>
                    <p>From: {studyDateFrom}</p>
                    <p>To: {studyDateTo}</p>
                    
                    <button onClick={onEdit} type="button">
                            Edit
                        </button>
                    
                </div>
            )
        }
    }


export default EducationalExperience;

//create list here?