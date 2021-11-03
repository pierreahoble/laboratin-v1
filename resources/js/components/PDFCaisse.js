import React from 'react'
import Pdf from 'react-to-pdf'

const ref = React.createRef()

const PDFCaisse = () => {
    return (
        <>

            <div className="pdfcaisse" ref={ref}>
                <h1>IMPRESSION</h1>

            </div>
            <Pdf targetRef={ref} fileane="recupatient.pdf">
                {({ toPdf }) => <button onClick={toPdf} className="btn btn-primary">IMPRESSION</button>}
            </Pdf>
        </>
    )
}

export default PDFCaisse
