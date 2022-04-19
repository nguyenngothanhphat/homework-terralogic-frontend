import React, { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Document, Page, pdfjs } from "react-pdf";
import {
  changeReadingStatusAction,
  changeCompletedStatusAction,
} from "../../redux/actions/UserAction";
import {
  DOMAIN_FILE,
  TOKEN,
  USER_LOGIN,
} from "../../utils/constants/settingSystem";
import "./PDF.css";
import IFrame from "../IFrame/IFrame";

function PDF(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const dispatch = useDispatch();
  let { _id: id, url, status } = props.doc;
  let checkUrl = url.split(".").pop();
  useEffect(() => {
    changeReadingStatus();
  }, []);
  const onDocumentLoadSuccess = ({numPages}) => {
    setNumPages(numPages);
    setPageNumber(1);
  }
  const changeReadingStatus = () => {
    if (JSON.parse(localStorage.getItem(USER_LOGIN)).role === 0) {
      dispatch(changeReadingStatusAction(id));
    }
  };
  const changeCompletedStatus = (e) => {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem(USER_LOGIN)).role === 0) {
      dispatch(changeCompletedStatusAction(id));
    }
  };
  const div = document.getElementById('container');
  const scrollShowSign = () => {
    const shouldDisable = div?.scrollTop + div?.clientHeight >= div?.scrollHeight
    if (shouldDisable) {
      setIsShow(false)
    }
  }
  useEffect(() => {
    scrollShowSign()
    return () => {
      setIsShow(true);
    }
  }, [id, isShow])
  console.log("isShow", isShow)
  return (
    <>
      {checkUrl !== "docx" ? (
        <>
        <div id="container" onScroll={scrollShowSign}>
          <IFrame onDocumentLoadSuccess={onDocumentLoadSuccess} url={url} id={id} numPages={numPages} />
          {/* <iframe id="iframe1" src={`${DOMAIN_FILE}/${id}${url}`} frameBorder={0} width="100%" height="90%" ></iframe> */}
          
        </div>
        {status && status !== 'C' ? (<button className="btn btn-success btn-sign" disabled={isShow} onClick={(e) => {changeCompletedStatus(e)}}>Sign</button>) : ""}
        </>
      ) : (
        <>
          <iframe
            id="iframe1"
            src={`${DOMAIN_FILE}${url}`}
            frameBorder={0}
            width="0%"
            height="0%"
          ></iframe>
        </>
      )}
    </>
  );
}
export default PDF;