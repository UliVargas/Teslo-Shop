import { Box, Button, Grid, Typography } from '@mui/material'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { ShopLayout } from '../../components/layouts'
import { ProductSlideShow, SizeSelector } from '../../components/product'
import { ItemCounter } from '../../components/ui'
import { dbProducts } from '../../database'
import { IProduct } from '../../interfaces'

interface Props {
  product: IProduct
}

const ProductPage: FC<Props> = ({ product }) => {
  return (
    <ShopLayout
      title={product.title}
      pageDescription={product.description}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideShow images={product.images}/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            {/* Titulos */}
            <Typography variant='h1' component='h1'>{product.title}</Typography>
            <Typography variant='subtitle1'>{`$${product.price}`}</Typography>

            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Cantidad</Typography>
              <ItemCounter />
              <SizeSelector sizes={product.sizes} selectedSize={product.sizes[0]}/>
            </Box>
            { /* Agregar al carrito */ }

            <Button color='secondary' className='circular-btn'>
              Agregar al carrito
            </Button>
            {/* <Chip label='No hay disponibles' color='error' variant='outlined' /> */}
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Descripción</Typography>
              <Typography variant='body2'>{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const productSlugs = await dbProducts.getAllProductsSlugs()

  return {
    paths: productSlugs.map(({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = '' } = params as { slug: string }
  const product = await dbProducts.getProducBySlug(slug)

  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  }
}

export default ProductPage
