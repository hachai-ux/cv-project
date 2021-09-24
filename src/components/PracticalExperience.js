import React, {Component} from "react";
 
class PracticalExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
                companyName: '',
                positionTitle: '',
                mainTasks: '',
                dateFrom: '',
                dateTo: '',
                isSubmitted: false,
          
            
            
        };

    }

    handleChange = (e) => {
        switch (e.target.id) {
            case 'company-name':
                this.setState({
                    companyName: e.target.value,
                });
            break;
            case 'position-title':
                this.setState({
                    positionTitle: e.target.value,
                });
                break;
            case 'main-tasks':
                this.setState({
                    mainTasks: e.target.value,
                });
             break;
            case 'date-from':
                this.setState({
                    dateFrom: e.target.value,
                });
                break;
            case 'date-to':
                this.setState({
                    dateTo: e.target.value,
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

        const {companyName, positionTitle, mainTasks, dateFrom, dateTo, isSubmitted } = this.state;

        
        if(isSubmitted === false){
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="company-name">Company Name:
                            <input onChange={this.handleChange} value={companyName} type="text" id="company-name" />
                        </label>

                        <label htmlFor="position-title">Title of Position:
                        <input onChange={this.handleChange} value={positionTitle} type="text" id="position-title" />
                        </label>

                        <label htmlFor="main-tasks">Main Tasks:
                        <textarea onChange={this.handleChange} value={mainTasks} id="main-tasks" />
                        </label>
                            
                            <label htmlFor="date-from">From:
                        <input onChange={this.handleChange} value={dateFrom} type="date" id="date-from"/>
                        </label>

                        <label htmlFor="date-to">To:
                        <input onChange={this.handleChange} value={dateTo} type="date" id="date-to"/>
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
                    <p>Company Name: {companyName}</p>
                    <p>Title of Position: {positionTitle}</p>
                     <p>Main Tasks: {mainTasks}</p>
                    <p>From: {dateFrom}</p>
                    <p>To: {dateTo}</p>
                    
                    <button onClick={this.onEdit} type="button">
                            Edit
                        </button>
                    
                </div>
            )
        }
    }
}

export default PracticalExperience;

//create list here?