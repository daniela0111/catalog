import Image from 'next/image';
import Link from 'next/link'; 
import styles from './HeroImage.module.css';
import heroImage from './hero-image.png'; 

interface HeroImageProps {
  // change the image
}

const HeroImage: React.FC<HeroImageProps> = () => {
  return (
    <div className={styles.heroImageContainer}>
      <Image
        src={heroImage} 
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
        <Link href="/catalog"> {/* Replace with the actual URL of the target page */}
            <button>See our products</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroImage;