import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const { id } = useParams();
  const services = useSelector((state) => state.services.services);

  const service = services.find((service) => service.id === id); // Assuming each service has a unique id

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <h2>Service Details</h2>
      <div>
        <p>Service Name: {service.serviceName}</p>
        <p>Service Type: {service.serviceType}</p>
        <p>Start Date: {service.startDate}</p>
        <p>End Date: {service.endDate}</p>
        <p>Status: {service.status}</p>
        <p>Clients: {service.clients}</p>
        <p>Lawyers: {service.lawyers}</p>
      </div>
    </div>
  );
}
