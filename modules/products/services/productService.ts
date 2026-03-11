import { findAllProducts } from "@/modules/products/repository/productRepository";
import { Product } from "@/modules/products/domain/product";

/**
 * 
 * Validaciones
 * Reglas de negocio
 * Calculos
 * 
 */

export async function getAvailableProducts():Promise<Product[]>{

    const products = await findAllProducts()
    return products.filter(product=> product.stock > 0)

}