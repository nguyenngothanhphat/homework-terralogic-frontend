import React from 'react';
import "./PDF.css"

export default function PDF(props) {
  
  const test = () => {
    let iframe = document.getElementById('myIFrame');
    console.log("🚀 ~ file: PDF.js ~ line 5 ~ PDF ~ iframe", iframe)
  }
  return (
    <div id="container">
      <iframe onLoad={() => {test()}} id="iframe1" src="https://tailieu.vn/readpdf/tailieu/2022/20220326/vinobelprisen/s12877_021_02392_7_8785.pdf?rand=24059" frameBorder={0} width="100%" height="100%" ></iframe>
    </div>
  )
}
