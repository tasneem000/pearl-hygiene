"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import { faFacebookF, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import Image from "next/image";
import PearlHygieneLogo from "@/assets/logo.png";
import { faEnvelope, faFax, faLocation, faMapLocation, faMobilePhone, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer class="text-gray-600 body-font bg-white">
            <div class="container px-16 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a class="flex gap-4 title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Link
                            exact="true"
                            href="/"
                            className={styles.nav_logo}>

                            <Image src={PearlHygieneLogo} alt='Pearl Hyigene Logo' width={90} height={90} />
                        </Link>
                        <Link href="https://vision2030.gov.sa" target="_blank">
                            <Image src="https://pearlhygiene.com.sa/images/2030_120x120.png" width={100} height={100} alt="Saudi Vision 2030 Logo" />
                        </Link>
                    </a>
                    <p class="mt-2 text-sm text-gray-500 text-justify">Pearl Hygiene, a Saudi owned, young and dynamic company formed by long servicing industry experts in the business.</p>
                </div>
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div class="lg:w-1/3 md:w-1/2 w-full px-8">
                        <h2 class="title-font font-semibold text-[#581412] tracking-widest text-sm mb-3">SERVICES</h2>
                        <nav class="list-none mb-10">
                            <li className="mb-2">
                                <a href="/services" class="text-gray-600 hover:text-gray-800">Consulting</a>
                            </li>
                            <li className="mb-2">
                                <a href="/services" class="text-gray-600 hover:text-gray-800">Training</a>
                            </li>
                            <li className="mb-2">
                                <a href="/services" class="text-gray-600 hover:text-gray-800">Sales</a>
                            </li>
                            <li className="mb-2">
                                <a href="/services" class="text-gray-600 hover:text-gray-800">Rentals</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full px-8">
                        <h2 class="title-font font-semibold text-[#581412] tracking-widest text-sm mb-3">QUICK LINKS</h2>
                        <nav class="list-none mb-10">
                            <li className="mb-2">
                                <a href="/" class="text-gray-600 hover:text-gray-800">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="/about-us" class="text-gray-600 hover:text-gray-800">About</a>
                            </li>
                            <li className="mb-2">
                                <a href="/services" class="text-gray-600 hover:text-gray-800">Services</a>
                            </li>
                            <li className="mb-2">
                                <a href="/contact-us" class="text-gray-600 hover:text-gray-800">Contact</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full px-2">
                        <h2 class="title-font font-semibold text-[#581412] tracking-widest text-sm mb-3">CONTACT</h2>
                        <nav class="list-none mb-10">
                            <li className="mb-2">
                                <a class="text-gray-600 hover:text-gray-800">
                                    <Link href='mailto:tasneem.abdullah.samit@gmail.com'>
                                        <FontAwesomeIcon icon={faEnvelope} className="mr-1 text-[#581412]" style={{ width: 15 }} />tasneem.abdullah.samit@gmail.com</Link></a>
                            </li>
                            <li className="mb-2">
                                <a class="text-gray-600 hover:text-gray-800">
                                    <Link href='tel:+88011 91919191'>
                                    <FontAwesomeIcon icon={faPhone} className="mr-1 text-[#581412]" style={{ width: 15 }} /> 011 91919191
                                    </Link></a>
                            </li>
                            <li className="mb-2">
                                <Link href='tel:+88011 91919191'>
                                <FontAwesomeIcon icon={faMobilePhone} className="mr-1 text-[#581412]" style={{ width: 15 }} /> +88011 91919191
                                </Link>
                            </li>
                            <li>
                                <a target="_blank" href='https://maps.app.goo.gl/KC4TEKwrazZvwYpC8' >
                                <FontAwesomeIcon icon={faMapLocation} className="mr-1 text-[#581412]" style={{ width: 15 }} />  Sector - 9, Uttara, Bangladesh
                                </a>
                            </li>
                            <div>
                                <ul className={styles.wrapper}>

                                    <li >
                                        <Link href="/" className={`${styles.icon} ${styles.facebook}`}>
                                            <span className={styles.tooltip}>Facebook</span>
                                            <FontAwesomeIcon icon={faFacebookF} style={{ width: 9 }} />
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/" className={`${styles.icon} ${styles.twitter}`} >
                                            <span className={styles.tooltip}>X</span>
                                            <FontAwesomeIcon icon={faXTwitter} style={{ width: 13 }} />
                                        </Link>
                                    </li>


                                    <li>
                                        <Link href="/" className={`${styles.icon} ${styles.instagram}`}>
                                            <span className={styles.tooltip}>Instagram</span>
                                            <FontAwesomeIcon icon={faInstagram} style={{ width: 13 }} />
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/" className={`${styles.icon} ${styles.linkedin}`}>
                                            <span className={styles.tooltip}>LinkedIn</span>
                                            <FontAwesomeIcon icon={faLinkedin} style={{ width: 13 }} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="bg-[#581412] text-white py-6 text-center">
                <div>© 2024 <Link href="/">Pearl Hygiene</Link>  &nbsp;-  &nbsp; All Rights Reserved</div>
                {/* <div className="flex justify-center mt-2">
                        <Link href="https://sparknetco.com" target="_blank" className="text-center"> Developed By -  <span className="">SparkNet Corporation </span></Link>
                    </div> */}
            </div>
        </footer>
    );
};

export default Footer;