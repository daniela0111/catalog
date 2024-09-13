import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import logo from './logo.webp';
import bag from './bag.png';
import magnificanglass from './magnificanglass.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <Image src={logo} alt="Packwise" width={110}/>
            </Link>
          </li>
          <li>
            <Link href="/sustainable_packaging">Sustainable packaging</Link>
          </li>
          <li>
            <Link href="/design">Packaging design and development</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about_us">About us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/">
              <Image src={bag} alt="Favorite products" width={15} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src={magnificanglass} alt="Magnificant glass" width={20} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;