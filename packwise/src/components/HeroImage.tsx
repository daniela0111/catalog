import Image from 'next/image';
import styles from './HeroImage.module.css';
import heroImage from './hero-image.png'; // Import the image as a static asset

interface HeroImageProps {
  // change the image
}

const HeroImage: React.FC<HeroImageProps> = () => {
  return (
    <div className={styles.heroImageContainer}>
      <Image
        src={heroImage} // Use the imported image
        alt="Hero image"
        layout="responsive"
        width={1200}
        height={600}
      />
      <div className={styles.heroText}>
        <h2>Strategic design</h2>
        <h2>Innovative packaging</h2>
        <p>
          We design, develop and produce packaging solutions <br></br>
          with a focus on sustainability, delivery reliability,<br></br>
          quality and innovation.
        </p>
        <button>See our products</button>
      </div>
    </div>
  );
};

export default HeroImage;