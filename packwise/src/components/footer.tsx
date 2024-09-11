import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.information}>
          <h3>Information</h3>
          <ul>
            <li><a href="#">Handelsbetingelser</a></li>
            <li><a href="#">Fødevarekontrol</a></li>
            <li><a href="#">Cookie- og privatlivspolitik</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>Kontakt os</h3>
          <p>Email: info@packwise.dk</p>
          <p>Phone: (+45) 42396966</p>
          <p>Ehlersvej 11,</p>
          <p>DK-2800 Hellerup</p>
        </div>
        <div className={styles.newsletter}>
          <h3>Tilmeld dig vores nyhedsbrev</h3>
          <form>
            <input type="text" placeholder="Fornavn" />
            <input type="email" placeholder="Email" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className={styles.socialMedia}>
          <h3>Følg os</h3>
          {/* Add your social media links here */}
        </div>
      </footer>
    );
  };
  
  export default Footer;