import React from 'react';
import {useSelector} from 'react-redux';
import "./LoadingComponent.css";

export default function LoadingComponent(props) {
  const {isLoading} = useSelector(state => state.LoadingReducer);
  return (
    <>
      {isLoading ? (
        <div className='bg-loading'>
          <img src={require('../../assets/img/loading.gif')} alt="loading" />
        </div>
      ) : ''}
    </>
  )
}
