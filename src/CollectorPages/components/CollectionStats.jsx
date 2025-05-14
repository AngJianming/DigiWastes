import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaRecycle, FaBoxes, FaTruck, FaCheckCircle } from 'react-icons/fa';

const CollectionStats = ({ stats }) => {
  return (
    <Row className="g-3 my-2">
      <Col md={6} xl={3}>
        <Card className="p-3 bg-success bg-opacity-10">
          <div className="d-flex justify-content-between">
            <div>
              <h6 className="text-success">Total Collections</h6>
              <h3 className="fw-bold">{stats.totalCollections}</h3>
            </div>
            <div className="fs-1 text-success opacity-75">
              <FaRecycle />
            </div>
          </div>
        </Card>
      </Col>

      <Col md={6} xl={3}>
        <Card className="p-3 bg-primary bg-opacity-10">
          <div className="d-flex justify-content-between">
            <div>
              <h6 className="text-primary">Pending Pickups</h6>
              <h3 className="fw-bold">{stats.pendingCollections}</h3>
            </div>
            <div className="fs-1 text-primary opacity-75">
              <FaBoxes />
            </div>
          </div>
        </Card>
      </Col>

      <Col md={6} xl={3}>
        <Card className="p-3 bg-warning bg-opacity-10">
          <div className="d-flex justify-content-between">
            <div>
              <h6 className="text-warning">In Transit</h6>
              <h3 className="fw-bold">{stats.inTransit}</h3>
            </div>
            <div className="fs-1 text-warning opacity-75">
              <FaTruck />
            </div>
          </div>
        </Card>
      </Col>

      <Col md={6} xl={3}>
        <Card className="p-3 bg-info bg-opacity-10">
          <div className="d-flex justify-content-between">
            <div>
              <h6 className="text-info">Completed</h6>
              <h3 className="fw-bold">{stats.completedCollections}</h3>
            </div>
            <div className="fs-1 text-info opacity-75">
              <FaCheckCircle />
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default CollectionStats;
