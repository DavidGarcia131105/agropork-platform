import { NextResponse } from "next/server";
import { getProducts } from "@/services/products/productService";

export async function GET(){
    try{
        const products = await getProducts()
        return NextResponse.json(products)
    }catch(error){
        return NextResponse.json({
            error: 'Failed to fetch the products'
        },
    {
        status: 500
    })
    }
}