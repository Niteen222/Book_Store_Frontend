import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carts from './Carts';
import { useAuth } from '../context/Authprovider';

function Freebook() {
  const { buyData} = useAuth();

  const freeBooks = buyData.book ? buyData.book.filter((data) => data.category === "Free") : [];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className='font-bold text-xl pb-2'>Free Offered Course</h1>
        <p>
          Explore the fundamentals of English language learning with our free beginner-level courses. Designed to build essential skills in reading, writing, listening, and speaking, these courses provide a supportive environment for those starting their journey in English proficiency. Join us to unlock the doorway to effective communication and language mastery.
        </p>
        <div>
          <Slider {...settings}>
            {freeBooks.map((item) => (
              <Carts item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
