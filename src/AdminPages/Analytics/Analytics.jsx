import React, {Fragment} from 'react';
import {FaArrowRight} from "react-icons/fa";
import {CiWarning} from "react-icons/ci";

import vactor from '../../assets/images/icon/user-illustarator-2.png'
import {FaPeopleGroup} from "react-icons/fa6";
import map from '../../assets/images/icon/download.png'
import {Button, ButtonGroup, Card, Col, Row,Table} from "react-bootstrap";
import {Bar, BarChart, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const Analytics = () => {


    const data = [
        { country: "India", sessions: 1010 },
        { country: "United States", sessions: 1640 },
        { country: "China", sessions: 490 },
        { country: "Indonesia", sessions: 1255 },
        { country: "Russia", sessions: 1050 },
        { country: "Bangladesh", sessions: 689 },
        { country: "Canada", sessions: 800 },
        { country: "Brazil", sessions: 420 },
        { country: "Vietnam", sessions: 1085 },
        { country: "UK", sessions: 589 },
    ];

    const highlightCountry = "Russia";
    const dataMonth = [
        { name: 'Jan', lastYear: 30, currentYear: 60 },
        { name: 'Feb', lastYear: 20, currentYear: 35 },
        { name: 'Mar', lastYear: 45, currentYear: 50 },
        { name: 'Apr', lastYear: 40, currentYear: 65 },
        { name: 'May', lastYear: 40.4, currentYear: 85 },
        { name: 'Jun', lastYear: 35, currentYear: 70 },
        { name: 'Jul', lastYear: 38, currentYear: 60 },
        { name: 'Aug', lastYear: 25, currentYear: 30 },
        { name: 'Sep', lastYear: 28, currentYear: 50 },
        { name: 'Oct', lastYear: 36, currentYear: 75 },
        { name: 'Nov', lastYear: 33, currentYear: 68 },
        { name: 'Dec', lastYear: 30, currentYear: 64 },
    ];
    const dataDevice = [
        { name: 'Desktop Users', value: 78560},
        { name: 'Mobile Users', value: 105020 },
        { name: 'Tablet Users', value: 42890 },
    ];
    const trafficData = [
        { website: "www.google.com", percentage: "24.58%" },
        { website: "www.youtube.com", percentage: "17.51%" },
        { website: "www.meta.com", percentage: "23.05%" },
        { website: "www.medium.com", percentage: "12.22%" },
        { website: "Other", percentage: "17.58%" },
    ];
const pageData = [
    { "name": "/themesbrand/skote-25867", "count": 99, "percentage": "25.3%" },
    { "name": "/dashonic/chat-24518", "count": 86, "percentage": "22.7%" },
    { "name": "/skote/timeline-27391", "count": 64, "percentage": "18.7%" },
    { "name": "/themesbrand/minia-26441", "count": 53, "percentage": "14.2%" },
    { "name": "/dashon/dashboard-29873", "count": 33, "percentage": "12.6%" },
    { "name": "/doot/chats-29964", "count": 20, "percentage": "10.9%" },
    { "name": "/minton/pages-29739", "count": 10, "percentage": "7.3%" },
    { "name": "/dashonic/chat-24518", "count": 86, "percentage": "22.7%" },
    { "name": "/skote/timeline-27391", "count": 64, "percentage": "18.7%" },
    { "name": "/themesbrand/minia-26441", "count": 53, "percentage": "14.2%" },
    { "name": "/dashon/dashboard-29873", "count": 33, "percentage": "12.6%" },
]
    // Color palette for the chart
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
    return (
        <Fragment>
            <div className='container'>
                <div className='row '>
                    <div className='col-12 d-flex justify-content-between align-items-center '>
                        <h2 className='h6'>Analytics</h2>
                        <div className='mb-0 d-flex justify-content-between align-items-center gap-2'>
                            <h2 className='h6'>Home</h2>
                            <FaArrowRight className='h6'/>
                            <h2 className='h6'>Analytics</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-4'>
                        <div className='card '>
                            <div
                                className='card-header bg-danger-subtle d-flex justify-content-between align-items-center'>
                                <div className=' d-flex align-items-center gap-2'>
                                    <CiWarning className='h6'/>
                                    <p className='h6'>Your free trial expired in 17 days.</p>
                                </div>
                                <div className=''>
                                    <button className='btn'>
                                        Upgrade
                                    </button>
                                </div>
                            </div>
                            <div className='card-body d-flex justify-content-between align-items-end'>
                                <div className=''>
                                    <h2 className='h6'>Upgrade your plan from a Free trial, to 'Premium
                                        Plan' <FaArrowRight/></h2>
                                    <button className='btn btn-success mt-3'>
                                        Upgrade your account
                                    </button>
                                </div>
                                <img
                                    src={vactor}
                                    className='img-fluid w-25'
                                    alt=''
                                />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between gap-3 mt-3'>
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p className="fw-medium text-muted mb-0">Users</p>
                                            <h2 className="mt-4 ff-secondary fw-semibold"><span
                                                className="counter-value"
                                                data-target="28.05">28.05</span>k
                                            </h2>
                                            <p className="mb-0 text-muted"><span
                                                className="badge bg-light text-success mb-0"> <i
                                                className="ri-arrow-up-line align-middle"></i> 16.24 % </span> vs.
                                                previous
                                                month</p>
                                        </div>
                                        <div>
                                            <div
                                                className="avatar-sm flex-shrink-0  d-flex justify-content-center align-items-center rounded"
                                                style={{background: '#CFF4FC'}}>
                                                <FaPeopleGroup className='h6 mb-0' style={{color: '#0DCAF0'}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p className="fw-medium text-muted mb-0">Users</p>
                                            <h2 className="mt-4 ff-secondary fw-semibold"><span
                                                className="counter-value"
                                                data-target="28.05">28.05</span>k
                                            </h2>
                                            <p className="mb-0 text-muted"><span
                                                className="badge bg-light text-success mb-0"> <i
                                                className="ri-arrow-up-line align-middle"></i> 16.24 % </span> vs.
                                                previous
                                                month</p>
                                        </div>
                                        <div>
                                            <div
                                                className="avatar-sm flex-shrink-0  d-flex justify-content-center align-items-center rounded"
                                                style={{background: '#CFF4FC'}}>
                                                <FaPeopleGroup className='h6 mb-0' style={{color: '#0DCAF0'}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between gap-3 mt-3'>
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p className="fw-medium text-muted mb-0">Users</p>
                                            <h2 className="mt-4 ff-secondary fw-semibold"><span
                                                className="counter-value"
                                                data-target="28.05">28.05</span>k
                                            </h2>
                                            <p className="mb-0 text-muted"><span
                                                className="badge bg-light text-success mb-0"> <i
                                                className="ri-arrow-up-line align-middle"></i> 16.24 % </span> vs.
                                                previous
                                                month</p>
                                        </div>
                                        <div>
                                            <div
                                                className="avatar-sm flex-shrink-0  d-flex justify-content-center align-items-center rounded"
                                                style={{background: '#CFF4FC'}}>
                                                <FaPeopleGroup className='h6 mb-0' style={{color: '#0DCAF0'}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p className="fw-medium text-muted mb-0">Users</p>
                                            <h2 className="mt-4 ff-secondary fw-semibold"><span
                                                className="counter-value"
                                                data-target="28.05">28.05</span>k
                                            </h2>
                                            <p className="mb-0 text-muted"><span
                                                className="badge bg-light text-success mb-0"> <i
                                                className="ri-arrow-up-line align-middle"></i> 16.24 % </span> vs.
                                                previous
                                                month</p>
                                        </div>
                                        <div>
                                            <div
                                                className="avatar-sm flex-shrink-0  d-flex justify-content-center align-items-center rounded"
                                                style={{background: '#CFF4FC'}}>
                                                <FaPeopleGroup className='h6 mb-0' style={{color: '#0DCAF0'}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4'>
                        <div className='card h-100 d-flex flex-column'>
                            <div className='card-header bg-white'>
                                <div className='d-flex justify-content-between align-items-center rounded'>
                                    <h2 className='h6 mb-0'>Live Users By Country</h2>
                                    <button className='btn btn-warning btn-sm'>Export</button>
                                </div>
                            </div>

                            <div className='card-body p-0 d-flex flex-column flex-grow-1'>
                                {/* Map Image at the top */}
                                <div className='p-3'>
                                    <img src={map} className='img-fluid w-100' alt='World Map'/>
                                </div>

                                {/* Table at the bottom */}
                                <div className='mt-auto'>
                                    <div className="table-responsive table-card px-3 pb-3">
                                        <table
                                            className="table table-borderless table-sm table-centered align-middle table-nowrap mb-1">
                                            <thead
                                                className="text-muted border-dashed border border-start-0 border-end-0 bg-light-subtle">
                                            <tr>
                                                <th>Duration (Secs)</th>
                                                <th style={{width: '30%'}}>Sessions</th>
                                                <th style={{width: '30%'}}>Views</th>
                                            </tr>
                                            </thead>
                                            <tbody className="border-0">
                                            <tr>
                                                <td>0-30</td>
                                                <td>2,250</td>
                                                <td>4,250</td>
                                            </tr>
                                            <tr>
                                                <td>31-60</td>
                                                <td>1,501</td>
                                                <td>2,050</td>
                                            </tr>
                                            <tr>
                                                <td>61-120</td>
                                                <td>750</td>
                                                <td>1,600</td>
                                            </tr>
                                            <tr>
                                                <td>121-240</td>
                                                <td>540</td>
                                                <td>1,040</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-4'>
                        <Card className="p-3 h-100">
                            <div className='card-header bg-white d-flex justify-content-between align-items-center'>
                                <h5 className='h6'>Sessions by Countries</h5>

                                <div className="mb-3 d-flex gap-2">
                                    <Button variant="outline-primary" active>ALL</Button>
                                    <Button variant="outline-secondary">1M</Button>
                                    <Button variant="outline-secondary">6M</Button>
                                </div>

                            </div>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart layout="vertical" data={data} margin={{left: 30}}>
                                    <XAxis type="number"/>
                                    <YAxis type="category" dataKey="country" width={100}/>
                                    <Tooltip/>
                                    <Bar dataKey="sessions" barSize={20}>
                                        {data.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.country === highlightCountry ? "#fa7268" : "#40a3f4"}
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Card>
                    </div>
                </div>
            </div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-sm-12'>
                        <Card className="p-3">
                            <h5 className='h6'>Audiences Metrics</h5>

                            {/* Top Stats */}
                            <Row className="text-center py-3 border-bottom">
                                <Col>
                                    <h5>854 <span className="text-success" style={{ fontSize: '0.8rem' }}>49% ↑</span></h5>
                                    <div className="text-muted">Avg. Session</div>
                                </Col>
                                <Col>
                                    <h5>1,278 <span className="text-success" style={{ fontSize: '0.8rem' }}>60% ↑</span></h5>
                                    <div className="text-muted">Conversion Rate</div>
                                </Col>
                                <Col>
                                    <h5>3m 40sec <span className="text-success" style={{ fontSize: '0.8rem' }}>37% ↑</span></h5>
                                    <div className="text-muted">Avg. Session Duration</div>
                                </Col>
                            </Row>

                            {/* Filter Buttons */}
                            <div className="d-flex justify-content-end my-2">
                                <ButtonGroup size="sm">
                                    <Button variant="outline-primary" active>ALL</Button>
                                    <Button variant="outline-secondary">1M</Button>
                                    <Button variant="outline-secondary">6M</Button>
                                    <Button variant="outline-secondary">1Y</Button>
                                </ButtonGroup>
                            </div>

                            {/* Chart */}
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={dataMonth} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend verticalAlign="top" />
                                    <Bar dataKey="lastYear" fill="#00b894" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="currentYear" fill="#FA7268" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </Card>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6'>
                        <div className='h-100 card shadow-lg'>
                            <div className='card-header bg-white'>
                                <h2 className='h6'>Users by Device
                                </h2>
                            </div>
                            <div className='card-body p-2'>
                                <ResponsiveContainer>
                                    <PieChart>
                                        <Pie
                                            data={dataDevice}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={2}
                                            dataKey="value"
                                            label={({name, value}) => `${name}: ${(value * 100).toFixed(1)}%`}
                                        >
                                            {dataDevice.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value) => [`${value}%`, 'value']}/>
                                        <Legend
                                            layout="horizontal"
                                            verticalAlign="bottom"
                                            align="center"
                                            wrapperStyle={{paddingTop: '20px'}}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6'>
                        <div className='card shadow-lg'>
                            <div className='card-header d-flex justify-content-between align-items-center'>
                                <h2 className='h6'>Top Referrals Pages</h2>
                                <button className='btn btn-success'>Export Reports</button>
                            </div>
                            <div className='card-body d-flex align-items-center justify-content-between'>
                                <div>
                                    <h2 className='h6'>Total Referrals Page</h2>
                                    <span className='text-success'>725,800</span>
                                    <h2 className='h6'>15.72 % vs. previous month</h2>
                                </div>

                                    <img src={vactor} className='img-fluid w-25'/>
                            </div>
                            <div className=''>
                                <div className="p-3">
                                    <h3 className="mb-3 fs-6">Website Traffic Distribution</h3>
                                    <Table striped bordered hover responsive>
                                        <thead>
                                        <tr>
                                            <th>Website</th>
                                            <th>Percentage</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {trafficData.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.website}</td>
                                                <td>{row.percentage}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6'>
                        <div className='card shadow-lg h-100'>
                            <div className='card-header d-flex justify-content-between align-items-center bg-white'>
                                <h2 className='h6'>Top Referrals Pages</h2>
                                <button className='btn btn-success'>Export Reports</button>
                            </div>
                            <div className='card-body p-0'> {/* Remove padding from card-body */}
                                <div className='table-responsive' style={{maxHeight: '400px', overflowY: 'auto'}}>
                                    <Table striped bordered hover className='mb-0'> {/* Remove margin-bottom */}
                                        <thead style={{position: 'sticky', top: 0, background: 'white', zIndex: 1}}>
                                        <tr>
                                            <th>Active Page</th>
                                            <th>Active</th>
                                            <th>Users</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {pageData.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.name}</td>
                                                <td>{row.percentage}</td>
                                                <td>{row.count}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 bg-white shadow-lg">
                        <div className="d-flex justify-content-between align-items-center py-3">
                            <p>2025 © VigTeach.</p>
                            <p>Design & Develop by Saharul Sifat</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
        ;
};

export default Analytics;