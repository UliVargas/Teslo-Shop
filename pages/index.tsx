import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts'
import { ProductList } from '../components/product'
import { FullScreenLoading } from '../components/ui'
import { useProducts } from '../hooks'

const HomePage: NextPage = () => {
  const { products, isLoading } = useProducts('/products')
  return (
    <ShopLayout title='Teslo-Shop - Home' pageDescription='Encuentra los mejores productos de Teslo aquí'>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' component='h2'>Todos los productos</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }
    </ShopLayout>
  )
}

export default HomePage
