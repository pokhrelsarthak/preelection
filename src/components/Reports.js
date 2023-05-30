import React from "react";
import { Link } from 'react-router-dom';
const Reports = () => {

    return(
        <>
        <Link to="/home">
            <button className="btn btn-secondary mx-2">
                Back
            </button>
        </Link>
        <center>
         <h2>Reports</h2>
         <div >
            <Link to="/table1">
            <button className="btn btn-dark" style={{ width: '50%', whiteSpace: 'normal', background: 'pink', color: 'black' }}>
            Top-5 Candidates won with the highest margin in their Constituency
            </button>
            </ Link>
            <br/>
            <br/>
            <Link to="/table2">
            <button className="btn btn-dark" style={{ width: '50%', whiteSpace: 'normal', backgroundColor: 'pink',color: 'black' }}>
            Top-5 Candidates with highest votes
            </button>
            </Link>
            <br/>
            <br />
            <Link to="/table3">
            <button className="btn btn-dark" style={{ width: '50%', whiteSpace: 'normal' ,backgroundColor: 'pink',color: 'black'}}>
                Candidates contesting in more than one constituency
            </button>
            </Link>
            <br/>
            <br/>
            <Link to="/table4">
            <button className="btn btn-dark" style={{ width: '50%', whiteSpace: 'normal',backgroundColor: 'pink',color: 'black' }}>
                Top-5 Constituencies with highest NOTA votes
            </button>
            </Link>
            <br/>
            <br/>
            <Link to="/table5">
            <button className="btn btn-dark" style={{ width: '50%', whiteSpace: 'normal' ,background: 'pink',color: 'black'}}>
                Constituency won with margin Ranges
            </button>
            </Link>
         </div>
        </center>
        </>
    )
}
export default Reports;

// import React, { useState } from "react";
// import { Link } from 'react-router-dom';

// const Reports = () => {
//   const [jsonData, setJsonData] = useState(null); // State to store the JSON data

//   const tableStyle = {
//     borderCollapse: 'collapse',
//     width: '100%',
//   };
  
//   const tableHeaderStyle = {
//     border: '1px solid black',
//     padding: '8px',
//     backgroundColor: '#f2f2f2',
//     textAlign: 'center',
//   };
  
//   const tableCellStyle = {
//     border: '1px solid black',
//     padding: '8px',
//     textAlign: 'center',
//   };
  
//   // ...
  
//   <table style={tableStyle}>
//     <thead>
//       <tr>
//         <th style={tableHeaderStyle}>Sno</th>
//         <th style={tableHeaderStyle}>Candidate Name</th>
//         <th style={tableHeaderStyle}>Party Name</th>
//         <th style={tableHeaderStyle}>EVM Votes</th>
//         <th style={tableHeaderStyle}>Postal Votes</th>
//         <th style={tableHeaderStyle}>Total Votes</th>
//         <th style={tableHeaderStyle}>Percentage of Votes</th>
//         <th style={tableHeaderStyle}>Constituency Name</th>
//         <th style={tableHeaderStyle}>Constituency Key</th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* Iterate over the JSON data and generate table rows */}
//       {jsonData.map((data) => (
//         <tr key={data.sno}>
//           <td style={tableCellStyle}>{data.sno}</td>
//           <td style={tableCellStyle}>{data.cname}</td>
//           <td style={tableCellStyle}>{data.pname}</td>
//           <td style={tableCellStyle}>{data.evmvotes}</td>
//           <td style={tableCellStyle}>{data.postalvotes}</td>
//           <td style={tableCellStyle}>{data.totvotes}</td>
//           <td style={tableCellStyle}>{data.percentofvotes}</td>
//           <td style={tableCellStyle}>{data.constname}</td>
//           <td style={tableCellStyle}>{data.constkey}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
  
  

