import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

interface UseDataGridProps {
  rows: any[]
  columns: GridColDef[]
  classes: string;
  rowsPerPageOptions: number[]
}

const useDataGrid = (props: UseDataGridProps) => {
  const { rows, columns, classes, rowsPerPageOptions } = props

  const dataGrid = (
    <DataGrid
      className={classes}
      rows={rows}
      columns={columns}
      // components={
      // {
      // ColumnMenu: MyCustomColumnMenu,
      //   }
      // }
      // componentsProps={{
      //   columnMenu: { background: 'red', counter: rows.length },
      // }}
      pageSize={25}
      rowsPerPageOptions={rowsPerPageOptions}
      checkboxSelection
      disableSelectionOnClick
    />
  )

  return { dataGrid }
}

export default useDataGrid
