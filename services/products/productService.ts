import { supabase } from "@/lib/supabaseClient";
import { Product } from "@/types/product";

export async function getProducts():Promise<Product[]> {
    
    const {data,error} = await supabase
    .from('products')
    .select('*')

    if(error){
        console.error('Error fetching products...',error)
        throw new Error('Error fetching the products')
    }
    return data as Product[]
}