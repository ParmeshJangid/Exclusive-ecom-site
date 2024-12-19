import React from "react";
import AboutProfile1 from "../../assets/about/about_profile1.jpg";
import AboutProfile2 from "../../assets/about/about_profile2.jpg";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const AboutProfileElement = () => {
  const aboutProfile = [
    {
      image: AboutProfile1,
      name: "XXX",
      position: "founder & chairman",
    },
    {
      image: AboutProfile2,
      name: "XXX",
      position: "Managing Director",
    },
    {
      image: AboutProfile1,
      name: "XXX",
      position: "Product Designer",
    },
    {
      image: AboutProfile2,
      name: "XXX",
      position: "Brand Manager",
    },
  ];
  return (
    <div className="flex flex-wrap py-12">
      {aboutProfile.map((about, index) => {
        const { image, name, position } = about
        return (
          <div className="w-1/2 lg:w-1/4 px-4">
            <div className="rounded-lg overflow-hidden mb-8" key={index}>
              <img className="h-[250px]" src={image} alt="" />
              <div>
                <h2 className="text-xl font-medium mt-4">{name}</h2>
                <div className="mt-4">{position}</div>
                <div className="flex flex-row items-center mt-4 gap-x-4 text-2xl">
                  <FaInstagram />
                  <FaTwitter />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutProfileElement;
