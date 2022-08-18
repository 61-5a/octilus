import { useState } from 'react';
import { Radio } from 'antd';
import React from 'react';

import styles from './index.module.css';

function TabOne ({ formData, setFormData, setStep }) {
    const [errors, setErrors] = useState({});
    var emailRegexPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    var phoneRegexPattern = /^\b[6789]\d{9}\b$/i
    const validate = () => {
        let temp = {...errors};
        let valid = true;
        if(!formData.name) {
            temp.name = true;
            valid = false
        }
        if(!emailRegexPattern.test(formData.email)) {
            temp.email = true;
            valid = false
        }
        if(!phoneRegexPattern.test(formData.phone)) {
            temp.phone = true;
            valid = false
        }
        if(formData.gender === "") {
            temp.gender = true;
            valid = false
        }
        if(!valid) {
            setErrors(temp)
        }
        return valid;
    }

    const submit = () => {
        if(validate()) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: formData.name, email: formData.email, phone: formData.phone, gender: formData.gender })
            };
            fetch('https://dev.octilus.in/api/create.php', requestOptions)
                .then(response => response.json())
                .then(data => { setStep(2); setFormData({ ...formData, id: data.id, }); } );
        }
    }
    // const updateFormData = (e,[field]) => {
    //     setFormData({ ...formData, [field]: e.target.value, }); 
    // }
    return (
    <div className={styles.tab_one}>
        <h3>Personal Information</h3>
        <input type="text" placeholder="Name" required
            value={formData.name}
            // onChange={(e) => { updateFormData(e,'name') }}
            onChange={(e) => { setFormData({ ...formData, name: e.target.value, }); setErrors({ ...errors, name: false, }); }}
        />
        { errors.name ? <p>Please enter name</p> : '' }
        <input type="email" placeholder="Email Address" required
            value={formData.email}
            onChange={(e) => { setFormData({ ...formData, email: e.target.value, }); setErrors({ ...errors, email: false, }); }}
        />
        { errors.email ? <p>Please enter valid email</p> : '' }
        <input type="text" placeholder="Phone" required
            value={formData.phone}
            onChange={(e) => { setFormData({ ...formData, phone: e.target.value, }); setErrors({ ...errors, phone: false, }); }}
        />
        { errors.phone ? <p>Please enter valid phone number</p> : '' }
        <h4>Select Gender</h4>
        <Radio.Group onChange={(e) => { setFormData({ ...formData, gender: e.target.value, }); setErrors({ ...errors, gender: false, }); }} value={formData.gender}>
            <Radio value='male'>Male</Radio>
            <Radio value='female'>Female</Radio>
        </Radio.Group>
        { errors.gender ? <p>Please select gender</p> : '' }
        {/* <span>
            <input type="radio" value="male" id="male"
            checked={formData.gender === "male"} 
            onChange={(e) => { setFormData({ ...formData, gender: e.target.value, }); }} />
            <label for="male">Male</label>
        </span>
        <span>
            <input type="radio" value="female" id="female"
            checked={formData.gender === "female"} 
            onChange={(e) => { setFormData({ ...formData, gender: e.target.value, }); }} />
            <label for="female">Female</label>
        </span><br /> */}
        <button onClick={submit}>Next</button>
    </div>
    )
}
export default TabOne;