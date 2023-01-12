import NextLink from 'next/link'
import { ShopLayout } from '../../components/layouts'
import { Chip, Grid, Link, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Nombre', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra información si está pagada la orden o no',
    width: 200,
    renderCell: (params: any) => {
      return (
        params.row.paid
          ? <Chip color={'success'} label={'Pagada'} variant={'outlined'}/>
          : <Chip color={'error'} label={'No pagada'} variant={'outlined'}/>
      )
    }
  },
  {
    field: 'Compra',
    headerName: 'Ver compra',
    width: 200,
    sortable: false,
    renderCell: (params: any) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline={'always'}>
            Ver compra
          </Link>
        </NextLink>
      )
    }
  }
]

const rows = [
  { id: 1, paid: true, fullname: 'Ulises Vargas' },
  { id: 2, paid: false, fullname: 'Dafne Gonzalez' },
  { id: 3, paid: true, fullname: 'Alberto Vargas' },
  { id: 4, paid: false, fullname: 'Gladys Vargas' },
  { id: 5, paid: true, fullname: 'Fernando Lara' },
  { id: 6, paid: true, fullname: 'Auner Peñaloza' },
  { id: 7, paid: true, fullname: 'Maria Flores' }
]

const HistoryPage = () => {
  return (
    <ShopLayout
      title={'Historial de compras'}
      pageDescription={'Historial de ocompras del cliente'}
    >
      <Typography variant={'h1'} component={'h1'}>Historial de compras</Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            columns={columns}
            rows={rows}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default HistoryPage
