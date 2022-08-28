import { Box, Typography } from '@mui/material'
import { ShopLayout } from '../components/layouts'

const NotFound = () => {
  return (
    <ShopLayout
      pageDescription='No hay nada que mostrar aquí'
      title='Página no encontrada'
    >
      <Box
        display='flex'
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
      >
        <Typography
          variant='h1'
          component='h1'
          fontSize={80}
          fontWeight={200}
        >
          404 |
        </Typography>
        <Typography
          marginLeft='20px'
        >
          No encontramos ningúna página
        </Typography>
      </Box>
    </ShopLayout>
  )
}

export default NotFound
