import styles from './index.module.css';

function JoinSucess () {
    return (
    <div className={styles.contentJoinSucess}>
        <div>
            <img src="images/big-green-check.png" alt="submit" />
            <h2>Application Submitted</h2>
            <p>Thanks for your interest!</p>
            <p>Our review team will review your application and call you for interview</p>
        </div>
    </div>
    )
}
export default JoinSucess;