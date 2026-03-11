import { getAvailableProducts } from "@/modules/products/services/productService"

export default async function Home() {

  const products = await getAvailableProducts()

  return (
    <main>

      <h1>Productos Agropork</h1>

      {products.map(product => (

        <div key={product.id}>

          <h3>{product.name}</h3>
          <p>{product.price} $</p>

        </div>

      ))}

    </main>
  )
}