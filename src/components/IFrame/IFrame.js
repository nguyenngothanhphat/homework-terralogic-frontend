import React, {useMemo} from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { DOMAIN_FILE, TOKEN } from '../../utils/constants/settingSystem';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function IFrame(props) {
  return useMemo(() => {
    return (
    <Document
      file={{
        url: `${DOMAIN_FILE}${props.url}`,
        httpHeaders: {
          Authorization: "Bearer " + localStorage.getItem(TOKEN),
        },
      }}
      onLoadSuccess={props.onDocumentLoadSuccess}
    >
      {Array.from(
        new Array(props.numPages),
        (numPage, index) => {
          console.log("numPage", index + 1)
          return (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          )
        }
          
      )}
    </Document>
    )
  }, [props.id, props.numPages])
}
