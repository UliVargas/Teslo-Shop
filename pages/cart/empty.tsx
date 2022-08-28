import NextLink from 'next/link'
import { ShopLayout } from '../../components/layouts'
import { Box, Typography, Link } from '@mui/material'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'

const EmptyPage = () => {
  return (
    <ShopLayout
      pageDescription='No hay artículos en el carrito de compras'
      title='Carrito vacío'
    >
      <Box
        display='flex'
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }}/>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography>Su carrito está vacío</Typography>
          <NextLink href='/' passHref>
            <Link typography='h4' color='secondary'>
              Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  )
}

export default EmptyPage
