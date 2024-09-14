"use client";
import { useState, useEffect } from 'react';
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import Link from 'next/link';
import styles from "./Navbar.module.css";
import Image from 'next/image';
import PearlHygieneLogo from "@/assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faLocationDot, faPhone, faInstagram, faLinkedin, faSquareXTwitter, faSquareFacebook, faLightbulb, faGears, faSearch } from '@fortawesome/free-solid-svg-icons';
import { get, ref } from "firebase/database";
import { database } from "@/firebaseConfig"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [categories, setCategories] = useState([]);

  const isActive = () => false;
  const handleClick = () => setClick(!click);
  useEffect(() => {
    console.log('Database:', database);
    const categoriesRef = ref(database, 'categories');
    get(categoriesRef).then((snapshot) => {
      if (snapshot.exists()) {
        const categoriesArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          data,
        }));
        console.log("Categories fetched:", categoriesArray);
        setCategories(categoriesArray);
      } else {
        console.log("No categories found");
      }
    }).catch((error) => {
      console.error("Error fetching categories:", error);
    });
  }, []);


  const navItems = [{
    route: "Home",
    pathName: "/",
    // icon: faHome
  },
  {
    route: "About Us",
    pathName: "/about-us",
    // icon: faUsers
  },
  {
    route: "Products",
    pathName: "/products",
    // icon: faLightbulb,
    subMenu: categories.map((category) => ({
      label: category.data.name ? category.data.name : category.data,
      pathName: `/products`,
      subCategories: category.data.subCategories
    }))
  },
  {
    route: "Services",
    pathName: "/services",
    // icon: faBriefcase
  },
  {
    route: "Cleaning Sectors",
    pathName: "/cleaning-sectors",
    // icon: faBroom
  },
  {
    route: "Brands",
    pathName: "/brands",
    // icon: faGears
  },
  {
    route: "Contact Us",
    pathName: "/contact-us",
    // icon: faEnvelope
  }];

  return (
    <>
      <div className='bg-white hidden lg:block'>
      <div className={styles.topbar}>
        <div className='flex gap-4'>
          <p className='text-[#581412]'><FontAwesomeIcon icon={faPhone} /><span className='ml-2'>+88011 91919191</span></p>
          <p className='text-[#581412] hidden lg:block'><FontAwesomeIcon icon={faLocationDot} /><span className='ml-2'>
          Dhaka - Uttara - Sector - 9 (Beside Milestone College) PO Box: 100101, Uttara, Bangladesh
          </span></p>
        </div>
        <div className='flex gap-4'>
        <svg xmlns="http://www.w3.org/2000/svg" fill='#581412' width={20} height={20} viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill='#581412' width={20} height={20} viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill='#581412' width={20} height={20} viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill='#581412' width={20} height={20} viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
        </div>
      </div>
 </div>
      <nav className={styles.navbar}>
        <div className={styles.nav_container}>
          <Link
            exact="true"
            href="/"
            className={styles.nav_logo}>

            <Image src={PearlHygieneLogo} alt='Pearl Hyigene Logo' width={90} height={90} />
          </Link>

          <ul className={click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu}>
            {navItems.map((navItem) => (
              <li key={navItem.route} className={styles.nav_item}>
                <Link
                  exact="true"
                  href={navItem.pathName}
                  className={`${styles.nav_links} ${isActive('/contact') ? styles.active : ''}`}
                  onClick={handleClick}
                >
                  <FontAwesomeIcon width={15} icon={navItem.icon} /> &nbsp;
                  {navItem.route} &nbsp;
                  {navItem.subMenu ? <FontAwesomeIcon width={9} icon={faChevronDown} /> : ""}
                </Link>

                {navItem.subMenu && (
                  <ul className={styles.sub_menu}>

                    {navItem.subMenu.map((subNavItem, subIndex) => (

                      <li key={subIndex} style={{ background: 'white' }} className={styles.catItem}>
                        <Link href={{ pathname: subNavItem.pathName, query: { category: subNavItem.label } }} className={styles.subItem}>
                          <div>
                            {subNavItem.label}
                          </div>
                        </Link>

                        {
                          subNavItem.subCategories && subNavItem.subCategories.map(subCat => (

                            <li key={subCat} className={styles.subCatItem}>
                              <Link href={{ pathname: subNavItem.pathName, query: { category: subNavItem.label, subCategory: subCat } }}>
                                <div>{subCat}</div>
                              </Link>
                            </li>

                          ))
                        }

                      </li>

                    ))}

                  </ul>
                )}
              </li>
            ))}

            <li className={styles.nav_item}>
              <div>

                <Link
                  exact="true"
                  className={`${styles.nav_links} ${isActive('/contact') ? styles.active : ''} ${styles.nav_links_icon}`}
                  onClick={handleClick}
                  href="/products#search"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </Link>
              </div>
            </li>

          </ul>

          <div className={styles.nav_icon} onClick={handleClick}>
            {click ? (
              <span className={styles.icon}>
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className={styles.icon}>
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
