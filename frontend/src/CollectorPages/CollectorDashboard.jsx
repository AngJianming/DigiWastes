import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import { Loading, Wrapper } from '../Components';
import api from '../utils/api';
import CollectionStats from './components/CollectionStats';
import CollectionTrends from './components/CollectionTrends';
import RecentCollections from './components/RecentCollections';
import CollectionMetrics from './components/CollectionMetrics';

const CollectorDashboard = () => {
  const { User } = useContext(Context);
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    totalCollections: 0,
    pendingCollections: 0,
    inTransit: 0,
    completedCollections: 0
  });

  useEffect(() => {
    if (!User || User.role !== 'collector') {
      navigate('/');
      return;
    }
    fetchCollections();
  }, [User, navigate]);

  const fetchCollections = async () => {
    try {
      setLoading(true);
      const response = await api.get('/ewaste/collector/collections');
      setCollections(response.data);
      calculateStats(response.data);
    } catch (error) {
      console.error('Error fetching collections:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (data) => {
    const stats = {
      totalCollections: data.length,
      pendingCollections: data.filter(c => c.status === 'pending').length,
      inTransit: data.filter(c => c.status === 'in-transit').length,
      completedCollections: data.filter(c => c.status === 'completed').length
    };
    setStats(stats);
  };

  const markAsCollected = async (id) => {
    try {
      setLoading(true);
      await api.put(`/ewaste/collections/${id}`, { status: 'completed' });
      fetchCollections();
    } catch (error) {
      console.error('Error updating collection:', error);
    }
  };

  if (loading) return <Loading />;

  const trendData = [
    { date: '2025-05-08', collections: 12 },
    { date: '2025-05-09', collections: 19 },
    { date: '2025-05-10', collections: 15 },
    { date: '2025-05-11', collections: 25 },
    { date: '2025-05-12', collections: 22 },
    { date: '2025-05-13', collections: 30 },
    { date: '2025-05-14', collections: 28 },
  ];

  return (
    <Wrapper>
      <Container fluid className="py-4">
        <h2 className="mb-4">Collector Dashboard</h2>
        
        {/* Stats Cards */}
        <CollectionStats stats={stats} />
            <Row>
        {/* Collection Trends Chart */}
        <Col lg={8}>
          <CollectionTrends data={trendData} />
        </Col>
        
        {/* Collection Metrics */}
        <Col lg={4}>
          <CollectionMetrics data={{
            electronics: 25,
            appliances: 15,
            batteries: 10,
            others: 5,
            totalWeight: 1250,
            totalItems: 55,
            completionRate: 92,
            avgResponseTime: '2.5 hours'
          }} />
        </Col>

        {/* Recent Collections Table */}
        <Col lg={12}>
          <RecentCollections collections={collections} />
        </Col>
      </Row>
      </Container>
    </Wrapper>
  );
};

export default CollectorDashboard;