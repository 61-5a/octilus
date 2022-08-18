import {Link} from 'react-router-dom';
import { useEffect } from "react";
import styles from './index.module.css';

function Footer () {
    useEffect(() => {
        console.log("Developed by aZ (61-5a.com). ");
    }, []);
    return (
        <div className={styles.footer}>
            <span className={styles.footer_copyright}>Copyright © 2022 Octilus Technologies</span>
            <span className={styles.footer_link}>
                <Link to="/#"><i className="fa-brands fa-facebook-f"></i></Link>
                <Link to="/#"><i className="fa-brands fa-twitter"></i></Link>
                <Link to="/#"><i className="fa-brands fa-linkedin-in"></i></Link>
                <Link to="/#"><i className="fa-brands fa-instagram"></i></Link>
            </span>
        </div>
    );
}
export default Footer;