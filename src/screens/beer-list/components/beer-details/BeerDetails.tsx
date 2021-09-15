import { Beer } from '../../../../models/Beer.interface'
import styles from './BeerDetails.module.css'
import React from 'react';

const BeerDetails = (props: any, state: any) => {
  const { beerDetailsContainer, beerDetailContainer, beerDetailTitle, beerDetailValue } = styles
  
  console.log(state)
  const beer = {...props?.location?.state?.beer}
  console.log(beer)

  return (
        <div className={beerDetailsContainer}>
            {Object.keys(beer).map((beerDetail, index) => {
              if (typeof beer[beerDetail as keyof Beer] === 'object') {
                return
              }

              return <div key={index} className={beerDetailContainer}>
                    <p className={beerDetailTitle}> {beerDetail} : </p>
                    <p className={beerDetailValue}> {beer[beerDetail as keyof Beer]} </p>
                </div>
            })}
        </div>
  )
}

export default BeerDetails
