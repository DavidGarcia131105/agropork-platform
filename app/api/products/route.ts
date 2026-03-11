import { NextResponse } from "next/server";
import { findAllProducts } from "@/modules/products/repository/productRepository";

export async function GET(){
    try{
        const products = await findAllProducts()
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