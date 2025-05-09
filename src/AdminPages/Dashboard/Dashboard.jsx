import React, {Fragment, useEffect, useState} from 'react';
import {BsCalendar} from "react-icons/bs";
import {AiOutlinePlusCircle} from "react-icons/ai";
import {FiActivity} from "react-icons/fi";
import ReportsCard from "./reports-card";
import {FaArrowDown, FaArrowUp, FaDollarSign, FaShoppingBag, FaUsers, FaWallet} from "react-icons/fa";
import RevenueDashboard from "./RevenueDashboard";
import {Button, Card, ProgressBar} from "react-bootstrap";
import { Table, Pagination, Container, Row, Col, Image,Badge  } from 'react-bootstrap';

import map from '../../assets/images/map.png'
import image from '../../assets/images/product.jpg'
import seller1 from '../../assets/images/seller/img-1.png'
import seller2 from '../../assets/images/seller/img-2.png'
import seller3 from '../../assets/images/seller/img-3.png'
import seller4 from '../../assets/images/seller/img-5.png'
import seller5 from '../../assets/images/seller/img-8.png'
import StoreVisitsChart from "./StoreVisitsChart";
import OrdersTable from "./OrdersTable";



const Dashboard = () => {
    const [dateRange, setDateRange] = useState('01 Jan, 2025 to 31 Jan, 2025');
    const locations = [
        { name: 'Canada', percentage: 75, coordinates: { x: 20, y: 40 } },
        { name: 'Greenland', percentage: 47, coordinates: { x: 45, y: 25 } },
        { name: 'Russia', percentage: 82, coordinates: { x: 75, y: 30 } },
        { name: 'Palestine', percentage: 90, coordinates: { x: 60, y: 55 } }
    ];
    const products =[
        {
            "id": 1,
            "name": "Branded T-Shirts",
            "date": "24 Apr 2021",
            "price": "$29.00",
            "orders": 62,
            "stock": 510,
            "amount": "$1,798",
            "image": image
        },
        {
            "id": 2,
            "name": "Bentwood Chair",
            "date": "19 Mar 2021",
            "price": "$85.20",
            "orders": 35,
            "stock": 120,
            "amount": "$2,982",
            "image": image
        },
        {
            "id": 3,
            "name": "Borosil Paper Cup",
            "date": "01 Mar 2021",
            "price": "$14.00",
            "orders": 80,
            "stock": 740,
            "amount": "$1,120",
            "image": image
        },
        {
            "id": 4,
            "name": "One Seater Sofa",
            "date": "11 Feb 2021",
            "price": "$127.50",
            "orders": 56,
            "stock": 0,
            "amount": "$7,140",
            "image": image
        },
        {
            "id": 5,
            "name": "Stillbird Helmet",
            "date": "17 Jan 2021",
            "price": "$54.00",
            "orders": 74,
            "stock": 805,
            "amount": "$3,996",
            "image": image
        },
        {
            "id": 6,
            "name": "Wireless Earbuds",
            "date": "05 May 2021",
            "price": "$59.99",
            "orders": 92,
            "stock": 420,
            "amount": "$5,519",
            "image": image
        },
        {
            "id": 7,
            "name": "Leather Wallet",
            "date": "22 Apr 2021",
            "price": "$24.99",
            "orders": 45,
            "stock": 310,
            "amount": "$1,125",
            "image": image
        },
        {
            "id": 8,
            "name": "Smart Watch",
            "date": "14 Mar 2021",
            "price": "$199.00",
            "orders": 38,
            "stock": 150,
            "amount": "$7,562",
            "image": image
        },
        {
            "id": 9,
            "name": "Yoga Mat",
            "date": "08 Feb 2021",
            "price": "$29.95",
            "orders": 67,
            "stock": 280,
            "amount": "$2,007",
            "image": image
        },
        {
            "id": 10,
            "name": "Blender",
            "date": "30 Jan 2021",
            "price": "$49.99",
            "orders": 53,
            "stock": 190,
            "amount": "$2,649",
            "image": image
        },
        {
            "id": 11,
            "name": "Desk Lamp",
            "date": "12 May 2021",
            "price": "$34.50",
            "orders": 41,
            "stock": 230,
            "amount": "$1,415",
            "image": image
        },
        {
            "id": 12,
            "name": "Backpack",
            "date": "03 Apr 2021",
            "price": "$45.00",
            "orders": 78,
            "stock": 340,
            "amount": "$3,510",
            "image": image
        },
        {
            "id": 13,
            "name": "Water Bottle",
            "date": "27 Feb 2021",
            "price": "$19.99",
            "orders": 112,
            "stock": 560,
            "amount": "$2,239",
            "image": image
        },
        {
            "id": 14,
            "name": "Running Shoes",
            "date": "19 Jan 2021",
            "price": "$89.95",
            "orders": 63,
            "stock": 125,
            "amount": "$5,667",
            "image": image
        },
        {
            "id": 15,
            "name": "Sunglasses",
            "date": "07 May 2021",
            "price": "$39.99",
            "orders": 87,
            "stock": 290,
            "amount": "$3,479",
            "image": image
        },
        {
            "id": 16,
            "name": "Coffee Mug",
            "date": "25 Mar 2021",
            "price": "$12.50",
            "orders": 134,
            "stock": 680,
            "amount": "$1,675",
            "image": image
        },
        {
            "id": 17,
            "name": "Phone Case",
            "date": "13 Feb 2021",
            "price": "$15.99",
            "orders": 156,
            "stock": 720,
            "amount": "$2,494",
            "image": image
        },
        {
            "id": 18,
            "name": "Notebook",
            "date": "05 Jan 2021",
            "price": "$9.99",
            "orders": 203,
            "stock": 950,
            "amount": "$2,028",
            "image": image
        },
        {
            "id": 19,
            "name": "Headphones",
            "date": "20 May 2021",
            "price": "$79.99",
            "orders": 58,
            "stock": 180,
            "amount": "$4,639",
            "image": image
        },
        {
            "id": 20,
            "name": "Fitness Band",
            "date": "09 Apr 2021",
            "price": "$49.95",
            "orders": 72,
            "stock": 240,
            "amount": "$3,596",
            "image": image
        }
    ]
    const sellers = [
        {
            "id": 1,
            "company": "iTest Factory",
            "owner": "Oliver Tyler",
            "category": "Bags and Wallets",
            "stock": 8547,
            "revenue": "$541,200",
            "growth": 32,
            "trend": "up",
            "logo": seller1
        },
        {
            "id": 2,
            "company": "Fashion Hub",
            "owner": "Sophia Martinez",
            "category": "Clothing",
            "stock": 12500,
            "revenue": "$789,500",
            "growth": 45,
            "trend": "up",
            "logo": seller2
        },
        {
            "id": 3,
            "company": "TechGadgets",
            "owner": "James Wilson",
            "category": "Electronics",
            "stock": 6320,
            "revenue": "$1,250,000",
            "growth": 28,
            "trend": "up",
            "logo": seller3
        },
        {
            "id": 4,
            "company": "HomeDecor Plus",
            "owner": "Emma Johnson",
            "category": "Home Goods",
            "stock": 4580,
            "revenue": "$342,800",
            "growth": 12,
            "trend": "up",
            "logo": seller4
        },
        {
            "id": 5,
            "company": "BeautyEssentials",
            "owner": "Noah Smith",
            "category": "Cosmetics",
            "stock": 9250,
            "revenue": "$612,300",
            "growth": -5,
            "trend": "down",
            "logo": seller5
        },
        {
            "id": 6,
            "company": "SportsWorld",
            "owner": "Ava Brown",
            "category": "Sporting Goods",
            "stock": 7430,
            "revenue": "$487,600",
            "growth": 18,
            "trend": "up",
            "logo": seller1
        },
        {
            "id": 7,
            "company": "BookNook",
            "owner": "Liam Davis",
            "category": "Books",
            "stock": 11200,
            "revenue": "$321,900",
            "growth": 8,
            "trend": "up",
            "logo": seller2
        },
        {
            "id": 8,
            "company": "ToyLand",
            "owner": "Isabella Miller",
            "category": "Toys",
            "stock": 6850,
            "revenue": "$456,200",
            "growth": 22,
            "trend": "up",
            "logo": seller3
        },
        {
            "id": 9,
            "company": "Gourmet Foods",
            "owner": "Mason Taylor",
            "category": "Food Products",
            "stock": 5200,
            "revenue": "$389,700",
            "growth": -3,
            "trend": "down",
            "logo":seller4
        },
        {
            "id": 10,
            "company": "JewelCraft",
            "owner": "Charlotte Anderson",
            "category": "Jewelry",
            "stock": 3200,
            "revenue": "$1,025,000",
            "growth": 35,
            "trend": "up",
            "logo": seller5
        },
        {
            "id": 11,
            "company": "AutoParts Direct",
            "owner": "Benjamin Thomas",
            "category": "Automotive",
            "stock": 8750,
            "revenue": "$732,800",
            "growth": 15,
            "trend": "up",
            "logo":seller1
        },
        {
            "id": 12,
            "company": "PetParadise",
            "owner": "Amelia White",
            "category": "Pet Supplies",
            "stock": 10200,
            "revenue": "$567,300",
            "growth": 27,
            "trend": "up",
            "logo": seller2
        },
        {
            "id": 13,
            "company": "OfficePro",
            "owner": "Elijah Harris",
            "category": "Office Supplies",
            "stock": 7600,
            "revenue": "$423,100",
            "growth": 5,
            "trend": "up",
            "logo": seller3
        },
        {
            "id": 14,
            "company": "HealthPlus",
            "owner": "Mia Martin",
            "category": "Health Products",
            "stock": 6400,
            "revenue": "$587,400",
            "growth": 19,
            "trend": "up",
            "logo": seller4
        },
        {
            "id": 15,
            "company": "MusicHaven",
            "owner": "Lucas Thompson",
            "category": "Musical Instruments",
            "stock": 3800,
            "revenue": "$298,500",
            "growth": -8,
            "trend": "down",
            "logo": seller5
        },
        {
            "id": 16,
            "company": "GardenGrow",
            "owner": "Harper Garcia",
            "category": "Garden Supplies",
            "stock": 5400,
            "revenue": "$321,200",
            "growth": 11,
            "trend": "up",
            "logo":seller2
        },
        {
            "id": 17,
            "company": "Artisan Crafts",
            "owner": "Alexander Martinez",
            "category": "Handmade Goods",
            "stock": 2900,
            "revenue": "$412,800",
            "growth": 23,
            "trend": "up",
            "logo": seller1
        },
        {
            "id": 18,
            "company": "BabyBloom",
            "owner": "Evelyn Robinson",
            "category": "Baby Products",
            "stock": 7800,
            "revenue": "$654,100",
            "growth": 31,
            "trend": "up",
            "logo": seller3
        },
        {
            "id": 19,
            "company": "OutdoorGear",
            "owner": "William Clark",
            "category": "Outdoor Equipment",
            "stock": 6200,
            "revenue": "$543,900",
            "growth": 14,
            "trend": "up",
            "logo": seller4
        },
        {
            "id": 20,
            "company": "PhotoWorld",
            "owner": "Abigail Rodriguez",
            "category": "Photography",
            "stock": 4300,
            "revenue": "$387,600",
            "growth": -2,
            "trend": "down",
            "logo":seller5
        }
    ]

    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div
                        className='col-12 p-2 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center'>
                        {/* Greeting Section */}
                        <div className='mb-3 mb-md-0'>
                            <h2 className='fs-4 mb-1'>Good Morning, Anna!</h2>
                            <p className='mb-0'>Here's what's happening with your store today.</p>
                        </div>

                        {/* Controls Section */}
                        <div
                            className='d-flex flex-column flex-md-row align-items-end align-items-md-center gap-3 w-100 w-lg-auto'>
                            {/* Date Range Picker */}
                            <div className="w-100 w-md-auto">
                                <div className="d-flex" style={{maxWidth: '28rem', minWidth: '250px'}}>
                                    <button
                                        type="button"
                                        className="flex-grow-1 py-2 px-3 border border-secondary rounded-start bg-white text-start text-dark text-truncate"
                                    >
                                        {dateRange}
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-primary px-3 py-2 rounded-end d-flex align-items-center justify-content-center border-0"
                                    >
                                        <BsCalendar className="text-white" size={20}/>
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="d-flex gap-2 flex-wrap justify-content-end d-none d-md-block">
                                {/* Add Product Button - Shows full text on desktop, icon only on mobile */}
                                <button
                                    type="button"
                                    className="d-flex align-items-center gap-2 px-3 px-lg-4 py-2 rounded border-0"
                                    style={{
                                        backgroundColor: '#DDFCF8',
                                        color: '#00A5A5',
                                    }}
                                >
                                    <AiOutlinePlusCircle size={18}/>
                                    <span className="d-none d-lg-inline">Add Product</span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className="col-12 col-lg-3 col-sm-6 col-md-6  p-2">
                        <div className="card h-100">
                            <ReportsCard title="Total Earnings"
                                         value="$559.25k"
                                         percentage="+16.24%"
                                         linkText="View net earnings"
                                         icon={<FaDollarSign/>}
                                         bg="#DDFCF8"
                                         iconColor="#00A5A5"
                                         isPositive={true}/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-sm-6 col-md-6  p-2">
                        <div className="card h-100">
                            <ReportsCard title="Orders"
                                         value="36,894"
                                         percentage="-3.57%"
                                         linkText="View all orders"
                                         icon={<FaShoppingBag/>}
                                         bg="#D7EEFC"
                                         iconColor="#368AF5"
                                         isPositive={false}/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-sm-6 col-md-6  p-2">
                        <div className="card h-100">
                            <ReportsCard title="Customers"
                                         value="183.35M"
                                         percentage="+29.08%"
                                         linkText="See details"
                                         icon={<FaUsers/>}
                                         bg="#FFF2D9"
                                         iconColor="#FFB300"
                                         isPositive={true}/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-sm-6 col-md-6  p-2">
                        <div className="card h-100">
                            <ReportsCard title="My Balance"
                                         value="$165.89k"
                                         percentage="+0.00%"
                                         linkText="Withdraw money"
                                         icon={<FaWallet/>}
                                         bg="#E0E7F8"
                                         iconColor="#6366F1"
                                         isPositive={true}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-8 col-sm-6 col-md-12 p-2'>
                        <RevenueDashboard/>
                    </div>
                    <div className='col-12 col-lg-4 col-sm-6 col-md-12 p-2'>
                        <Card className="card-height-100">
                            <div className="d-flex justify-content-between align-items-center bg-white p-3">
                                <span className="card-title mb-0 flex-grow-1 h6 ">Sales by Locations</span>
                                <div className="flex-shrink-0">
                                    <button className="btn btn-primary rounded-pill px-3 py-1">ALL</button>
                                </div>
                            </div>

                            <Card.Body className="p-0">
                                <div className="position-relative">
                                    {/* World Map SVG */}
                                    <img src={map} className='w-100'/>
                                </div>

                                <div className="px-3 py-3 mt-1">
                                    {locations.map((location, index) => (
                                        <React.Fragment key={index}>
                                            <p className="mb-1">
                                                {location.name}
                                                <span
                                                    className="float-end">{location.percentage > 0 ? `${location.percentage}%` : 'N/A'}</span>
                                            </p>
                                            {location.percentage > 0 && (
                                                <ProgressBar
                                                    className="mt-2"
                                                    style={{height: '6px'}}
                                                    now={location.percentage}
                                                    variant="primary"
                                                    striped
                                                />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 col-sm-6 col-md-12  p-2">
                        <div className='card h-100'>
                            <div className="card-header align-items-center d-flex bg-white">
                                <h4 className="card-title mb-0 flex-grow-1 h6">Best Selling Products</h4>
                                <div className="flex-shrink-0">
                                    <div className="dropdown card-header-dropdown">
                                        <a className="text-reset dropdown-btn text-decoration-none " href="#"
                                           data-bs-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="true">
                                                            <span className="fw-semibold text-uppercase"
                                                                  style={{fontSize: '14px'}}>Sort by:
                                                            </span><span className="text-muted">Today<i
                                            className="mdi mdi-chevron-down ms-1"></i></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end"
                                             data-popper-placement="bottom-end"
                                             style={{
                                                 position: 'absolute',
                                                 inset: '0px 0px auto auto',
                                                 margin: '0px',
                                                 transform: 'translate3d(0px, 36.8px, 0px)'
                                             }}>
                                            <a className="dropdown-item" href="#">Today</a>
                                            <a className="dropdown-item" href="#">Yesterday</a>
                                            <a className="dropdown-item" href="#">Last 7 Days</a>
                                            <a className="dropdown-item" href="#">Last 30 Days</a>
                                            <a className="dropdown-item" href="#">This Month</a>
                                            <a className="dropdown-item" href="#">Last Month</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Card>
                                    <div>
                                        <div className="table-responsive table-card"
                                             style={{maxHeight: '400px', overflowY: 'auto'}}>
                                            <Table hover bordered className="table-centered align-middle mb-0">
                                                <tbody>
                                                {
                                                    products.map((item, i) => {
                                                        const isOutOfStock = item.stock === 0;

                                                        return (
                                                            <tr key={i}
                                                                className="border-1 border border-top border-bottom">
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-3">
                                                                        <div className="bg-light rounded" style={{
                                                                            width: '60px',
                                                                            height: '60px',
                                                                            overflow: 'hidden'
                                                                        }}>
                                                                            <Image
                                                                                src={item.image}
                                                                                alt="Product"
                                                                                className="img-fluid h-100 w-100 object-fit-cover"
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <h5 className="fs-6 mb-1">
                                                                                <a
                                                                                    href="apps-ecommerce-product-details.html"
                                                                                    className="text-reset text-decoration-none"
                                                                                >
                                                                                    {item.name}
                                                                                </a>
                                                                            </h5>
                                                                            <span
                                                                                className="text-muted small">{item.date}</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <h5 className="my-1 fw-normal"
                                                                        style={{fontSize: '14px'}}>{item.price}</h5>
                                                                    <span className="text-muted">Price</span>
                                                                </td>
                                                                <td className="text-center">
                                                                    <h5 className="my-1 fw-normal"
                                                                        style={{fontSize: '14px'}}>{item.orders}</h5>
                                                                    <span className="text-muted">Orders</span>
                                                                </td>
                                                                <td className="text-center">
                                                                    {isOutOfStock ? (
                                                                        <>
                                                                            <h5 className="my-1 fw-normal text-danger"
                                                                                style={{fontSize: '14px'}}>
                                                                                <Badge bg="danger">Out of Stock</Badge>
                                                                            </h5>
                                                                            <span className="text-muted">Stock</span>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <h5 className="my-1 fw-normal"
                                                                                style={{fontSize: '14px'}}>{item.stock}</h5>
                                                                            <span className="text-muted">Stock</span>
                                                                        </>
                                                                    )}
                                                                </td>
                                                                <td className="text-center">
                                                                    <h5 className="my-1 fw-normal"
                                                                        style={{fontSize: '14px'}}>{item.amount}</h5>
                                                                    <span className="text-muted">Amount</span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                </tbody>
                                            </Table>
                                        </div>

                                        <Container fluid className="my-4 pt-2">
                                            <Row
                                                className="align-items-center justify-content-between text-center text-sm-start">
                                                <Col sm>
                                                    <div className="text-muted">
                                                        Showing <span className="fw-semibold">5</span> of <span
                                                        className="fw-semibold">{products.length}</span> Results
                                                    </div>
                                                </Col>
                                                <Col sm="auto" className="mt-3 mt-sm-0">
                                                    <Pagination size="sm"
                                                                className="pagination-separated justify-content-center mb-0">
                                                        <Pagination.Prev disabled/>
                                                        <Pagination.Item>1</Pagination.Item>
                                                        <Pagination.Item active>2</Pagination.Item>
                                                        <Pagination.Item>3</Pagination.Item>
                                                        <Pagination.Next/>
                                                    </Pagination>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-sm-6 col-md-12  p-2">
                        <div className='card h-100'>
                            <div className="card-header align-items-center d-flex bg-white">
                                <h4 className="card-title mb-0 flex-grow-1 h6">Top Seller</h4>
                                <div className="flex-shrink-0">
                                    <div className="dropdown card-header-dropdown">
                                        <a className="text-reset dropdown-btn text-decoration-none " href="#"
                                           data-bs-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="true">
                                                           <span className="text-muted">Repots<i
                                                               className="mdi mdi-chevron-down ms-1"></i></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end"
                                             data-popper-placement="bottom-end"
                                             style={{
                                                 position: 'absolute',
                                                 inset: '0px 0px auto auto',
                                                 margin: '0px',
                                                 transform: 'translate3d(0px, 36.8px, 0px)'
                                             }}>
                                            <a className="dropdown-item" href="#">Today</a>
                                            <a className="dropdown-item" href="#">Yesterday</a>
                                            <a className="dropdown-item" href="#">Last 7 Days</a>
                                            <a className="dropdown-item" href="#">Last 30 Days</a>
                                            <a className="dropdown-item" href="#">This Month</a>
                                            <a className="dropdown-item" href="#">Last Month</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Card>
                                    <div>
                                        <div className="table-responsive table-card"
                                             style={{maxHeight: '400px', overflowY: 'auto'}}>
                                            <Table hover bordered className="table-centered align-middle mb-0">
                                                <tbody>
                                                {sellers.map(seller => (
                                                    <tr key={seller.id}>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <img src={seller.logo} alt=""
                                                                         className="avatar-sm p-2"/>
                                                                </div>
                                                                <div>
                                                                    <h5 className=" fw-medium"
                                                                        style={{fontSize: '12px'}}>
                                                                        <a href="apps-ecommerce-seller-details.html"
                                                                           className="text-reset">
                                                                            {seller.company}
                                                                        </a>
                                                                    </h5>
                                                                    <span className="text-muted">{seller.owner}</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted"
                                                                  style={{fontSize: '10px'}}>{seller.category}</span>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0"
                                                               style={{fontSize: '12px'}}>{seller.stock.toLocaleString()}</p>
                                                            <span className="text-muted">Stock</span>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">{seller.revenue}</span>
                                                        </td>
                                                        <td>
                                                            <h5 className=" mb-0" style={{fontSize: '14px'}}>
                                                                {seller.growth}%
                                                                {seller.trend === "up" ? (
                                                                    <FaArrowUp
                                                                        className="text-success  align-middle ms-2"
                                                                        style={{fontSize: '14px'}}/>
                                                                ) : (
                                                                    <FaArrowDown
                                                                        className="text-danger falign-middle ms-2"
                                                                        style={{fontSize: '14px'}}/>
                                                                )}
                                                            </h5>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </Table>
                                        </div>

                                        <Container fluid className="my-4 pt-2">
                                            <Row
                                                className="align-items-center justify-content-between text-center text-sm-start">
                                                <Col sm>
                                                    <div className="text-muted">
                                                        Showing <span className="fw-semibold">5</span> of <span
                                                        className="fw-semibold">{products.length}</span> Results
                                                    </div>
                                                </Col>
                                                <Col sm="auto" className="mt-3 mt-sm-0">
                                                    <Pagination size="sm"
                                                                className="pagination-separated justify-content-center mb-0">
                                                        <Pagination.Prev disabled/>
                                                        <Pagination.Item>1</Pagination.Item>
                                                        <Pagination.Item active>2</Pagination.Item>
                                                        <Pagination.Item>3</Pagination.Item>
                                                        <Pagination.Next/>
                                                    </Pagination>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-4 col-sm-6 col-md-12  p-2'>
                        <div className='card h-100'>
                            <div className="card-header align-items-center d-flex bg-white">
                                <h4 className="card-title mb-0 flex-grow-1 h6">Store Visits by Source</h4>
                                <div className="flex-shrink-0">
                                    <div className="dropdown card-header-dropdown">
                                        <a className="text-reset dropdown-btn text-decoration-none" href="#"
                                           data-bs-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">
                                            <span className="text-muted">Report<i
                                                className="mdi mdi-chevron-down ms-1"></i></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Download Report</a>
                                            <a className="dropdown-item" href="#">Export</a>
                                            <a className="dropdown-item" href="#">Import</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body p-3'>
                                <StoreVisitsChart/>

                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-8 col-sm-6 col-md-12 p-2'>
                        <div className='card h-100'>
                            <div className="card-header align-items-center d-flex bg-white">
                                <h4 className="card-title mb-0 flex-grow-1 h6">Recent Orders</h4>
                                <div className="flex-shrink-0">
                                    <button type="button" className="btn btn-soft-info btn-sm">
                                        <i className="ri-file-list-3-line align-middle"></i> Generate Report
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="">
                                    <OrdersTable/>
                                </div>
                            </div>
                        </div>
                    </div>
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
    );
};

export default Dashboard;