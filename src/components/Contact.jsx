import React from 'react'
import { Link } from 'react-router-dom'
// import { useForm } from "react-hook-form"
import nitin from "../assets/image.png";

function Contact() {

    return (
        <>
            <br />
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='flex justify-center items-center mt-6'>
                    <img
                        src={nitin}
                        className='h-64 w-64 border-2 border-black rounded-full mt-20'
                        alt="Book Store"
                    />
                </div>
                <h1 className='text-2xl md:text-4xl text-center mt-4'><span>I AM </span><span className='text-yellow-500'>NITEEN PANDEY</span> </h1>
                <div className='mt-28 flex flex-col items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>Welcome to my 🤗 <span className='text-pink-500'> Contact section</span></h1>
                    <p className='mt-12 px-4 md:px-0 text-left'>I am fresher and currently enrolled in <span className='text-pink-500'>NAVGURUKUL FOUNDATION FOR SOCIAL WELFARE</span>. I am always ready for learning and growing. I am sure that I will be able to add value to your team. As I am fast learner, I always open to take new challenges. I am good team player and I look forward to helping others. I am hero to HTML, CSS, JavaScript,Python Basics ,ReactJS,MongoDB Basics and I have a good knowledge of basic of computer. Also, I have good leadership quality so I can handle all working independently. I am sure that I have all skill set that is required for this position.k independently. I am confident that I have the skills and abilities necessary to be successful in this role.
                        <br />
                        <br />
                        I am a <span className='text-pink-500'>Front-end developer</span>. It is my job to make websites and apps look good and feel easy to use. I have to use a special computer language such as HTML, CSS, JavaScript, and ReactJs to make these amazing parts that people can click and use. Now my main work is to make a website quick and easy on all types of devices. This includes phones, tablets, and computers. Using some special ideas to make things that are new and easy for everyone.
                        <br />
                        <br />
                        <h1 className='text-2xl md:text-4xl text-center mt-4'><span className='text-yellow-500'>Thank You !! 🙏🏻🥰</span> </h1>
                    </p>
                    <div className='mt-28 flex flex-col items-center justify-center text-center'>
                        <h1 className='text-2xl md:text-4xl'>About  <span className='text-pink-500'> Book Store</span> website </h1>
                        <p className='mt-12 px-4 md:px-0 text-left'>Welcome to my Book Store, a special place for people who love books. When you come in, you'll find a world full of new adventures and knowledge. We have chosen our books carefully, so there's something for everyone. You can find old classics, new bestsellers, and hidden treasures in many genres like fiction, non-fiction, mystery, romance, fantasy, and science fiction. Our store is cozy and welcoming, making it the perfect place to relax with a good book. We have comfortable seats and a quiet atmosphere, ideal for reading. Our friendly and knowledgeable staff are always ready to help you find your next favorite book. They can give you recommendations and help you find specific titles. We also host community events like author signings, book clubs, and reading sessions, bringing book lovers together. At our Book Store, we believe books have the power to change lives and we want to share the love of reading with everyone. Our store is more than just a place to buy books; it's a community hub where stories come to life and readers connect. Visit us and start a new literary adventure. Whether you're adding to your personal library, looking for the perfect gift, or just wanting a peaceful place to read, we have everything you need. We can't wait to welcome you and share the joy of reading with you !!
                        </p>
                        <br />
                        <br />

                    </div>
                    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>

                        <div className='flex flex-col md:flex-row items-center justify-center mt-6 space-y-4 md:space-y-0 md:space-x-4'>
                            <img
                                src="https://media.tenor.com/5miqL4qPOGgAAAAi/school-book.gif"
                                alt="Book GIF"
                                className='w-72 h-72 md:w-48 md:h-48 lg:w-64 lg:h-64'
                            />
                            <img
                                src="https://media.tenor.com/rza3xgJbKLQAAAAi/school-education.gif"
                                alt="Education GIF"
                                className='w-72 h-72 md:w-48 md:h-48 lg:w-64 lg:h-64'
                            />
                        </div>
                        <br />
                        <br />
                    </div>
                    <br />
                    <Link to={"/"}>
                        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back to Home</button>
                    </Link>
                </div>
                <br />

            </div>
        </>
    )
}

export default Contact

