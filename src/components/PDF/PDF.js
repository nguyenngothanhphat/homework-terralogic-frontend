import React from 'react';
import "./PDF.css"

export default function PDF(props) {
  
  const test = () => {
    let iframe = document.getElementById('myIFrame');
    console.log("🚀 ~ file: PDF.js ~ line 5 ~ PDF ~ iframe", iframe)
  }
  return (
    <iframe onLoad={() => {test()}} id="iframe1" src={`https://chaupham.ngrok.io/${props.url}`} frameBorder={0} width="100%" height="100%" ></iframe>
  )
}
