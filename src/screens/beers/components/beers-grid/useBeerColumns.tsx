import React, { ReactNode } from 'react';

import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Divider, IconButton, Tooltip, Typography } from '@material-ui/core';
import { ExitToAppOutlined } from '@material-ui/icons';

import MeasurementComponent from '../../../../components/MeasurementComponent';
import Measurement from '../../../../models/Measurement.interface';
import { Ingredients } from '../../../../models/Ingredient.interface';
import IngredientsComponent from '../../../../components/IngredientsComponents';
import { BrewingMethods } from '../../../../models/BrewingMethod.interface';
import BrewingMethodsComponent from '../../../../components/BrewingMethodsComponent';
import FoodPairingsTooltip from '../../../../components/FoodPairingsTooltip';

const useBeerColumns = (openDetailsHandler: (beerId: string) => void) => {
  const renderMeasurement = (params: GridValueGetterParams) => {
    const { value, unit } = params.row.volume as Measurement;
    return (<MeasurementComponent value={value} unit={unit} />) as ReactNode;
  };

  const renderIngredients = (params: GridValueGetterParams) => {
    const ingredients = params.row.ingredients as Ingredients;
    return <IngredientsComponent {...ingredients} />;
  };

  const renderMethod = (params: GridValueGetterParams) => {
    const methods = params.row.method as BrewingMethods;
    return <BrewingMethodsComponent {...methods} />;
  };

  const renderFoodPairings = (params: GridValueGetterParams) => {
    const foodPairings = params.row.food_pairing as string[];

    return <FoodPairingsTooltip foodPairings={foodPairings} />;
  };

  const BEER_COLUMNS: GridColDef[] = [
    {
      field: 'details',
      width: 60,
      renderCell: (params: GridValueGetterParams) => (
        <IconButton onClick={() => openDetailsHandler(`${params.getValue(params.id, 'id')}`)}>
          <ExitToAppOutlined />
        </IconButton>
      ),
    },
    {
      field: 'id',
      headerName: 'ID',
      width: 120,
    },
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
      editable: false,
      renderCell: renderMeasurement,
      // valueGetter: (params: GridValueGetterParams) => {
      //   return `${params.getValue(params.id, 'volume') || ''} ${params.getValue(params.id, 'volume') || ''}` as GridCellValue;
      // },
    },
    {
      field: 'boil_volume',
      headerName: 'Boil Volume',
      width: 150,
      editable: false,
      renderCell: renderMeasurement,
    },
    {
      field: 'method',
      headerName: 'Method',
      width: 150,
      editable: false,
      renderCell: renderMethod,
    },
    {
      field: 'ingredients',
      headerName: 'Ingredients',
      width: 150,
      editable: false,
      renderCell: renderIngredients,
    },
    {
      field: 'food_pairing',
      headerName: 'Food Pairing',
      width: 150,
      editable: false,
      renderCell: renderFoodPairings,
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

  return { BEER_COLUMNS };
};

export default useBeerColumns;
