import React, {Component} from "react";
 
class GeneralInformation extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            isSubmitted: false,
        }

    }

    handleChange = (e) => {
        switch (e.target.id) {
            case 'name':
                this.setState({
                    name: e.target.value,
                });
            break;
            case 'email':
                this.setState({
                    email: e.target.value,
                });
             break;
            case 'phone-number':
                this.setState({
                    phoneNumber: e.target.value,
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

        const { name, email, phoneNumber, isSubmitted } = this.state;

        if(isSubmitted === false){
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="name">Name:
                            <input onChange={this.handleChange} value={name} type="text" id="name" />
                        </label>
                        <label htmlFor="email">Email:
                        <input onChange={this.handleChange} value={email} type="text" id="email"/>
                        </label>
                        <label htmlFor="phone-number">Phone Number:
                        <input onChange={this.handleChange} value={phoneNumber} type="text" id="phone-number"/>
                        </label>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                    
                </div>
            )
        }
        else if (isSubmitted === true) {

                
            return (
                <div>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone Number: {phoneNumber}</p>
                    
                    <button onClick={this.onEdit} type="button">
                            Edit
                        </button>
                    
                </div>
            )
        }
    }
}

export default GeneralInformation;