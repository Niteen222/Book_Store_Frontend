import React from 'react'
import { useAuth } from '../context/Authprovider';
import { Link } from 'react-router-dom';
import SavedCart from './SavedCart';
function Store() {
  const { buyData, setBuyData } = useAuth();
  const { cart, book } = buyData;
  console.log(cart)
  return (
    <>
      <br />
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>Welcome to our store section <span className='text-pink-500'>Your Carts Here! :)</span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor totam unde voluptatem quaerat cum, accusantium saepe? Voluptatibus a corporis eius, dolorum exercitationem ea quia adipisci magnam qui eaque fuga reiciendis incidunt facilis veniam porro delectus animi! Dolore at sapiente consectetur tenetur dolorem commodi ipsum perferendis.</p>
          <Link to={"/"}>
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back to Home</button>
          </Link>
          
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>

          {
            cart.map((item) => (
              <SavedCart key={item._id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Store

