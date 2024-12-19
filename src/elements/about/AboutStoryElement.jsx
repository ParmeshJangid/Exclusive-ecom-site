import React from "react";
import AboutImage from "../../assets/about/about_hero.png";

const AboutStoryElement = () => {
  return (
    <div className="flex flex-wrap pb-12">
      {/* our story */}
      <div className="lg:w-[55%] w-full px-2">
        <h1 className="text-3xl font-semibold mb-6">Our Story</h1>
        <p className="text-justify">
        Launched in 2015, Exclusive is India's premier online shopping marketplace, offering a seamless shopping experience to millions of customers across the country. With a robust presence in major cities and towns, Exclusive is dedicated to providing high-quality products and services to cater to the diverse needs of Indian consumers. Supported by a wide range of tailored marketing, data analytics, and customer service solutions, Exclusive has over 10,500 sellers and 300+ trusted brands.
        </p>
        <br />
        <p className="text-justify">
        As we continue to grow, we remain committed to providing a platform that supports both local businesses and international brands, empowering sellers and offering consumers the best of both worlds. With a dedicated customer support team and a focus on continuous improvement, Exclusive is the go-to shopping destination for millions of people across India.
        </p>
      </div>
      {/* images */}
      <div className="hidden lg:flex w-[45%] px-2">
        <img className="h-full" src={AboutImage} alt="" />
      </div>
    </div>
  );
};

export default AboutStoryElement;
