import React, { useState, useRef , useEffect } from "react";
import "./main.css";

import Papa from "papaparse";

const MainPage = () => {
  const [csvData, setCsvData] = useState([]);
  const fileInputRef = useRef(null);
  const handleFileUpload = (file) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setCsvData(results.data);
        localStorage.setItem('csvData', JSON.stringify(results.data));
      },
    });
  };

  const handleDownload = () => {
    const csvContent = Papa.unparse(csvData);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const storedData = localStorage.getItem('csvData');
    if (storedData) {
      setCsvData(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <div className="main_container">
        <div className="main_container_nav">
          <div className="main_container_nav_heading">
            <h2>Students</h2>

            <div className="buttons">
              <div className="csv-input-container">
               
              <button onClick={() => fileInputRef.current.click()}>Import Students</button>
              <input
                type="file"
                ref={fileInputRef}
                hidden
                onChange={(e) => handleFileUpload(e.target.files[0])}
              />  
              </div>

              <div className="export">
                <button onClick={handleDownload}>Export CSV</button>
              </div>
            </div>
          </div>

          <table className="csv-table">
            <thead>
              <tr>
                {csvData[0] &&
                  Object.keys(csvData[0]).map((header) => (
                    <th key={header}>{header}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {csvData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((cell, index) => (
                    <td key={index}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MainPage;
