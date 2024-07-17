import React from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../context/Auth';

function SavedCart({ item }) {
    const { buyData, setBuyData } = useAuth();
    const { cart } = buyData;

    const clickHandler = (id) => {
        const updatedCart = cart.filter((data) => data._id !== id);
        setBuyData({ ...buyData, cart: updatedCart });
        toast.success('Cart deleted successfully');
    };

    return (
        <div className='mt-8 mb-10 p-2'>
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 cursor-pointer dark:bg-slate-900 dark:text-white dark:border">
                <figure><img src={item.image} alt={item.name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, explicabo.</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div 
                            className="px-2 py-1 rounded-lg border-[2px] hover:bg-pink-500 duration-200 hover:text-white cursor-pointer" 
                            onClick={() => clickHandler(item._id)}
                        >
                            Delete Cart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavedCart;
