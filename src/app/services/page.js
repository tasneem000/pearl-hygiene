import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
const page = () => {
    return (
        <div>
             <h1 className="text-center text-4xl text-white uppercase bg-[#581412] py-8">Our Services</h1>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class=" lg:px-24 px-5 py-12 mx-auto">
                <h1 className='text-2xl text-center mb-10 text-[#791c19] font-semibold'>OUR CONSULTING SERVICE</h1>
                    <div class="mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center shadow-md" src="https://www.youthemployment.org.uk/dev/wp-content/uploads/2023/11/BICSc-Feature-Image-5.png" />
                        <div class="lg:w-1/2 w-full bg-white shadow-md p-4 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className='text-2xl text-[#791c19] font-semibold mb-2'>CONSULTING</h1>
                            <p className='text-base text-gray-500'>Experts providing most appropriate and cost effective solutions.</p>
                            <h1 className='text-lg text-[#791c19] font-semibold my-2'>OUR TEAM</h1>
                            <p className='text-base text-gray-500'>Our consulting team comprising of Experts who can better understand your specific cleaning requirements and Propose the right type of equipment, tools and chemicals, according to your site, based upon, type of floor, area, access, passage etc.</p>
                            <h1 className='text-lg text-[#791c19] font-semibold my-2'>OUR SOLUTIONS </h1>
                            <p className='text-base text-gray-500'>
                                Our solutions will be the most appropriate and cost effective, catering to the dynamics of each business requirements.
                            </p>
                            <p className='text-base text-gray-500 mt-3'>
                            Our consulting services is usually offered free of charge according to certain terms and conditions.
                            </p>
                            <ul className='mt-2 text-gray-500 text-base'>
                                <li className='mb-1'><FontAwesomeIcon icon={faCircleCheck} className='text-[#791c19] mr-2'/>Heavy Industries & Manufacturing Plants</li>
                                <li className='mb-1'><FontAwesomeIcon icon={faCircleCheck} className='text-[#791c19] mr-2'/>Shopping Malls & Commercial Buildings</li>
                                <li className='mb-1'><FontAwesomeIcon icon={faCircleCheck} className='text-[#791c19] mr-2'/>Healthcare</li>
                                <li className='mb-1'><FontAwesomeIcon icon={faCircleCheck} className='text-[#791c19] mr-2'/>Education</li>
                                <li className='mb-1'><FontAwesomeIcon icon={faCircleCheck} className='text-[#791c19] mr-2'/>Air Ports, Sea Ports & Railway Stations</li>
                                <li className='mb-1'><FontAwesomeIcon icon={faCircleCheck} className='text-[#791c19] mr-2'/>Hotels & Restaurants</li>
                                <li className='mb-1'><FontAwesomeIcon icon={faCircleCheck} className='text-[#791c19] mr-2'/>Warehouse</li>
                                <li className='mb-1'><FontAwesomeIcon icon={faCircleCheck} className='text-[#791c19] mr-2'/>Municipality, Streets, Public Areas and Parks</li>
                                <li className='mb-1'><FontAwesomeIcon icon={faCircleCheck} className='text-[#791c19] mr-2'/>Mosques</li>
                                <li className='mb-1'><FontAwesomeIcon icon={faCircleCheck} className='text-[#791c19] mr-2'/>Homeland Security, Military and Defense</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font overflow-hidden">
                <div class=" lg:px-24 px-5 mx-auto">
                <h1 className='text-2xl text-center mb-10 text-[#791c19] font-semibold'>OUR TRAINING SERVICE</h1>
                    <div class="mx-auto flex flex-wrap">
                        <div class="lg:w-1/2 w-full bg-white shadow-md p-4 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className='text-2xl text-[#791c19] font-semibold mb-2'>TRAINING</h1>
                            <p className='text-base text-gray-500'>Trained Operator assures that the equipment or machine will last longer and perform according to the business demands, thus saving on costly spares and repairs.</p>
                            <h1 className='text-lg text-[#791c19] font-semibold my-2'>
                            TRAIN THE OPERATORS</h1>
                            <p className='text-base text-gray-500'>For the effective performance of the equipment’s and machines it is critical to train and certify the Operators who are responsible to deliver the results.</p>
                            <h1 className='text-lg text-[#791c19] font-semibold my-2'>FREE OF COST TRAINING</h1>
                            <p className='text-base text-gray-500'>
                            Pearl Hygiene offers free of cost onsite training to new and existing client representative for better performance and upkeep of the equipment’s.
                            </p>
                            <p className='text-base text-gray-500 mt-3'>
                            As part of our comprehensive After Sale service policy, Our FREE training encompasses a holistic approach to the use of equipment and machines and its periodic maintenance.
                            </p>
                        </div>
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center shadow-md" src="https://www.sq1.com.sg/wp-content/uploads/2022/03/5-questions-before-hiring-a-cleaning-company-for-your-office.jpg" />
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font overflow-hidden">
                <div class=" lg:px-24 py-12 px-5 mx-auto">
                <h1 className='text-2xl text-center mb-10 text-[#791c19] font-semibold'>OUR AFTER SALES SERVICE</h1>
                    <div class="mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center shadow-md" src="https://ingelyt.com/en/wp-content/uploads/sites/2/2017/11/maintenance-after-sales-service-ingelyt-clean-room-ingeneering-gmp-consulting.jpg" />
                        <div class="lg:w-1/2 w-full bg-white shadow-md p-4 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className='text-2xl text-[#791c19] font-semibold mb-2'>AFTER SALES</h1>
                            <p className='text-base text-gray-500'>Pearl Hygiene service team assures equipment’s and tools performance according to buyers expectations.</p>
                            <h1 className='text-lg text-[#791c19] font-semibold my-2'>SERVICE</h1>
                            <p className='text-base text-gray-500'>Pearl Hygiene has one of the largest service teams in Saudi Arabia. We provide in-house warranties, corrective and preventive maintenance on the Equipment’s and Machines. We also provide Service Level Agreements based on specific customer needs. Our service team assures that the equipment’s and tools you have bought from us are performing according to your expectations and delivering the intended benefits.</p>
                            <p className='text-base text-gray-500 mt-3'>
                            Our technicians are trained and certified on every equipment and machines from the most reputable brands, including Nilfisk, Comac, TMB, Faraone, etc.
                            </p>
                            <p className='text-base text-gray-500 mt-3'>
                            Rest be assured of our rapid service response through our Toll Free number and our service centers across Saudi Arabia.
                            </p>
                            <Link href="/contact-us">
                            <button className='px-4 py-2 rounded bg-[#791c19] text-white mt-5 hover:bg-slate-900 hover:text-white transition-all'>Request For Service</button>
                            </Link>
                            <p className='py-5 text-base text-gray-500 font-semibold'>Service Enquiries – 920008985</p>
                            <h1 className='text-lg text-[#791c19] font-semibold my-2'>SPARES</h1>
                            <p className='text-base text-gray-500'>We understand that the availability of spares is critical to your operations. ChbibCare maintains a steady inventory level of spares for all the equipment’s and machines for the brands that we represent.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font overflow-hidden">
                <div class=" lg:px-24 lg:pb-12 px-5 mx-auto">
                <h1 className='text-2xl text-center mb-10 text-[#791c19] font-semibold'>OUR RENTAL SERVICE</h1>
                    <div class="mx-auto flex flex-wrap">
                        <div class="lg:w-1/2 w-full bg-white shadow-md p-4 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className='text-2xl text-[#791c19] font-semibold mb-2'>RENTAL</h1>
                            <p className='text-base text-gray-500'>We understand that the business demands can fluctuate and Market trends may change directions due to which capital investment in equipment’s and machines can impact the cash flows of a company.</p>
                            <h1 className='text-lg text-[#791c19] font-semibold my-2'>RENTAL PROCESS</h1>
                            <p className='text-base text-gray-500'>Pearl Hygiene is diligently working on a process where equipment’s and machines with or without operators can be supplied on rental basis.</p>
                            <h1 className='text-lg text-[#791c19] font-semibold my-2'>OFFERS MATCHING BUSINESS NEEDS</h1>
                            <p className='text-base text-gray-500'>We look forward to tailor our offerings to match your specific business needs to assure the highest quality of service.</p>
                            <p className='text-base text-gray-500 mt-3'>
                            Kindly do feel free to apprise us of your expectations and challenges.
                            </p>
                        </div>
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center shadow-md" src="https://thecleanupclub.com/wp-content/uploads/2016/09/vacationrentals.jpg" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;