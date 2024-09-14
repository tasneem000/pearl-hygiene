"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/firebaseConfig"

const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = ref(database, 'featuredProducts');
    get(productsRef).then((snapshot) => {
      if (snapshot.exists()) {
        const productsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data,
        }));
        setProducts(productsArray);
      }
      console.log("products fetched:", productsArray);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  console.log(products)


  const responsive2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 565 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1
    }
  };

  return (
    <div className="lg:p-24 p-8 bg-gray-100">
      {/* <div  data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1260"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            >
    
            </div> */}

      <div className="text-center">
        <h1 className="text-[#581412] lg:text-3xl text-lg font-semibold uppercase mb-8" >Featured Products
        </h1>

        {
          products[0] ?
            <Carousel
              responsive={responsive2}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              autoPlaySpeed={3000}
              autoPlay={true}
              keyBoardControl={true}
              transitionDuration={500}
            >

              {
                products.map((product) => (
                  <div className=" mx-4 rounded-lg mb-2 bg-white shadow-md featured-product" key={product}>
                    <Link href={`products/${product.id}`}>
                      <Image className="h-[200px]" src={product.image} width={500} height={500} alt={product.name} />
                      <p className="p-2 pb-4 text-[#581412] truncate">{product.name}</p>
                    </Link>

                  </div>
                ))
              }

            </Carousel> : <div className="overlay">

              <div className="loader">
                <div></div><div></div><div></div></div>
            </div>
        }


      </div>
    </div>
  );
};

export default FeaturedProducts;