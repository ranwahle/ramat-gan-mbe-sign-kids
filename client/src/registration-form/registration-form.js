import React, {Component} from 'react';
import GeneralDetails from "./components/GeneralDetails";


export default class RegistrationForm extends Component {

    constructor() {
        super();
        this.state = {};
    }
    submit = (evt) => {
        evt.preventDefault();
        this.props.onSubmit(evt)
    }

    setField = (evt, fieldName) => {
        const newValue = evt.target.value;
        const stateopt = {};
        stateopt[fieldName] = newValue;
        this.setState(stateopt);
    }

    fieldChanged = fieldName => {
        return evt => this.setField(evt, fieldName);
    }

    firstNameChanged = evt => {
        const newName = evt.target.value;
        this.setState({firstName: newName})
    }
    lastNameChanged = evt => {
        const newName = evt.target.value;
        this.setState({lastName: newName})
    }

    render() {
        return (<form onSubmit={this.submit}>
            <GeneralDetails firstName={this.state.firstName} lastName={this.state.lastName}
                            schoolClass={this.stateschoolClass}
                            fieldChanged={this.fieldChanged}/>
            {/*<label>שם פרטי*/}
            {/*<input type={'text'} placeholder={'שם פרטי'} value={this.state.firstName} onChange={this.firstNameChanged}/>*/}
            {/*</label>*/}
            {/*<label>שם משפחה*/}
            {/*    <input type={'text'} placeholder={'שם משפחה'}*/}
            {/*           value={this.state.lastName} onChange={this.fieldChanged('lastName')}/>*/}
            {/*</label>*/}
            {/*<label>*/}
            {/*    כיתה*/}
            {/*    <input type={'text'} placeholder={'כיתה'} onChange={this.fieldChanged('class')}  value={this.state.class}/>*/}
            {/*</label>*/}
        </form>)
    }
}
