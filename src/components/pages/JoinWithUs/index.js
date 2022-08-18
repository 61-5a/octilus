import JoinLeft from '../../small/left';
import JoinRight from '../../small/right';
import styles from './index.module.css';

function JoinWithUs () {
    return (
    <div className={styles.contentJoin}>
        <JoinLeft />
        <JoinRight />
    </div>
    )
}
export default JoinWithUs;