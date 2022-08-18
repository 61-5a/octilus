import Footer from '../../../footer';
import styles from './index.module.css';
import image from '../../../images/job-bg.jpg';

function JoinLeft () {
    return (
    <div className={styles.outerJoinLeft} style={{ backgroundImage:`url(${image})` }}>
        <div className={styles.centerJoin}>
            <h2>Let's Join with us !</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <Footer />
    </div>
    )
}
export default JoinLeft;