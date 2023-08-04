"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import HandleProductsSale from "@/api/HandleProductsSale";
import {Products} from "@/models/Products";
import {toChildArray} from "preact";


export default function ProductsCard() {

    const [productSale, setProductSale] = useState<Products[]>([]) //Products co dang array

    useEffect(() => {
        getSaleProducts()
    }, [])
    const getSaleProducts = async () => {
        const api = `/showProductsSale`

        try {
            const res: any = await HandleProductsSale.getProductsSale(api)
            if (res) {
                setProductSale(res)
            }
        } catch (e) {
            console.log(`Product not found: ${e.message}`)
        }
    }

    return (
        <div>
            <div className="py-10 pl-48 my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center">
                {productSale.length > 0 && productSale.map(item =>

                    <Link href={`/products/${item.id}`}>
                        <div className="card ml-5 w-64 bg-base-100 shadow-xl ">
                            <figure>
                                <img src={item.imageUrl} alt="Shoes"/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-base">
                                    {item.name}
                                </h2>
                                <p className="text-sm">{item.description}</p>
                                <p className="py-8 text-3xl font-semibold">${item.price}</p>
                                <div className="card-actions ">
                                    <button className="p-btn-addToCart pet-stock-color btn text-white">
                                        Add to Card
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>

            )}</div>
        </div>
    );

}


