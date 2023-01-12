import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/product'
import { FullScreenLoading } from '../../components/ui'
import { useProducts } from '../../hooks'

const SearchPage: NextPage = () => {
  const { products, isLoading } = useProducts('/search/')
  return (
    <ShopLayout title='Teslo-Shop - Search' pageDescription='Encuentra los mejores productos de Teslo aquí'>
      <Typography variant='h1' component='h1'>Buscar</Typography>
      <Typography variant='h2' component='h2'>ABC --- 123</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }
    </ShopLayout>
  )
}

export default SearchPage
