import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonCard(props) {
  const {sizePage} = props;
  return (
    <>
      {Array(parseInt(sizePage))
        .fill()
        .map((item, index) => {
          
        })
      }
    </>
  )
}
