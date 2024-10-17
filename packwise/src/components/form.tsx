import Link from 'next/link';
import styles from './form.module.css';

const Form = () => {
    return (
      <form className={styles.form}>
            <h3>Are you looking for something specific?</h3>
            <p>Upload an image for reference or inspiration of a product or</p>
            <p> packaging you're looking for and we'll help you find something similar.</p>
            <p>Name*</p>
            <input type="text"/>
            <br></br>
            <p>upload file*</p>
            <input type="file" name='file'/>
            <br></br>
            <p>Message*</p>
            <input type="text"/>
            <button type="submit">Send</button>
      </form>
    );
  };
  
  export default Form;