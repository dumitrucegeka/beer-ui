import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Beer } from '../../../../models/Beer.interface'
import styles from './BeersGrid.module.css'
import BEER_COLUMNS from './BEER_COLUMNS'

interface BeersGridProps {
  beers: Beer[]
}

const BeersGrid = (props: BeersGridProps) => {
  const { beers } = props
  const { beersGridStyle } = styles

  return (
    <DataGrid
      className={beersGridStyle}
      rows={beers}
      columns={BEER_COLUMNS}
      // components={
      // {
      // ColumnMenu: MyCustomColumnMenu,
      //   }
      // }
      // componentsProps={{
      //   columnMenu: { background: 'red', counter: rows.length },
      // }}
      pageSize={25}
      rowsPerPageOptions={[5, 10, 25, 50]}
      checkboxSelection
      disableSelectionOnClick
    />
  )
}

export default BeersGrid
