import { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import TabOne from '../tab-one';
import TabTwo from '../tab-two';
import styles from './index.module.css';

function JoinRight () {
    let navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        job_title: "",
        checkbox: "",
        id: "",
      });

    const handleSubmit = e => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: formData.id, job_title: formData.job_title })
        };
        fetch('https://dev.octilus.in/api/update.php', requestOptions)
            .then(response => response.json())
            .then(data => { navigate(`/join-sucess`) } );
    }
    return (
    <div className={styles.outerJoinRight}>
        {step === 1 ? <TabOne
        formData={formData}
        setFormData={setFormData}
        setStep={setStep}/> : <TabTwo
        formData={formData}
        setFormData={setFormData}
        setStep={setStep}
        handleSubmit={handleSubmit} /> }
    </div>
    )
}
export default JoinRight;