import React, { useState } from 'react';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const FavouriteWrapper = (props: { isFavourite: boolean; onChange: (isFavourite: boolean) => void }) => {
  const { isFavourite, onChange } = props;
  const [favourite, setFavourite] = useState(isFavourite);

  const clickCallback = (): void => {
    setFavourite(!favourite);
    onChange(!favourite);
  };

  return <IconButton onClick={clickCallback}>{favourite ? <Favorite color='primary' /> : <FavoriteBorder />}</IconButton>;
};

export default FavouriteWrapper;
