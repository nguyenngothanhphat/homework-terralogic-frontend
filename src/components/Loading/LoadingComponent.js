import React from 'react';
import {useSelector} from 'react-redux';
import "./LoadingComponent.css";

export default function LoadingComponent(props) {
  const {isLoading} = useSelector(state => state.LoadingReducer);
  return (
    <>
      {isLoading ? (
        <div className='bg-loading'>
          <img src="../images/loading.gif" alt="loading gif" />
        </div>
      ) : ''}
    </>
  )
}
