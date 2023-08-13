import React, { useEffect, useState } from 'react';
import ProductCard from '../ShopByCategory/ProductCard';

const FeatureProducts = () => {
    const [allToy, setAllToy] = useState([]);

    useEffect(() => {
        const fetchToys = async () => {
            try {
                const response = await fetch(
                    "https://b7a11-toy-marketplace-server-side-aothymoon59.vercel.app/toys"
                );
                const data = await response.json();
                setAllToy(data);
            } catch (error) {
                console.error("Error fetching toy data:", error);
            }
        };
        fetchToys();
    }, []);
    return (
        <div className="my-container mt-12 lg:mt-[120px]">
            <div className="section-header text-center space-y-3 mb-12 lg:mb-16">
                <h4 className="text-[#2396DC] text-lg sm:text-xl md:text-2xl font-medium">
                    Feature Products
                </h4>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                    Premier Sports Toys for Winners!
                </h2>
            </div>
            <div className='grid lg:grid-cols-4 gap-7 mt-12'>
                {
                    allToy.slice(0, 8).reverse().map(toy => <ProductCard key={toy._id} toy={toy}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default FeatureProducts;