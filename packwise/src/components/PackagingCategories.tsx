import React from 'react';
import styles from './PackagingCategories.module.css';

interface Category {
  name: string;
  imageSrc: string;
  link: string;
}

const categories: Category[] = [
  { name: 'Cosmetic packaging', imageSrc: '/public/cosmetic.jpg', link: '/kosmetik' },
  { name: 'Pharma packaging', imageSrc: '/public/cosmetic.jpg', link: '/pharma' },
  { name: 'Cleaning packaging', imageSrc: '/public/cosmetic.jpg', link: '/rengoring' },
  { name: 'Desinfection packaging', imageSrc: '/public/cosmetic.jpg', link: '/desinfektion' },
  { name: 'Industrial packaging', imageSrc: '/public/cosmetic.jpg', link: '/industri' },
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
          <img src={category.imageSrc} alt={category.name} />
          <p>{category.name}</p>
        </a>
      ))}
    </div>
  );
};

export default PackagingCategories;