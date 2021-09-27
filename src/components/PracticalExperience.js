import React, { setState } from "react";
 
const PracticalExperience = (props) => {
  
    const [companyName, setCompanyName] = setState('');
    const [positionTitle, setPositionTitle] = setState('');
    const [mainTasks, setMainTasks] = setState('');
    const [dateFrom, setDateFrom] = setState('');
    const [dateTo, setDateTo] = setState('');
    const [isSubmitted, setIsSubmitted] = setState(false);


    const handleChange = (e) => {
        switch (e.target.id) {
            case 'company-name':
                setCompanyName(e.target.value);
            break;
            case 'position-title':
                 setPositionTitle(e.target.value);
                break;
            case 'main-tasks':
                 setMainTasks(e.target.value);
             break;
            case 'date-from':
                 setDateFrom(e.target.value);
                break;
            case 'date-to':
                 setDateTo(e.target.value);
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
        setIsSubmitted(true);
    }


        
        if(isSubmitted === false){
            return (
                <div>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="company-name">Company Name:
                            <input onChange={handleChange} value={companyName} type="text" id="company-name" />
                        </label>

                        <label htmlFor="position-title">Title of Position:
                        <input onChange={handleChange} value={positionTitle} type="text" id="position-title" />
                        </label>

                        <label htmlFor="main-tasks">Main Tasks:
                        <textarea onChange={handleChange} value={mainTasks} id="main-tasks" />
                        </label>
                            
                            <label htmlFor="date-from">From:
                        <input onChange={handleChange} value={dateFrom} type="date" id="date-from"/>
                        </label>

                        <label htmlFor="date-to">To:
                        <input onChange={handleChange} value={dateTo} type="date" id="date-to"/>
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
                    <p>Company Name: {companyName}</p>
                    <p>Title of Position: {positionTitle}</p>
                     <p>Main Tasks: {mainTasks}</p>
                    <p>From: {dateFrom}</p>
                    <p>To: {dateTo}</p>
                    
                    <button onClick={onEdit} type="button">
                            Edit
                        </button>
                    
                </div>
            )
        }
    }


export default PracticalExperience;

//create list here?