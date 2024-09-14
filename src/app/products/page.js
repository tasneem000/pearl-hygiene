"use client";
import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/firebaseConfig.js";
import Image from "next/image";
import './Products.css'
import Link from "next/link";

const ProductsPage = ({ searchParams }) => {
    const searchBrand = searchParams.brand;
    const searchSector = searchParams.sector;
    const searchCategory = searchParams.category;
    const searchSubCategory = searchParams.subCategory;

    const [products, setProducts] = useState([]);
    const [brand, setBrand] = useState([]);
    const [sector, setSector] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const productsPerPage = 12;

    useEffect(() => {
        const productsRef = ref(database, 'products');
        get(productsRef).then((snapshot) => {
            if (snapshot.exists()) {
                const productsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                    id,
                    ...data,
                }));
                setProducts(productsArray);
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);


    useEffect(() => {
        const brandRef = ref(database, `brands/${searchBrand}`);
        get(brandRef).then((snapshot) => {
            if (snapshot.exists()) {

                setBrand(snapshot.val());

            }
        }).catch((error) => {
            console.error(error);
        });
    }, [searchBrand]);


    useEffect(() => {
        const sectorRef = ref(database, `cleaning-sectors/${searchSector}`);
        get(sectorRef).then((snapshot) => {
            if (snapshot.exists()) {

                setSector(snapshot.val());

            }
        }).catch((error) => {
            console.error(error);
        });
    }, [searchSector]);


    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>

            {
                products[0] ? (
                    <div>
                        <div className="bg-[#581412] py-2">
                            <h1 className="products-title">Our Products</h1>
                            {
                                !(searchBrand || searchCategory) &&
                                <div class="bg-white border-2 lg:mx-96 mx-5 mb-5  shadow p-2 relative rounded-xl flex">
                                    <span class="w-auto flex justify-end  items-center text-gray-500 p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </span>
                                    <input
                                        type="search"
                                        name="searchInput"
                                        aria-label="Search Products"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        placeholder="Search Products" id="title" class="border-white outline-none border-0 w-full rounded-xl p-2" />
                                </div>
                            }
                        </div>


                        <div>
                            {
                                !(searchSubCategory || searchCategory || searchSector) && (brand && searchBrand) &&
                                <div className="bg-white lg:flex lg:gap-8 items-center lg:mx-24 lg:mt-12 lg:mb-24 m-4 p-8 shadow-md rounded-lg">
                                    <Image src={brand.image} alt={searchBrand} width={500} height={500} />
                                    <div className="lg:mt-0 mt-4">
                                        <h2 className="mb-5 text-2xl"><b>{searchBrand}</b></h2>
                                        <p>{brand.details}</p>
                                        <div className="mt-6">
                                            <Link href={`${brand.url}`} target="_blank">For more info visit : <span className="underline text-[#581412]">{brand.url}</span></Link>
                                        </div>
                                    </div>

                                </div>
                            }
                        </div>


                        <div>
                            {
                                !(searchSubCategory || searchCategory || searchBrand) && (sector && searchSector) &&
                                <div className="bg-white lg:flex lg:gap-8 items-center lg:mx-24 lg:mt-12 lg:mb-24 m-4 p-8 shadow-md rounded-lg">
                                    {/* <Image src={sector.image} alt={searchSector} width={500} height={300} className="rounded-sm" /> */}
                                    <div className="lg:mt-0 mt-4">
                                        <h2 className="mb-5 text-4xl"><b>{searchSector}</b></h2>
                                        <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: sector.details }}></p>
                                    </div>

                                </div>
                            }
                        </div>


                        <div className="products-container">
                            {searchBrand && products
                                .filter(product => product.productBrand === searchBrand)
                                .map(product => (
                                    <Link href={`products/${product.id}`} key={product.id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow product-link">
                                        <img className="h-[300px] rounded-t-lg" src={product?.primaryImage ? product?.primaryImage : product?.images[0]} alt={product.productName} width={500} height={500} />
                                        <div class="p-5">
                                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">{product.productName}</h5>
                                            <Link href={`products/${product.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#581412] rounded-lg hover:bg-[#09679d] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                                Details
                                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </Link>
                                ))}


                            {searchSector && products
                                .filter(product => product.productCleaningSector === searchSector)
                                .map(product => (
                                    <Link href={`products/${product.id}`} key={product.id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow product-link">
                                        <img className="h-[300px] rounded-t-lg" src={product?.primaryImage ? product?.primaryImage : product?.images[0]} alt={product.productName} width={500} height={500} />
                                        <div class="p-5">
                                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">{product.productName}</h5>
                                            <Link href={`products/${product.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#581412] rounded-lg hover:bg-[#09679d] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                                Details
                                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </Link>
                                ))}

                            {searchCategory && !searchSubCategory && products
                                .filter(product => product.productCategory === searchCategory)
                                .map(product => (
                                    <Link href={`products/${product.id}`} key={product.id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow product-link">
                                        <img className="h-[300px] rounded-t-lg" src={product?.primaryImage ? product?.primaryImage : product?.images[0]} alt={product.productName} width={500} height={500} />
                                        <div class="p-5">
                                            <h5 class="mb-2 text-[20px] font-bold tracking-tight text-gray-900">{product.productName}</h5>
                                            <Link href={`products/${product.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#581412] rounded-lg hover:bg-[#09679d] focus:ring-4 focus:outline-none focus:ring-blue-300 bottom-0">
                                                Details
                                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </Link>
                                ))
                            }

                            {searchCategory && searchSubCategory && products
                                .filter(product => (product.productCategory === searchCategory && product.productSubCategory == searchSubCategory))
                                .map(product => (
                                    <Link href={`products/${product.id}`} key={product.id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow product-link">
                                        <img className="h-[300px] rounded-t-lg" src={product?.primaryImage ? product?.primaryImage : product?.images[0]} alt={product.productName} width={500} height={500} />
                                        <div class="p-5">
                                            <h5 class="mb-2 text-[20px] font-bold tracking-tight text-gray-900">{product.productName}</h5>
                                            <Link href={`products/${product.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#581412] rounded-lg hover:bg-[#09679d] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                                Details
                                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </Link>
                                ))
                            }
                            {
                                !(searchBrand || searchCategory || searchSector) && currentProducts
                                    .filter(product => product.productName.toLowerCase().includes(searchQuery.toLowerCase()) || product.productBrand.toLowerCase().includes(searchQuery.toLowerCase()))
                                    .map(product => (
                                        <Link href={`products/${product.id}`} key={product.id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow product-link">
                                            <img className="h-[300px] rounded-t-lg" src={product?.primaryImage ? product?.primaryImage : product?.images[0]} alt={product.productName} width={500} height={500} />
                                            <div class="p-5">
                                                <h5 class="mb-2 text-[20px] font-bold tracking-tight text-gray-900">{product.productName}</h5>
                                                <Link href={`products/${product.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#581412] rounded-lg hover:bg-[#09679d] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                                    Details
                                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </Link>
                                    ))
                            }

                        </div>

                        {/* Pagination Controls */}
                        {!(searchBrand || searchCategory || searchSector) && (products.length > productsPerPage) && (
                            <div style={{ margin: '30px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                <p className="text-xl text-red-900">Page: </p>

                                {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
                                    <button
                                        className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                                        key={index + 1}
                                        onClick={() => paginate(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}

                            </div>
                        )}

                    </div>
                ) :
                    <div className="overlay">

                        <div className="loader"><div></div><div></div><div></div></div>
                    </div>
            }

        </div>
    );
};

export default ProductsPage;
