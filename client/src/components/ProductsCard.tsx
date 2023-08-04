"use client";
import React from "react";
import axios, {isAxiosError} from "axios";
import {Product} from "@prisma/client";
import Link from "next/link";


interface ProductCardProps {
    product: Product
}

export default function ProductsCard({product}:ProductCardProps) {
        return (
            <div>
                <product>
                    <Link href={"/products/"${product.id}}>
                    <card className="flex w-full flex-nowrap justify-center">

                        <div className="card ml-5 w-64 bg-base-100 shadow-xl">
                            <figure>
                                <img src={product.imageUrl} alt="Shoes"/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-base">
                                    {product.name}
                                </h2>
                                <p className="text-sm">{product.description}</p>
                                <p className="py-8 text-3xl font-semibold">${product.price}</p>
                                <div className="card-actions ">
                                    <button className="p-btn-addToCart pet-stock-color btn text-white">
                                        Add to Card
                                    </button>
                                </div>
                            </div>
                        </div>




                    </card>
                    </Link>
                </product>
            </div>
        );

}


