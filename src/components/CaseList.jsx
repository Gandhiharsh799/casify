import "../index.css";
const dummyCases = [
  {
    caseNo: 1,
    caseName: "Case 2",
    caseCategory: "Theft",
    caseStage: "Appeal",
    cityName: "Gandhinagar",
    issueDate: "2024-03-05",
    clientName: "Client 1",
    lawyerName: "Lawyer 1",
    status: "Pending",
  },
  {
    caseNo: 1,
    caseName: "Case 2",
    caseCategory: "Theft",
    caseStage: "Appeal",
    cityName: "Gandhinagar",
    issueDate: "2024-03-06",
    clientName: "Client 2",
    lawyerName: "Lawyer 2",
    status: "Open",
  },
  {
    caseNo: 1,
    caseName: "Case 2",
    caseCategory: "Theft",
    caseStage: "Appeal",
    cityName: "Gandhinagar",
    issueDate: "2024-03-06",
    clientName: "Client 2",
    lawyerName: "Lawyer 2",
    status: "Open",
  },
  
  // Add more dummy cases as needed
];

export default function CaseList() {
  return (
    // <ul>
    //   {dummyCases.map((caseItem, index) => (
    //     <>

    //         <li
    //           key={index}
    //           className="d-flex flex-row justify-content-around pt-2"
    //         >
    //           <p>{caseItem.caseNo}</p>
    //           <p>{caseItem.caseName}</p>
    //           <p className="justify-content-center">{caseItem.caseCategory}</p>
    //           <p>{caseItem.caseStage}</p>
    //           <p>{caseItem.cityName}</p>
    //           <p>{caseItem.issueDate}</p>
    //           <p>{caseItem.clientName}</p>
    //           <p>{caseItem.lawyerName}</p>
    //           <p>{caseItem.status}</p>
    //         </li>

    //     </>
    //   ))}
    // </ul>

    <div className="mt-2">
      <table className="table" cellPadding={12} align="center">
        
          <tr className="head ps-6 text-center">
            <th >Case no.</th>
            <th>Case Name</th>
            <th>Case Category</th>
            <th>Case Stage</th>
            <th>City Name</th>
            <th>Issue Date</th>
            <th>Client Name</th>
            <th>Lawyer Name</th>
            <th>Status</th>
          </tr>
       
        
          {dummyCases.map((caseItem, index) => (
            <tr key={index} className="text-center border-top list">
              <td>{caseItem.caseNo}</td>
              <td>{caseItem.caseName}</td>
              <td>{caseItem.caseCategory}</td>
              <td>{caseItem.caseStage}</td>
              <td>{caseItem.cityName}</td>
              <td>{caseItem.issueDate}</td>
              <td>{caseItem.clientName}</td>
              <td>{caseItem.lawyerName}</td>
              <td>{caseItem.status}</td>
            </tr>
            
          ))}
      
      </table>
      <div className="w-100 h-100"></div>
    </div>
  );
}
