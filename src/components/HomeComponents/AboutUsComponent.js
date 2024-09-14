'use client';

import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css'


const AboutUsComponent = () => {

  useEffect(() => {
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', //
    });
  }, []);


  const sliders = [
    {
      image: "https://pearlhygiene.com.sa/images/content/showroom1.jpg"
    },
    {
      image: "https://pearlhygiene.com.sa/images/content/showroom2.jpg"
    },
    {
      image: "https://pearlhygiene.com.sa/images/content/showroom3.jpg"
    },
  ]


  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    // React Component
    <div data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1260"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
      className="aos-container">
      <div className="lg:flex lg:gap-8 lg:px-24 px-8 justify-center items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl font-semibold text-[#0464a0] mb-2 uppercase">
            <Link href="/about-us">About Pearl Hygiene</Link>
          </h1>
          <h3 className="text-xl font-normal text-[#581412] mb-4">Pearl Hygiene, a Saudi owned, young and dynamic company formed by long servicing industry experts in the business, encompassing decades of product and market experiences.</h3>
          <p className="text-gray-500 mb-6">
            Pearl Hygiene, in a short span of time has gained enviable momentum in the cleaning business with several new range of innovative products and services, which are being well received by the industry. We aim to be your one stop shop solution for all cleaning needs.
            We have very ambitious growth plan to focus on key market segments and introducing never seen before products and secure a leadership position.
          </p>
          <button className="border-2 border-[#0464a0] hover:bg-[#581412] hover:text-white hover:border-none rounded-lg px-6 py-2 text-[#0464a0] transition-all">
            <Link className="" href="/about-us">Read More</Link>
          </button>
        </div>
          <div className="lg:w-1/2">
            <div class="mx-auto">
                <img alt="gallery" class="w-full rounded-lg object-cover h-56 object-center mb-4" src="https://pearlhygiene.com.sa/images/content/showroom1.jpg"/>
              <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/2">
                <img alt="gallery" class="w-full rounded-lg object-cover h-full object-center" src="https://pearlhygiene.com.sa/images/content/showroom2.jpg"/>
                </div>
                <div class="px-2 w-1/2">
                <img alt="gallery" class="w-full rounded-lg object-cover h-full object-center" src="https://pearlhygiene.com.sa/images/content/showroom3.jpg"/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;