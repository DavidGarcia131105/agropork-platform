export type Product = {
    id: string,
    name:string,
    description:string | null
    price: number | null,
    stock: number | null,
    category_id: string,
    created_at: string
}