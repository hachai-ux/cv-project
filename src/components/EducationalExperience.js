import React, {Component} from "react";
 
class EducationalExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
                schoolName: '',
                studyTitle: '',
                studyDateFrom: '',
                studyDateTo: '',
                isSubmitted: false,
          
            
            
        };

    }

    handleChange = (e) => {
        switch (e.target.id) {
            case 'school-name':
                this.setState({
                    schoolName: e.target.value,
                });
            break;
            case 'study-title':
                this.setState({
                    studyTitle: e.target.value,
                });
             break;
            case 'study-date-from':
                this.setState({
                    studyDateFrom: e.target.value,
                });
                break;
            case 'study-date-to':
                this.setState({
                    studyDateTo: e.target.value,
                });
                break;
            default:
                break;
        }
        
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isSubmitted: true,
        })
    }


    onEdit = (e) => {
        e.preventDefault();
        this.setState({
            isSubmitted: false,
        })
    }



    render() {

        const {schoolName, studyTitle, studyDateFrom, studyDateTo, isSubmitted } = this.state;

        
        if(isSubmitted === false){
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="school-name">School Name:
                            <input onChange={this.handleChange} value={schoolName} type="text" id="school-name" />
                        </label>

                        <label htmlFor="study-title">Title of Study:
                        <input onChange={this.handleChange} value={studyTitle} type="text" id="study-title" />
                        </label>
                            
                            <label htmlFor="study-date-from">From:
                        <input onChange={this.handleChange} value={studyDateFrom} type="date" id="study-date-from"/>
                        </label>

                        <label htmlFor="study-date-to">To:
                        <input onChange={this.handleChange} value={studyDateTo} type="date" id="study-date-to"/>
                        </label>

                        <button type="submit">
                            Submit
                        </button>
                        <button onClick={this.props.remove} id={this.props.id} type="button">
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
                    
                    <button onClick={this.onEdit} type="button">
                            Edit
                        </button>
                    
                </div>
            )
        }
    }
}

export default EducationalExperience;

//create list here?