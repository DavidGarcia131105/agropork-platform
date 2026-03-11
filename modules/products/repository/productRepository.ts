import { supabase } from "@/lib/supabaseClient";
import { Product } from "@/modules/products/domain/product";

//Unico lugar donde se habla con la bd

export async function findAllProducts():Promise<Product[]> {
    
    const {data,error} = await supabase
    .from('products')
    .select('*')

    if(error){
        console.error('Error fetching products...',error)
        throw new Error('Error fetching the products')
    }
    return data as Product[]
}