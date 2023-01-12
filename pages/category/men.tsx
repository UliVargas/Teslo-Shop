import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/product'
import { FullScreenLoading } from '../../components/ui'
import { useProducts } from '../../hooks'

const MenPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?gender=men')
  return (
    <ShopLayout title='Teslo-Shop - Mens' pageDescription='Encuentra los mejores productos de Teslo para hombres'>
      <Typography variant='h1' component='h1'>Hombres</Typography>
      <Typography variant='h2' component='h2'>Todos los productos para ellos</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }
    </ShopLayout>
  )
}

export default MenPage