//   const fetchJsonData = () => {
//     // Simulating an API call to fetch the JSON data
//     const data = [
//       {
//         "sno": 2203,
//         "cname": "M KRISHNAPPA",
//         "pname": "Bharatiya Janata Party",
//         "evmvotes": 195564,
//         "postalvotes": 656,
//         "totvotes": 196220,
//         "percentofvotes": 51.35,
//         "constname": "Bangalore South",
//         "constkey": 176
//       },
//       {
//         "sno": 2173,
//         "cname": "MANJULA S",
//         "pname": "Bharatiya Janata Party",
//         "evmvotes": 181268,
//         "postalvotes": 463,
//         "totvotes": 181731,
//         "percentofvotes": 54.31,
//         "constname": "Mahadevapura",
//         "constkey": 174
//       },
//       {
//         "sno": 1867,
//         "cname": "S.T.SOMASHEKAR",
//         "pname": "Bharatiya Janata Party",
//         "evmvotes": 168485,
//         "postalvotes": 664,
//         "totvotes": 169149,
//         "percentofvotes": 47.26,
//         "constname": "Yeshvanthapura",
//         "constkey": 153
//       },
//       {
//         "sno": 1845,
//         "cname": "KRISHNA BYREGOWDA",
//         "pname": "Indian National Congress",
//         "evmvotes": 159781,
//         "postalvotes": 401,
//         "totvotes": 160182,
//         "percentofvotes": 54.43,
//         "constname": "Byatarayanapura",
//         "constkey": 152
//       },
//       {
//         "sno": 1864,
//         "cname": "T.N.JAVARAYI GOWDA",
//         "pname": "Janata Dal  (Secular)",
//         "evmvotes": 153557,
//         "postalvotes": 474,
//         "totvotes": 154031,
//         "percentofvotes": 43.04,
//         "constname": "Yeshvanthapura",
//         "constkey": 153
//       }
//     ];

//     setJsonData(data); // Update the state with the fetched JSON data
//   };

//   return (
//     <>
//       <Link to="/home">
//         <button className="btn btn-success mx-2">Back</button>
//       </Link>
//       <center>
//         <h2>Reports</h2>
//         <div>
//           <button
//             className="btn btn-dark"
//             style={{
//               width: '50%',
//               whiteSpace: 'nowrap',
//               background: 'pink',
//               color: 'black'
//             }}
//             onClick={fetchJsonData} // Call fetchJsonData when the button is clicked
//           >
//             Top-5 Candidates with highest votes
//           </button>

//           <br />
//           <br />

//           {jsonData && ( // Show the table when jsonData is not null
          
          
//           // ...
          
//           <table style={tableStyle}>
//             <thead>
//               <tr>
//                 <th style={tableHeaderStyle}>Sno</th>
//                 <th style={tableHeaderStyle}>Candidate Name</th>
//                 <th style={tableHeaderStyle}>Party Name</th>
//                 <th style={tableHeaderStyle}>EVM Votes</th>
//                 <th style={tableHeaderStyle}>Postal Votes</th>
//                 <th style={tableHeaderStyle}>Total Votes</th>
//                 <th style={tableHeaderStyle}>Percentage of Votes</th>
//                 <th style={tableHeaderStyle}>Constituency Name</th>
//                 <th style={tableHeaderStyle}>Constituency Key</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Iterate over the JSON data and generate table rows */}
//               {jsonData.map((data) => (
//                 <tr key={data.sno}>
//                   <td style={tableCellStyle}>{data.sno}</td>
//                   <td style={tableCellStyle}>{data.cname}</td>
//                   <td style={tableCellStyle}>{data.pname}</td>
//                   <td style={tableCellStyle}>{data.evmvotes}</td>
//                   <td style={tableCellStyle}>{data.postalvotes}</td>
//                   <td style={tableCellStyle}>{data.totvotes}</td>
//                   <td style={tableCellStyle}>{data.percentofvotes}</td>
//                   <td style={tableCellStyle}>{data.constname}</td>
//                   <td style={tableCellStyle}>{data.constkey}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
          
//             // <table>
//             //   <thead>
//             //     <tr>
//             //       <th>Sno</th>
//             //       <th>Candidate Name</th>
//             //       <th>Party Name</th>
//             //       <th>EVM Votes</th>
//             //       <th>Postal Votes</th>
//             //       <th>Total Votes</th>
//             //       <th>Percentage of Votes</th>
//             //       <th>Constituency Name</th>
//             //       <th>Constituency Key</th>
//             //     </tr>
//             //   </thead>
//             //   <tbody>
//             //     {/* Iterate over the JSON data and generate table rows */}
//             //     {jsonData.map((data) => (
//             //       <tr key={data.sno}>
//             //         <td>{data.sno}</td>
//             //         <td>{data.cname}</td>
//             //         <td>{data.pname}</td>
//             //         <td>{data.evmvotes}</td>
//             //         <td>{data.postalvotes}</td>
//             //         <td>{data.totvotes}</td>
//             //         <td>{data.percentofvotes}</td>
//             //         <td>{data.constname}</td>
//             //         <td>{data.constkey}</td>
//             //       </tr>
//             //     ))}
//             //   </tbody>
//             // </table>
//           )}

//         </div>
//       </center>
//     </>
//   );
// };

// export default Reports;
