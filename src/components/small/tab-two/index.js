import { useState } from 'react';
import {Link} from 'react-router-dom';
import { Checkbox, Radio, Space } from 'antd';
import React from 'react';

import styles from './index.module.css';

function TabTwo ({ formData, setFormData, setStep, handleSubmit }) {
    const [errors, setErrors] = useState({});
    const validate = () => {
        let temp = {...errors};
        let valid = true;
        if(formData.job_title === "") {
            temp.job_title = true;
            valid = false
        }
        if(!formData.checkbox) {
            temp.checkbox = true;
            valid = false
        }

        if(!valid) {
            setErrors(temp)
        }
        return valid;
    }

    const submit = () => {
        if(validate()) {
            handleSubmit()
        }
    }
    return (
    <div className={styles.tab_two}>
        <button className={styles.back} onClick={ () => {setStep(1)} }><i className="fa-solid fa-arrow-left"></i> PREVIOUS STEP</button>
        <h2>Select Job Position</h2>
        <hr />
        <Radio.Group onChange={(e) => { setFormData({ ...formData, job_title: e.target.value, }); setErrors({ ...errors, job_title: "", }); }} value={formData.job_title}>
            <Space direction="vertical">
                <Radio value='Frontend Developer'>Frontend Developer</Radio>
                <Radio value='WordPress Developer'>WordPress Developer</Radio>
                <Radio value='UI/UX Designer'>UI/UX Designer</Radio>
                <Radio value='Support Engineer'>Support Engineer</Radio>
                <Radio value='Graphic Designer'>Graphic Designer</Radio>
            </Space>
        </Radio.Group>
        { errors.job_title ? <p>Please select anyone</p> : '' }
        <br />
        <Checkbox onChange={(e) => { setFormData({ ...formData, checkbox: e.target.checked, }); setErrors({ ...errors, checkbox: false, }); }} checked={formData.checkbox}>I Accept The <Link to="/#">Term Of Connditions</Link> And <Link to="/#">Privacy Policy</Link></Checkbox>
        { errors.checkbox ? <p>Please accept Term Of Connditions And Privacy Policy</p> : '' }
        <br />
        <button className={styles.submit} onClick={submit} >SUBMIT</button>
    </div>
    )
}
export default TabTwo;