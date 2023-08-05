"use client";


import {useParams} from 'next/navigation'
import {useEffect, useState} from "react";
import {Products} from "@/models/Products";
import HandleProducts from "@/api/HandleProducts";
import Navbar from "@/components/Navbar";

export default function ProductDetail() {

    const [productDetail, setProductDetail] = useState<Products>() //Products co dang array

    const {id} = useParams() // lấy ra id từ query param


    // console.log(params)
    // console.log(id)
    // const id = params

// đợi backend có thể setup xong việc lấy data từ id

    useEffect(() => {
        id &&
        getProductsById()
    }, [{id}])
    const getProductsById = async () => {
        const api = `/showProducts/${id}`

        try {
            const res: any = await HandleProducts.getProducts(api)
            if (res) {
                setProductDetail(res)
            }
        } catch (e) {
            console.log(`Product not found: ${e.message}`)
        }


        console.log(productDetail)
        if (productDetail) {
            return (
                <div>
                    {/* Kiểm tra xem productDetail có dữ liệu hay không */}
                    {productDetail ? (
                        <div>
                            <Navbar/>
                                                        <h1>{productDetail.name}</h1>
                            <p>{productDetail.description}</p>
                            {/* Hiển thị thông tin khác của productDetail */}
                        </div>
                    ) : (
                        <div>Product not found</div>
                    )}


                </div>
            )


        }
    }
}
