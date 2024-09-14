import Map from "@/components/ContactComponents/Map";
import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SendMessageFrom from "@/components/ContactComponents/SendMessageFrom";


export const metadata = {
    title: "Contact Us | Pearl Hygiene",
    description: `For any query contact us at - tasneem.abdullah.samit@gmail.com`,
};


const ContactPage = () => {

    return (
        <div>
            <h1 className="contact-title bg-[#581412] py-8">Contact Us</h1>
            <div className="lg:px-24 px-8 py-8  lg:pb-24 lg:pt-12 lg:flex gap-6">

                <div class="lg:w-1/3 mb-8 lg:mb-8 p-6 rounded-lg text-center bg-white shadow-lg">
                    <div class="w-20 h-20 inline-flex items-center border border-dashed border-[#0464a0] justify-center rounded-full mb-4">
                        <FontAwesomeIcon icon={faLocationDot} className="text-4xl text-[#0464a0]" />
                    </div>
                    <h2 class="text-lg text-[#581412]text-gray-900 font-semibold title-font mb-2">ADDRESS</h2>
                    <p class="leading-relaxed text-base text-center">Dhaka - Uttara - Sector - 9 (Beside Milestone College)
                        PO Box: 100101, Uttara, Bangladesh</p>
                </div>
                <div class="lg:w-1/3 p-6 mb-8 lg:mb-8 rounded-lg text-center bg-white shadow-lg">
                    <div class="w-20 h-20 inline-flex items-center border border-dashed border-[#0464a0] justify-center rounded-full mb-4">
                        <FontAwesomeIcon icon={faPhone} className="text-4xl text-[#0464a0]" />
                    </div>
                    <h2 class="text-lg text-[#581412]text-gray-900 font-semibold title-font mb-2">PHONE</h2>
                    <p class="leading-relaxed text-base text-center">
                        <Link href='tel:+88011 91919191'>+88011 91919191</Link>
                        <br />
                        <Link href='tel:+88011 91919191'>+88011 91919191</Link>
                    </p>
                </div>

                <div class="lg:w-1/3 p-6 mb-8 lg:mb-8 rounded-lg text-center bg-white shadow-lg">
                    <div class="w-20 h-20 inline-flex items-center border border-dashed border-[#0464a0] justify-center rounded-full mb-4">
                        <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-[#0464a0]" />
                    </div>
                    <h2 class="text-lg text-[#581412]text-gray-900 font-semibold title-font mb-2">EMAIL</h2>
                    <p class="leading-relaxed text-base text-center">
                        <Link href='mailto:tasneem.abdullah.samit@gmail.com'>tasneem.abdullah.samit@gmail.com</Link>
                    </p>
                </div>

            </div>
            <div className="lg:flex lg:px-24 px-4 lg:mb-24 mb-5 gap-6">
                <div className="col-lg-6 mb-8 lg:mb-0">
                    <Map />
                </div>
                <div className="w-full col-lg-6">
                    <SendMessageFrom />
                </div>
            </div>

        </div>
    );
};

export default ContactPage;