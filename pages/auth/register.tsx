import NextLink from 'next/link'
import { AuthLayout } from '../../components/layouts'
import { Box, Button, Grid, TextField, Typography, Link } from '@mui/material'

const RegisterPage = () => {
  return (
    <AuthLayout title={'Registrarse'}>
      <Box sx={{ width: 400, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant={'h1'} component={'h1'}>Crear cuenta</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Nombre completo'}
              variant={'filled'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Correo'}
              type={'email'}
              variant={'filled'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Contraseña'}
              variant={'filled'}
              type={'password'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color={'secondary'}
              className={'circular-btn'}
              fullWidth
            >
              Ingresar
            </Button>
          </Grid>
          <Grid item xs={12} display={'flex'} justifyContent={'end'}>
            <NextLink href={'/auth/login'} passHref>
              <Link underline={'always'}>
                ¿Ya tienes cuenta?
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}

export default RegisterPage
