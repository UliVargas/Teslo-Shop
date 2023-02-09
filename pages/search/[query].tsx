import { Box, Typography } from '@mui/material'
import type { NextPage, GetServerSideProps } from 'next'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/product'
import { dbProducts } from '../../database'
import { IProduct } from '../../interfaces'

interface Props {
  products: IProduct[]
  foundProducts: boolean
  query: string
}

// eslint-disable-next-line react/prop-types
const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <ShopLayout title='Teslo-Shop - Search' pageDescription='Encuentra los mejores productos de Teslo aquí'>
      <Typography variant='h1' component='h1'>Buscar</Typography>
      {
        foundProducts
          ? <Typography variant='h2' component='h2' textTransform={'capitalize'}>{query}</Typography>
          : (
            <Box display={'flex'}>
              <Typography variant='h2' component='h2' mb={2}>No se encontraron productos con</Typography>
              <Typography variant='h2' color={'secondary'} component='h2' ml={1} textTransform='capitalize'>{query}</Typography>
            </Box>
            )
      }
      <ProductList products={products} />
    </ShopLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = '' } = params as { query: string }
  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

  let products = await dbProducts.getProductsByTerm(query)

  const foundProducts = products.length > 0

  if (!foundProducts) {
    products = await dbProducts.getAllProducts()
  }

  return {
    props: {
      products,
      foundProducts,
      query
    }
  }
}

export default SearchPage
