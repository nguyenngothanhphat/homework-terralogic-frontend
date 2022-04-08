import React from 'react';
import { DOMAIN, DOMAIN_TERRA } from '../../utils/constants/settingSystem';
import "./PDF.css"

export default function PDF(props) {
  console.log("url", props.url)
  const test = () => {
    let iframe = document.getElementById('myIFrame');
    console.log("🚀 ~ file: PDF.js ~ line 5 ~ PDF ~ iframe", iframe)
  }
  return (
    <iframe onLoad={() => {test()}} id="iframe1" src={`${DOMAIN_TERRA}${props.url}`} frameBorder={0} width="100%" height="100%" ></iframe>
  )
}
