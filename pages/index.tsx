import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts'
import { ProductList } from '../components/product'

import { initialData } from '../database/products'
import { IProduct } from '../interfaces'

const HomePage: NextPage = () => {
  return (
    <ShopLayout title='Teslo-Shop - Home' pageDescription='Encuentra los mejores productos de Teslo aquí'>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' component='h2'>Todos los productos</Typography>
      <ProductList products={initialData.products as IProduct[]}/>
    </ShopLayout>
  )
}

export default HomePage
