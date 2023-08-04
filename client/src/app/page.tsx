
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsCard from "@/components/ProductsCard";
import React from "react";
import axios from "axios";
import BannerHome from "@/components/BannerHome";

export default async function Home() {


        return (
            <div>
                <Navbar/>
                <BannerHome/>
                <product>
                    <h1 className="py-10 pl-48 text-2xl font-semibold">
                        Get more for less with Petstock
                    </h1>
                   <ProductsCard/>
                </product>

                <Footer/>
            </div>
        );
}
