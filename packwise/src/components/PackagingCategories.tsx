import React from 'react';
import Image from 'next/image';
import Cosmetic from './cosmetic.png';
import styles from './PackagingCategories.module.css';

interface Category {
  name: string;
  imageSrc: string;
  link: string;
}

const categories: Category[] = [
  { name: 'Cosmetic packaging', imageSrc: Cosmetic, link: '/kosmetik' },
  { name: 'Pharma packaging', imageSrc: Cosmetic, link: '/pharma' },
  { name: 'Cleaning packaging', imageSrc: Cosmetic, link: '/rengoring' },
  { name: 'Desinfection packaging', imageSrc: Cosmetic, link: '/desinfektion' },
  { name: 'Industrial packaging', imageSrc: Cosmetic, link: '/industri' },
];

const PackagingCategories = () => {
  return (
    <div className={styles.categoriesContainer}>
      <h2>Packaging categories</h2>
      <p>Discover our extensive range of packaging categories tailored to products in<br></br> 
      cosmetics, pharma, cleaning, disinfection and more. From elegant bottles to durable blister packs,<br></br> 
      our packaging solutions ensure top-notch product protection and storage.<br></br> 
      Explore our full range of categories and find the perfect packaging solution for your needs.</p>
      {categories.map((category) => (
        <a key={category.name} href={category.link} className={styles.category}>
          <Image
            src={category.imageSrc}
            alt={category.name}
            width={100}
            height={100}
          />
          <p>{category.name}</p>
        </a>
      ))}
    </div>
  );
};

export default PackagingCategories;