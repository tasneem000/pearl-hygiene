"use client";

import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/firebaseConfig.js"
import Image from "next/image";
import Link from "next/link";

const Brands = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const brandsRef = ref(database, 'brands');

        get(brandsRef).then((snapshot) => {
            if (snapshot.exists()) {
                const brandsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                    id,
                    ...data,
                }));;
                setBrands(brandsArray);
            }
        }).catch((error) => {
            console.error(error);
        });

    }, []);

    return (
        <div>
            {
                brands[0] ? <div>
                    <h1 className="brands-title bg-[#581412] py-8">Our Brands</h1>
                    <div id="brands-data">

                        {
                            brands.map((brand) => (
                                <div className="brand-item bg-white shadow" key={brand}>
                                    <Link href={{
                                        pathname: '/products',
                                        query: { brand: brand.id },
                                    }}>
                                        <div>
                                            <Image src={brand.image} width={500} height={500} alt={brand.id} />
                                        </div>
                                        <h3>{brand.id}</h3>

                                        <Link href={{
                                            pathname: '/products',
                                            query: { brand: brand.id },
                                        }}
                                        ><button className="view_products_btn ">
                                                View Products
                                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg></button></Link>
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

export default Brands;