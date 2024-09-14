"use client";

import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/firebaseConfig.js"
import Image from "next/image";
import Link from "next/link";

const CleaningSectors = () => {

    const [cleaningSectors, setCleaningSectors] = useState([]);

    useEffect(() => {
        const cleaningSectorsRef = ref(database, 'cleaning-sectors');

        get(cleaningSectorsRef).then((snapshot) => {
            if (snapshot.exists()) {
                const cleaningSectorsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                    id,
                    ...data,
                }));;
                setCleaningSectors(cleaningSectorsArray);
            }
        }).catch((error) => {
            console.error(error);
        });

    }, []);

    // let shortDescription;

    // if (sector?.details) {
    //   const words = sector?.details.split(' ');
    //   shortDescription = words.slice(0, 36).join(' ');
    // }

    return (
        <div>
           {
                cleaningSectors[0] ? <div>
                    <h1 className="text-center text-4xl text-white uppercase bg-[#581412] py-8">FEATURED CLEANING SECTORS</h1>
                    <div id="sectors-data" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-20">

                        {
                            cleaningSectors.map((sector) => (
                                <div className="bg-white shadow" key={sector}>
                                    <Link href={{
                                        pathname: '/products',
                                        query: { sector: sector.id },
                                    }}>
                                        <div className="overflow-hidden">
                                            <Image className="h-[300px] rounded-t-lg hover:scale-110 transition-all" src={sector.image} width={500} height={500} alt={sector.id} />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="pb-2 text-[#581412] font-semibold truncate">{sector.id}</h3>

                                            <p className="text-[#581412] mb-2"><span className="" dangerouslySetInnerHTML={{ __html: sector.details.slice(0, 148) }}></span>... Read More</p>
                                            <Link href={{
                                                pathname: '/products',
                                                query: { sector: sector.id },
                                            }} className="inline-flex position-absolute bottom-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#581412] rounded-lg hover:bg-[#09679d] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                                Explore Products
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }

                    </div>
                </div> : <div className="overlay">

                    <div className="loader"><div></div><div></div><div></div></div>
                </div>
            }
        </div>
    );
};

export default CleaningSectors;