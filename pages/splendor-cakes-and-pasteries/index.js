import Link from "next/link";
import Image from "next/image";
import React from "react";
import Head from "next/head";

import arrowRightIcon from "../../public/images/icon/arrow-right.svg";
import splendorCakesAndPasteriesLogo from "../../public/images/shop/splendor-cakes-and-pasteries/splendor-cakes-and-pasteries-logo.jpg";
import ShopHeader from "@/components/shop/ShopHeader";
import handleWhatsAppClick from "@/helpers/whatsapp";

const whatsappNumber = "+2348133916916";

const products = [
  { name: "Special bons", imageUrl: "special-bons.jpg" },
  { name: "Egg Roll", imageUrl: "egg-roll.jpg" },
  { name: "Chin Chin", imageUrl: "chin-chin.jpg" },
  { name: "Fruit cake", imageUrl: "fruit-cake.jpg" },
  { name: "Donut", imageUrl: "donut.jpg" },
  { name: "Banana Bread", imageUrl: "banana-bread.jpg" },
  { name: "Whipped Cream Iced Cake", imageUrl: "whipped-cream-iced-cake.jpg" },
  { name: "Butter Iced Cake", imageUrl: "butter-iced-cake.jpg" },
  { name: "Cup Cake", imageUrl: "cup-cake.jpg" },
  { name: "Fondant Cake", imageUrl: "fondant-cake.jpg" },
  { name: "White Wedding Cakes", imageUrl: "white-wedding-cake.jpg" },
  {
    name: "Traditional Wedding Cakes",
    imageUrl: "traditional-wedding-cake.jpg",
  },
];

const VenerableEnterprice = () => {
  return (
    <>
      <Head>
        <title>
          Splendor Cakes and Pastries - Custom Cakes and Pastries on Order
        </title>
        <meta
          name="description"
          content="Welcome to Splendor Cakes and Pastries! We specialize in creating custom cakes and pastries tailored to your preferences. Whether you're celebrating a birthday, wedding, or any special occasion, our delicious treats are crafted with care and creativity. Order now to experience the sweetness of Splendor!"
        />
        <meta
          name="keywords"
          content="custom cakes, custom pastries, cake orders, pastry orders, celebration cakes, wedding cakes, birthday cakes, special occasion cakes, artisan cakes, gourmet pastries, bakery orders"
        />
        <meta name="author" content="Splendor Cakes and Pastries" />
        <meta
          property="og:title"
          content="Splendor Cakes and Pastries - Custom Cakes and Pastries on Order"
        />
        <meta
          property="og:description"
          content="Welcome to Splendor Cakes and Pastries! We specialize in creating custom cakes and pastries tailored to your preferences. Whether you're celebrating a birthday, wedding, or any special occasion, our delicious treats are crafted with care and creativity. Order now to experience the sweetness of Splendor!"
        />
        <meta
          property="og:image"
          content="https://opulencedeveloper.com/images/shop/splendor-cakes-and-pasteries/splendor-cakes-and-pasteries-social-preview.png"
        />
      </Head>
      <section className="px-5 pt-16 md:px-8">
        <ShopHeader
          header="Splendor Cakes and Pasteries"
          title="We make custom cakes and pastries on order."
          logo={splendorCakesAndPasteriesLogo}
          subTitle="Home for yummy and tasty treats"
        />

        <div className="w-full pt-10 grid gap-7 relative grid-cols-1 size1:grid-cols-2 size2:grid-cols-3 size4:grid-cols-4">
          {products.map((product, index) => (
              <div key={index} className="bg-color1 h-[550px] rounded-2xl overflow-hidden w-full relative ">
                <div className="bg-white rounded-br-2xl w-max px-5 flex items-end h-max text-color1 absolute top-0">
                  {product.name}
                </div>
                <Image
                  src={`/images/shop/splendor-cakes-and-pasteries/${product.imageUrl}`}
                  loading="eager"
                  priority
                  height={717}
                  width={960}
                  className="h-full w-full object-cover"
                />
                <button
                  onClick={() =>
                    handleWhatsAppClick(
                      `Hello! Splendor Cakes and Pastries, what is the price for ${product.name}`,
                      whatsappNumber
                    )
                  }
                  className="absolute bottom-3 overflow-hidden rounded- right-3 left-3 h-20 "
                >
                  <div className="flex flex-col items-center justify-center text-base h-28 w-full body relative">
                    <div class="light x1"></div> <div class="light x2"></div>{" "}
                    <div class="light x3"></div> <div class="light x4"></div>{" "}
                    <div class="light x5"></div> <div class="light x6"></div>{" "}
                    <div class="light x7"></div> <div class="light x8"></div>{" "}
                    <div class="light x9"></div>
                    <p className="font-semibold border-b pb-0.5 mb-0.5 border-blue-100 text-sm size1:text-base">
                      {product.name}
                    </p>
                    <div className="flex items-center space-x-2">
                      <p>Contact vendor</p>
                      <Image
                        alt={"arrow right icon"}
                        src={arrowRightIcon}
                        priority
                        loading="eager"
                      />
                    </div>
                  </div>
                </button>
              </div>
            
          ))}
        </div>

        <div className="flex justify-center mb-12 mt-14">
          <button
            onClick={() => 
              handleWhatsAppClick(
                "Hello! Splendor Cakes and Pastries, I want to make enquiry of your services.",
                whatsappNumber
              )
            }
            className={`hover:scale-105 transition-transform duration-100 flex items-center space-x-2 rounded-md bg-black/70 py-5 px-4`}
          >
            <p>Contact Splendor Cakes and Pasteries</p>{" "}
            <Image
              alt={"arrow right icon"}
              src={arrowRightIcon}
              priority
              loading="eager"
            />
          </button>
        </div>
        <Link
          href="/shop"
          className={`hover:scale-105 transition-transform duration-100 my-7 w-max mx-auto flex items-center space-x-2 rounded-md bg-black/70 h-10 px-5`}
        >
          <p>Go to shop</p>{" "}
          <Image
            alt={"arrow right icon"}
            src={arrowRightIcon}
            priority
            loading="eager"
          />
        </Link>
      </section>
    </>
  );
};

export default VenerableEnterprice;
