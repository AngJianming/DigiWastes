import React from 'react';
import { Card, Table, Badge } from 'react-bootstrap';

const RecentCollections = ({ collections }) => {
  const getStatusBadge = (status) => {
    const badges = {
      'pending': <Badge bg="warning">Pending</Badge>,
      'in-transit': <Badge bg="primary">In Transit</Badge>,
      'completed': <Badge bg="success">Completed</Badge>,
      'cancelled': <Badge bg="danger">Cancelled</Badge>
    };
    return badges[status] || <Badge bg="secondary">Unknown</Badge>;
  };

  return (
    <Card className="my-3">
      <Card.Header>
        <h5 className="mb-0">Recent Collections</h5>
      </Card.Header>
      <Card.Body className="p-0">
        <Table responsive hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Location</th>
              <th>Type</th>
              <th>Weight</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {collections.map((collection) => (
              <tr key={collection._id}>
                <td>{collection._id.slice(-6)}</td>
                <td>{new Date(collection.date).toLocaleDateString()}</td>
                <td>{collection.location}</td>
                <td>{collection.wasteType}</td>
                <td>{collection.weight} kg</td>
                <td>{getStatusBadge(collection.status)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default RecentCollections;
