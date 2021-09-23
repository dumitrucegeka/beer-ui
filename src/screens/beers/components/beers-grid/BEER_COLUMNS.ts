import { GridColDef } from '@mui/x-data-grid';

const BEER_COLUMNS: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 120 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'tagline',
    headerName: 'Tagline',
    width: 150,
    editable: true,
  },
  {
    field: 'first_brewed',
    headerName: 'First Brewed',
    type: 'number',
    width: 110,
    editable: true,
    //   valueGetter: (params) =>
    //     `${params.getValue(params.id, 'firstName') || ''} ${
    //       params.getValue(params.id, 'lastName') || ''
    //     }`,
  },
  {
    field: 'tagline',
    headerName: 'Tagline',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'abv',
    headerName: 'ABV',
    width: 150,
    editable: true,
  },
  {
    field: 'ibu',
    headerName: 'IBU',
    width: 150,
    editable: true,
  },
  {
    field: 'target_fg',
    headerName: 'Target FG',
    width: 150,
    editable: true,
  },
  {
    field: 'target_og',
    headerName: 'Target OG',
    width: 150,
    editable: true,
  },
  {
    field: 'ebc',
    headerName: 'EBC',
    width: 150,
    editable: true,
  },
  {
    field: 'srm',
    headerName: 'SRM',
    width: 150,
    editable: true,
  },
  {
    field: 'ph',
    headerName: 'PH',
    width: 150,
    editable: true,
  },
  {
    field: 'attenuation_level',
    headerName: 'Attenuation Level',
    width: 200,
    editable: true,
  },
  {
    field: 'volume',
    headerName: 'Volume',
    width: 150,
    editable: true,
  },
  {
    field: 'boil_volume',
    headerName: 'Boil Volume',
    width: 150,
    editable: true,
  },
  {
    field: 'method',
    headerName: 'Method',
    width: 150,
    editable: true,
  },
  {
    field: 'ingredients',
    headerName: 'Ingredients',
    width: 150,
    editable: true,
  },
  {
    field: 'food_pairing',
    headerName: 'Food Pairing',
    width: 150,
    editable: true,
  },
  {
    field: 'brewers_tips',
    headerName: 'Brewer Tips',
    width: 150,
    editable: true,
  },
  {
    field: 'contributed_by',
    headerName: 'Contributed By',
    width: 150,
    editable: true,
  },
];

export default BEER_COLUMNS;
