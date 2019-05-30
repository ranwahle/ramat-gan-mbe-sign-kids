import React from 'react';
import JSX from 'react';



export default function GeneralDetails(props) {
    const {firstName, lastName, schoolClass, fieldChanged} = props;
    return (
        <JSX.Fragment>
            <h1>General Details</h1>
        <label>שם פרטי
    <input type={'text'} name={'firstName'} placeholder={'שם פרטי'} value={firstName} onChange={fieldChanged('firstName')}
    />
</label>

<label>שם משפחה
<input type={'text'} placeholder={'שם משפחה'}
value={lastName} onChange={fieldChanged('lastName')}/>
</label>
<label>
כיתה
<input type={'text'} placeholder={'כיתה'} onChange={fieldChanged('schoolClass')}  value={schoolClass}/>
</label>
        </JSX.Fragment>
    )
}
