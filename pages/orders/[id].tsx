import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material'
import { CartList, OrderSummary } from '../../components/cart'
import NextLink from 'next/link'
import { ShopLayout } from '../../components/layouts'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'

const OrderPage = () => {
  return (
    <ShopLayout
      title={'Resumen de la orden'}
      pageDescription={'Revisión de la orden antes de pagar'}
    >
      <Typography
        variant='h1'
        component='h1'
      >
        Orden: abc123
      </Typography>

      {/* <Chip sx={{ my: 2 }} */}
      {/*   label={'Pendiente de pago'} */}
      {/*       variant={'outlined'} */}
      {/*       color={'error'} */}
      {/*       icon={<CreditCardOffOutlined />} */}
      {/* /> */}
      {/* <Chip sx={{ my: 2 }} */}
      {/*   label={'Esta orden ya fue pagada'} */}
      {/*       variant={'outlined'} */}
      {/*       color={'success'} */}
      {/*       icon={<CreditScoreOutlined />} */}
      {/* /> */}

      <Grid container sx={{ mt: 1 }}>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='sumary-card'>
            <CardContent>
              <Typography variant='h2'>Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant={'subtitle1'}>Dirección de entrega</Typography>
                <NextLink href={'/checkout/address'} passHref>
                  <Link underline={'always'}>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography>Ulises Vargas</Typography>
              <Typography>Delfos 1277</Typography>
              <Typography>Valle de los Molinos, 45200</Typography>
              <Typography>Zapopan</Typography>
              <Typography>+52 3317124281</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display={'flex'} justifyContent={'flex-end'}>
                <NextLink href={'/cart'} passHref>
                  <Link underline={'always'}>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Chip sx={{ my: 2 }}
                      label={'Esta orden ya fue pagada'}
                      variant={'outlined'}
                      color={'success'}
                      icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default OrderPage
