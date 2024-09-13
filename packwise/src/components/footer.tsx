import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';
import logo from './logo.webp';

const Footer = () => {
    return (
      <footer className={styles.footer}>
         <div className={styles.general}>
         <Link href="/">
              <Image src={logo} alt="Packwise" width={110}/>
          </Link>
          <p>At Packwise we design,</p>
          <p>develop and produce </p>
          <p>customized packaging</p> 
          <p>solutions that create value</p>
          <p>for you and your customers</p>
          <h3>Opening hours:</h3>
          <p>Monday to Friday 8:30 - 17:30</p>
        </div>
        <div className={styles.information}>
          <h3>Information</h3>
          <ul>
            <li><a href="#">Trading conditions</a></li>
            <li><a href="#">Food control</a></li>
            <li><a href="#">Cookie and privecy policy</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>Contact us</h3>
          <p>Email: info@packwise.dk</p>
          <p>Phone: (+45) 42396966</p>
          <p>Ehlersvej 11,</p>
          <p>DK-2800 Hellerup</p>
        </div>
        <div className={styles.socialMedia}>
          <h3>Follow us</h3>
          {/* Add your social media links here */}
        </div>
        <div className={styles.newsletter}>
          <h3>Subscribe To Our Newsletter</h3>
          <p>In search of inspiration?</p>
          <p>Sign up for our newsletter</p>
          <p> to receive insight into </p>
          <p>the newest trends and tendencies</p>
          <p> in the market</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button type="submit">Send</button>
          </form>
        </div>
       
      </footer>
    );
  };
  
  export default Footer;