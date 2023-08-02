import Products from "@/components/UI/Products"; 
const pageContent = [
    {
        name: "Fintech",
        type: "Website",
        imageUrl: "/images/money-hub-image.png",
        description:
          "Offers a range of innovative tools and services to help you achieve your financial goals with confidence and ease",
      },
    {
        name: "E-book",
        type: "Mobile App.",
        imageUrl: "/images/story-book-app.png",
        description:
          "Introduce young minds to the joy of reading with 'Wonderland Tales,' an enchanting story book mobile app designed especially for kids",
      },
    {
      name: "Real-Estate",
      type: "Website",
      imageUrl: "/images/real-estate-image.png",
      description:
        "Showcases an extensive range of exceptional properties, catering to diverse needs and preferences",
    },
    
    {
      name: "Prep",
      type: "Website",
      imageUrl: "/images/prep.png",
      description:
        "With comprehensive guides on topics like interview preparation, common interview questions, and salary negotiation.",
    },
    {
      name: "Finance App",
      type: "Mobile App.",
      imageUrl: "/images/finance-app.png",
      description:
        "With a sleek and user-friendly interface, the app makes it easy to stay on top of your finances",
    },
    {
      name: "MacLinks",
      type: "Website",
      imageUrl: "/images/mac-links-image.png",
      description:
        "Enjoy the flexibility to choose from an array of customization options, enabling you to brand your academy and create a seamless extension of your professional identity.",
    },
    {
      name: "EduLab",
      type: "Website",
      imageUrl: "/images/edu-lab-image.png",
      description:
        "A vibrant online platform dedicated to celebrating the transformative power of education",
    },
    
  ];

const Shop = () => {
    return <>
     <p className="font-semibold text-xl mt-10 pl-5 md:mt-20 md:pl-12 md:text-3xl">Welcome to Opulence Shop</p>
    <Products pageContent={pageContent} /></>
}

export default Shop;