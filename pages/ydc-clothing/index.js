import Head from "next/head";
import ydcClothingLogo from "../../public/images/shop/clothing/ydc-clothing/ydc-clothing-logo.jpg";
import ShopInfo from "@/components/shop/clothing/ShopInfo";

const whatsappNumber = "+2348132304065";

const products = [
  { name: "Sweat Shirt", imageUrl: "sweat-shirt.jpg" },
  { name: "Samurai kaftan", imageUrl: "samurai-kaftan.jpg" }, 
  { name: "Gucci inspired sleeve", imageUrl: "gucci-inspired-sleeve.jpg" },
  { name: "Blue eyes kaftan", imageUrl: "blue-eyes-kaftan.jpg" }, 
  { name: "Culture shirt", imageUrl: "culture-shirt.jpg" },
  { name: "Soft pants", imageUrl: "soft-pants.jpg" }, 
  { name: "Beltless trouser", imageUrl: "beltless-trouser.jpg" },
  { name: "Coudroy tri-quarter", imageUrl: "coudroy-tri_quarter.jpg" },
  { name: "Offending with fendi shirt", imageUrl: "offending-with-fendi-shirt.jpg" },
  { name: "Ladies palazzo", imageUrl: "ladies-palazzo.jpg" },
  { name: "Ready to wear", imageUrl: "ready-to-wear.jpg" },
  { name: "Customized snapbacks", imageUrl: "customized-snapbacks.jpg" },
  { name: "Ready to wear kaftan", imageUrl: "ready-to-wear-kaftan.jpg" },
  { name: "Vintage shirt", imageUrl: "vintage-shirt.jpg" },
  { name: "Camp collar shirt", imageUrl: "camp-collar-shirt.jpg" },
  { name: "Sweat shirt and short", imageUrl: "sweat-shirt-and-short.jpg" },
  { name: "Denim short", imageUrl: "denim-shorts.jpg" },
  { name: "Two piece for men", imageUrl: "two-piece-for-men.jpg" },
];


const YdcClothing = () => {
  return (
    <>
      <Head>
        <title>
          YDC Clothings: Designer Clothes for Every Occasion
        </title>
        <meta
          name="description"
          content="Discover stylish and unique designer clothes at YDC Clothings. Explore our latest collections for men and women, featuring high-quality fabrics and on-trend designs. Elevate your wardrobe with fashion that speaks to your individual style."
        />
        <meta
          name="keywords"
          content="YDC Clothings, designer clothes, fashion, men's clothing, women's clothing, stylish apparel, high-quality fabrics, trendsetting designs"
        />
        <meta name="author" content="Mercy Cuisine specializes" />
        <meta
          property="og:title"
          content="YDC Clothings: Designer Clothes for Every Occasion"
        />
        <meta
          property="og:description"
          content="Discover stylish and unique designer clothes at YDC Clothing. Explore our latest collections for men and women, featuring high-quality fabrics and on-trend designs. Elevate your wardrobe with fashion that speaks to your individual style."
        />
        <meta
          property="og:image"
          content="https://opulencedeveloper.com/images/shop/clothing/ydc-clothing/ydc-clothing-social-preview.png"
        />
      </Head>

      <ShopInfo
        header="YDC Clothings"
        title="We make and sell any kinds clothing."
        logo={ydcClothingLogo}
        subTitle="Your looking good is our business..."
        products={products}
        whatsappNumber={whatsappNumber}
        shopImageFolder="ydc-clothing"
      />
    </>
  );
};

export default YdcClothing;
