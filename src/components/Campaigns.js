import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "api/banners.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextBtn({ className, style, onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}
      style={style}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}

function PrevBtn({ className, style, onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`}
      style={style}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}

const Campaigns = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto">
      <h3 className="text-sm font-semibold mb-3 md:pt-8 hidden md:block">
        Kampanyalar
      </h3>
      <Slider className="md:-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className="block px-2">
                <img
                  src={banner.image}
                  alt="getir"
                  className="rounded-lg"
                ></img>
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
