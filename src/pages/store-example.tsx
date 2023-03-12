import { observer } from 'mobx-react-lite'
import { useStore } from '@/hooks/useStore'

export const MobxExamplePage = observer(() => {
  const {
    rootStore: { ProductStore },
  } = useStore()

  const loadProduct = () => {
    if (!ProductStore.products.length) ProductStore.fetchProducts()
  }
  const deleteProduct = () => {
    ProductStore.delete()
  }
  const clearProduct = () => {
    ProductStore.clear()
  }
  return (
    <section className='flex col gap10'>
      <div>products: {ProductStore.quantity}</div>
      <div>
        <button onClick={loadProduct}> load </button>
        <button onClick={deleteProduct}> delete </button>
        <button onClick={clearProduct}> clear </button>
      </div>
      <div>
        {!ProductStore.products.length ? (
          <>Products not found</>
        ) : (
          <table className='table'>
            <thead>
              <tr>
                <th>title</th>
                <th>price</th>
                <th>category</th>
                <th>description</th>
              </tr>
            </thead>

            <tbody>
              {ProductStore?.getProducts.map(
                ({ id, title, price, category, description }) => (
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>{category}</td>
                    <td>{description}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </div>
    </section>
  )
})
