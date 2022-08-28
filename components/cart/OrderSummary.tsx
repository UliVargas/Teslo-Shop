import { Grid, Typography } from '@mui/material'

export const OrderSummary = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Typography>Sin productos</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>3 productos</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{`$${155}`}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>IVA (16%)</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{`$${30}`}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant='subtitle1'>Total</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography variant='subtitle1'>{`$${185}`}</Typography>
      </Grid>
    </Grid>
  )
}
