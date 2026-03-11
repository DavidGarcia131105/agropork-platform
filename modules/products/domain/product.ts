//representa un producto del dominio Agropork, no una tabla.
export type Product = {
    id: string,
    name:string,
    description:string | null
    price: number 
    stock: number 
    category_id: string,
    created_at: string
}