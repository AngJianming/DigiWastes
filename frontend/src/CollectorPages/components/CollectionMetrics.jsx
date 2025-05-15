import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const CollectionMetrics = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const pieData = [
    { name: 'Electronics', value: data.electronics || 0 },
    { name: 'Appliances', value: data.appliances || 0 },
    { name: 'Batteries', value: data.batteries || 0 },
    { name: 'Others', value: data.others || 0 },
  ];

  return (
    <Card className="my-3">
      <Card.Header>
        <h5 className="mb-0">Collection Metrics</h5>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={6}>
            <div className="d-flex flex-column align-items-center">
              <h6>Collection by Category</h6>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="monthly-stats">
              <h6>Monthly Statistics</h6>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Total Weight Collected:</span>
                    <strong>{data.totalWeight || 0} kg</strong>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Items Collected:</span>
                    <strong>{data.totalItems || 0}</strong>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Completion Rate:</span>
                    <strong>{data.completionRate || 0}%</strong>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Average Response Time:</span>
                    <strong>{data.avgResponseTime || 'N/A'}</strong>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CollectionMetrics;
