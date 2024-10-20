import React from "react";

const downloadPdf = (url) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = "Bilal-EZZAIM CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DownloadPDFButton = () => {
  const handleDownload = () => {
    downloadPdf("./Bilal-EZZAIM CV.pdf");
  };

  return (
    
    <button  className='down' onClick={handleDownload}>
         Download CV
     
    </button>
  );
};

export default DownloadPDFButton;





