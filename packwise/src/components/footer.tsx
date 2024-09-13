import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';
import logo from './logo.webp';
import facebook from './Facebook.png';
import instagram from './Instagram.png';
import linkedin from './linkedin.png';
import youtube from './Youtube.png';

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
          <br></br>
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
          <br></br>
          <h3>Follow us</h3>
          <Link href="https://www.facebook.com/packwise.dk">
              <Image src={facebook} alt="Facebook" width={25}/>
          </Link>
          <Link href="https://www.instagram.com/packwise.dk/">
              <Image src={instagram} alt="Instagram" width={25}/>
          </Link>
          <Link href="https://www.linkedin.com/company/packwise/">
              <Image src={linkedin} alt="LinkedIn" width={25}/>
          </Link>
          <Link href="https://www.youtube.com/channel/UCeeI8Qt0BZzzxwG0ZjIc8mw">
              <Image src={youtube} alt="YouTube" width={25}/>
          </Link>
        </div>
        <div className={styles.newsletter}>
          <h3>Subscribe To Our Newsletter</h3>
          <form>
            <p>Name*</p>
            <input type="text"/>
            <br></br>
            <p>Email*</p>
            <input type="email"/>
            <br></br>
            <p>By entering your email, you agree to our <a href="#">privecy policy</a></p>
            <button type="submit">Send</button>
            <br></br>
            <input type="checkbox"/>
            <label>Yes, I would like to receive inspirational posts,</label>
            <label>blogs and other marketing about Packwise by email.</label> 
            <label>I can unsubscribe from this service at any time and read</label> 
            <label> more about my personal data in the privacy policy.</label>
          </form>
        </div>
      </footer>
    );
  };
  
  export default Footer;