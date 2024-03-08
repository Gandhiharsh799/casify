import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function ServiceList() {
  const services = useSelector((state) => state.services.services);

  
  return (
    <div>
      <table className="table" cellPadding={12} align="center">
        <tr className="head ps-6 text-center">
          <th>Service Name</th>
          <th>Service Type</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Status</th>
          <th>Clients</th>
          <th>Lawyers</th>
          <th>Id</th>
        </tr>
        {services.map((serviceItem, index) => (
          <>
            <Link to={`/report/services/${serviceItem.id}`}>
              <tr key={index} className="text-center border-top list">
                <td>{serviceItem.serviceName}</td>
                <td>{serviceItem.serviceType}</td>
                <td>{serviceItem.startDate}</td>
                <td>{serviceItem.endDate}</td>
                <td>{serviceItem.status}</td>
                <td>{serviceItem.clients}</td>
                <td>{serviceItem.lawyers}</td>
                <td>{serviceItem.id}</td>
              </tr>
            </Link>
          </>
        ))}
      </table>
    </div>
  );
}
