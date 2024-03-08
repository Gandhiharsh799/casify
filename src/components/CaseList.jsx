import "../index.css";
import { useSelector } from "react-redux";

export default function CaseList() {

  const cases = useSelector((state) => state.cases.cases)
  return (
    <div>
      <table className="table" cellPadding={12} align="center">
        <tr className="head ps-6 text-center">
          <th>Case no.</th>
          <th>Case Name</th>
          <th>Case Category</th>
          <th>Case Stage</th>
          <th>City Name</th>
          <th>Issue Date</th>
          <th>Client Name</th>
          <th>Lawyer Name</th>
          <th>Status</th>
        </tr>

        {cases.map((caseItem, index) => (
          <tr key={index} className="text-center border-top list">
            <td>{caseItem.caseNo}</td>
            <td>{caseItem.caseName}</td>
            <td>{caseItem.caseCategory}</td>
            <td>{caseItem.court}</td>
            <td>{caseItem.cityName}</td>
            <td>{caseItem.date}</td>
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
