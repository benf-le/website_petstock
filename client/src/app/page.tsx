"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsCard from "@/components/ProductsCard";
import React from "react";
import axios from "axios";
import BannerHome from "@/components/BannerHome";

export default async function Home() {

    const [error, setError] = React.useState<string>(null)


    const [showProductsSale, setShowProductsSale] = React.useState([]);

    const getShowProductsSale = async () => {
        try {
            const response = await axios.get('http://localhost:8000/showPrducts')
            setShowProductsSale(response.data)
        } catch (error) {
            // Xử lý lỗi từ API NestJS

                if (error.response) {
                    setError(error.response.data.message); // Lấy thông báo lỗi từ phản hồi API
                } else {
                    setError('Something went wrong. Please try again later.'); // Lỗi không rõ ràng không có phản hồi từ API
                }

        }

        React.useEffect(() => {
            getShowProductsSale()
        }, [])

        return (
            <div>
                <Navbar/>
                <BannerHome/>
                <product>
                    <h1 className="py-10 pl-48 text-2xl font-semibold">
                        Get more for less with Petstock
                    </h1>
                    {/*<p className="text-center text-red-500 font-semibold">{error}</p>*/}

                    {/*{showProductsSale.map(product => (*/}
                    {/*    <ProductsCard product={product}/>*/}
                    {/*))}*/}
                </product>

                <Footer/>
            </div>
        );

    }
}
