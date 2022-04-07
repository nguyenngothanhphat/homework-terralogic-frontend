import React from 'react';
import { DOMAIN } from '../../utils/constants/settingSystem';
import "./PDF.css"

export default function PDF(props) {
  
  const test = () => {
    let iframe = document.getElementById('myIFrame');
    console.log("🚀 ~ file: PDF.js ~ line 5 ~ PDF ~ iframe", iframe)
  }
  return (
    <iframe onLoad={() => {test()}} id="iframe1" src={`${DOMAIN}/${props.url}`} frameBorder={0} width="100%" height="100%" ></iframe>
  )
}
