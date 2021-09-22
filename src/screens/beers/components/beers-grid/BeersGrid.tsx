import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Beer } from '../../../../models/Beer.interface'
import useGrid from './useGrid'

interface BeersGridProps {
  beers: Beer[]
}

const BeersGrid = (props: BeersGridProps) => {
  const { beers } = props
  const { rows, columns } = useGrid(beers)

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      components={
        {
          // ColumnMenu: MyCustomColumnMenu,
        }
      }
      componentsProps={{
        columnMenu: { background: 'red', counter: rows.length },
      }}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  )
}

export default BeersGrid
