"use client";


import {useParams} from 'next/navigation'
import {useEffect, useState} from "react";
import {Products} from "@/models/Products";
import HandleProducts from "@/api/HandleProducts";

export default function ProductDetail() {

    const [productDetail, setProductDetail] = useState(null) //Products co dang array

    const params = useParams()

    // console.log(params)
    const id = params
// đợi backend có thể setup xong việc lấy data từ id

    useEffect(() => {
        id && getSaleProducts()
    }, [id])
    const getSaleProducts = async () => {
        const api = `/showProducts/`

        try {
            const res: any = await HandleProducts.getProducts(api)
            if (res) {
                setProductDetail(res)
            }
        } catch (e) {
            console.log(`Product not found: ${e.message}`)
        }


        // console.log(productDetail)

        return (
            <div>
                Chi tiet san pham


            </div>
        )


    }
}

