"use client";
import ShowRoomImage from "@/assets/showroom.jpg";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";


const AboutComponent = () => {
  const sliders = [
    { image: ShowRoomImage },
    { image: "https://pearlhygiene.com.sa/images/content/showroom1.jpg" },
    { image: "https://pearlhygiene.com.sa/images/content/showroom2.jpg" },
    { image: "https://pearlhygiene.com.sa/images/content/showroom3.jpg" },
  ];

  const responsive1 = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="about-container">
      <h1 className="about-title bg-[#581412] py-8">About Us</h1>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12 items-center justify-center">
          <div className="w-full lg:w-6/12">
            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">Pearl Hygiene stands as a beacon of excellence in the realm of cleaning solutions.</h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">Pearl Hygiene Proudly rooted in the Kingdom of Saudi Arabia. Founded by industry veterans with decades of collective experience, our journey began with a simple yet profound vision: to redefine the standards of cleanliness through innovation, reliability, and unwavering commitment to customer satisfaction.</p>
          </div>
          <div className="w-full lg:w-6/12">
            <Image className="lg:block hidden w-full rounded-lg" src="https://pearlhygiene.com.sa/images/content/showroom1.jpg" alt="people discussing on board" width={500} height={500} />
            <Image className="lg:hidden sm:block hidden w-full" src="https://pearlhygiene.com.sa/images/content/showroom2.jpg" alt="people discussing on board" width={500} height={500} />
            <Image className="sm:hidden block w-full" src="https://pearlhygiene.com.sa/images/content/showroom2.jpg" alt="people discussing on board" width={500} height={500} />
          </div>
        </div>
        <div className="w-full text-center mt-20">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Mission</h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full text-center lg:px-56">In a remarkably short span of time, Pearl Hygiene has surged ahead, propelled by a relentless pursuit of excellence and a dedication to meeting the evolving needs of our clients. We have swiftly carved a niche for ourselves in the competitive landscape of the cleaning industry, thanks to our dynamic approach and a steadfast focus on quality.</p>
        </div>
        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-10">
              <div className="flex p-8 shadow-md rounded-lg bg-white">
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800"><FontAwesomeIcon icon={faCircleCheck} className='text-[#791c19] mr-2'/>INNOVATIVE SOLUTIONS FOR EVERY NEED</p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-600">At Pearl Hygiene, we take pride in offering an extensive range of cutting-edge products and services that cater to diverse cleaning requirements. From state-of-the-art equipment to eco-friendly cleaning agents, our offerings are designed to deliver superior results while minimizing environmental impact.</p>
                </div>
              </div>

              <div className=" flex p-8 shadow-md rounded-lg bg-white">
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800"><FontAwesomeIcon icon={faCircleCheck} className='text-[#791c19] mr-2'/>A COMMITMENT TO EXCELLENCE</p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-600">We are more than just a supplier; we are your trusted partner in cleanliness. Our team of experts works tirelessly to understand your unique challenges and provide tailored solutions that exceed expectations. Whether you are in need of routine maintenance or tackling a major cleaning project, you can rely on Pearl Hygiene to deliver results that shine.</p>
                </div>
              </div>

              <div className="flex p-8 shadow-md rounded-lg bg-white">
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800"><FontAwesomeIcon icon={faCircleCheck} className='text-[#791c19] mr-2'/>UNPARALLELED GROWTH AND VISION</p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-600">As we look to the future, Pearl Hygiene is poised for unprecedented growth and expansion. With a strategic focus on key market segments and a commitment to continuous innovation, we are charting a course towards industry leadership. Our ambition knows no bounds, and we are determined to set new standards of excellence in the cleaning industry.</p>
                </div>
              </div>

              {/* <!-- Press Card --> */}
              <div className="flex p-8 shadow-md rounded-lg bg-white">
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800"><FontAwesomeIcon icon={faCircleCheck} className='text-[#791c19] mr-2'/>YOUR TRUSTED PARTNER IN CLEANLINESS</p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-600">With Pearl Hygiene by your side, you can rest assured that your cleaning needs are in capable hands. We invite you to join us on this journey towards a cleaner, healthier, and more sustainable future. Together, we can make a difference, one immaculate space at a time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel
        responsive={responsive1}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlaySpeed={3000}
        autoPlay={true}
        arrows={false}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="about-message-carousel-container"
        dotListClass="custom-dot-list-style"
      >
        <div className="about-quote-container">
          <FontAwesomeIcon icon={faQuoteLeft} className="about-quote-icon" />
          <div className="quote-divider hidden lg:block"></div>
          <div className="quote-text">
            <p>Our continuous efforts are to earn the trust of our customers in order to be their trusted partner in providing world class cleaning solutions.</p>
            <p className="quote-author">- CHIEF EXECUTIVE OFFICER</p>
            <p className="quote-position">Pearl Hygiene</p>
          </div>
        </div>

        <div className="about-quote-container">
          <FontAwesomeIcon icon={faQuoteLeft} className="about-quote-icon" />
          <div className="quote-divider hidden lg:block"></div>
          <div className="quote-text">
            <p>Our continuous efforts are to earn the trust of our customers in order to be their trusted partner in providing world class cleaning solutions.</p>
            <p className="quote-author">- GENERAL MANAGER</p>
            <p className="quote-position">Pearl Hygiene</p>
          </div>
        </div>

        <div className="about-quote-container">
          <FontAwesomeIcon icon={faQuoteLeft} className="about-quote-icon" />
          <div className="quote-divider hidden lg:block"></div>
          <div className="quote-text">
            <p>Our continuous efforts are to earn the trust of our customers in order to be their trusted partner in providing world class cleaning solutions.</p>
            <p className="quote-author">- CHIEF OPERATING OFFICER</p>
            <p className="quote-position">Pearl Hygiene</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default AboutComponent;
