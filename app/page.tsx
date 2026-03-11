import { getProducts } from "@/services/products/productService"

export default async function Home() {

  const products = await getProducts()

  return (
    <main>
      <h1>Agropork Products</h1>

      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price} $</p>
        </div>
      ))}
    </main>
  )
}