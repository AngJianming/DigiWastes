import React, {Fragment, useRef, useState} from "react";
import {Container,Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import {AiOutlineCheckCircle, AiOutlineEdit, AiOutlineLogout, AiOutlineMenuUnfold, AiOutlineUser} from "react-icons/ai";
import {
    BsCheckCircle,
    BsDashCircle,
    BsExclamationTriangle,
    BsHourglass,
    BsListNested
} from "react-icons/bs";

import { IoMdNotificationsOutline } from "react-icons/io";
import photo from '../../assets/images/39784 copy.jpg'



import logo from "../../assets/images/logo.svg";
import image from '../../assets/images/image.jpg'
import product from '../../assets/images/product.jpg'
import react from '../../assets/images/icon/images.png'
import vercel from '../../assets/images/icon/Vercel_OG_Image.png'
import github from '../../assets/images/icon/9919.png'


import { MdOutlineCancelPresentation } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { FiMoon } from "react-icons/fi";


import {getUserDetails, removeSessions} from "../helper/SessionHelper";
import {FaShoppingCart} from "react-icons/fa";
import {CiBoxList} from "react-icons/ci";
import Select from "react-select";
import {RxCrossCircled} from "react-icons/rx";
import DarkModeToggle from "../dark/DarkModeToggle";
import {SiSimpleanalytics} from "react-icons/si";



const MasterLayout = (props) => {
    console.log(getUserDetails())
    let contentRef,sideNavRef=useRef();

    const onLogout=()=>{
        removeSessions();
    }

    const MenuBarClickHandler = () => {
        let sideNav = sideNavRef;
        let content = contentRef;
        if (sideNav.classList.contains("side-nav-open")) {
            sideNav.classList.add("side-nav-close");
            sideNav.classList.remove("side-nav-open");
            content.classList.add("content-expand");
            content.classList.remove("content");
        } else {
            sideNav.classList.remove("side-nav-close");
            sideNav.classList.add("side-nav-open");
            content.classList.remove("content-expand");
            content.classList.add("content");
        }
    };
    const unreadCount= 9

    const data =[
        {
            "id": 1,
            "image": image,
            "name": "Alice Johnson",
            "message": "Liked your post about JavaScript tips.",
            "time": "2 hrs ago"
        },
        {
            "id": 2,
            "image": image,
            "name": "Michael Smith",
            "message": "Commented on your status update.",
            "time": "5 hrs ago"
        },
        {
            "id": 3,
            "image": image,
            "name": "Emma Brown",
            "message": "Shared your blog post on React.",
            "time": "1 day ago"
        },
        {
            "id": 4,
            "image": image,
            "name": "Daniel Lee",
            "message": "Started following you.",
            "time": "3 days ago"
        },
        {
            "id": 5,
            "image": image,
            "name": "Sophia Martinez",
            "message": "Mentioned you in a comment on invoice #4523.",
            "time": "7 hrs ago"
        },
        {
            "id": 6,
            "image": image,
            "name": "Liam Wilson",
            "message": "Tagged you in a photo.",
            "time": "4 days ago"
        },
        {
            "id": 7,
            "image": image,
            "name": "Olivia Davis",
            "message": "Sent you a message.",
            "time": "10 mins ago"
        },
        {
            "id": 8,
            "image": image,
            "name": "Noah White",
            "message": "Replied to your comment on invoice #7896.",
            "time": "8 hrs ago"
        },
        {
            "id": 9,
            "image": image,
            "name": "Ava Anderson",
            "message": "Reacted ❤️ to your post.",
            "time": "12 hrs ago"
        },
        {
            "id": 10,
            "image": image,
            "name": "James Miller",
            "message": "Mentioned you in a story.",
            "time": "6 hrs ago"
        }
    ]

    const languageOptions = [
        { value: "en", label: <><img src="https://flagcdn.com/w320/us.png" alt="US Flag" style={{ width: "20px", marginRight: "8px" }} /> English</> },
        { value: "es", label: <><img src="https://flagcdn.com/w320/es.png" alt="Spain Flag" style={{ width: "20px", marginRight: "8px" }} /> Español</> },
        { value: "fr", label: <><img src="https://flagcdn.com/w320/fr.png" alt="France Flag" style={{ width: "20px", marginRight: "8px" }} /> Français</> },
        { value: "de", label: <><img src="https://flagcdn.com/w320/de.png" alt="Germany Flag" style={{ width: "20px", marginRight: "8px" }} /> Deutsch</> },
        { value: "zh", label: <><img src="https://flagcdn.com/w320/cn.png" alt="China Flag" style={{ width: "20px", marginRight: "8px" }} /> 中文</> },
        { value: "ja", label: <><img src="https://flagcdn.com/w320/jp.png" alt="Japan Flag" style={{ width: "20px", marginRight: "8px" }} /> 日本語</> },
        { value: "ar", label: <><img src="https://flagcdn.com/w320/sa.png" alt="Saudi Arabia Flag" style={{ width: "20px", marginRight: "8px" }} /> العربية</> },
        { value: "hi", label: <><img src="https://flagcdn.com/w320/in.png" alt="India Flag" style={{ width: "20px", marginRight: "8px" }} /> हिंदी</> },
    ];
    const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

    return (
        <Fragment>
            <Navbar  className="fixed-top px-0 shadow-sm ">
                <Container fluid={true}>
                    <Navbar.Brand>
                        <a className="icon-nav m-0 h5" onClick={MenuBarClickHandler}><AiOutlineMenuUnfold/></a>
                        <img className="nav-logo mx-2" src={logo} alt="logo"/>
                    </Navbar.Brand>

                    <div className="float-right h-auto d-flex gap-3">
                        <div className=' d-none d-md-block'>
                            <div className="w-56">
                                <Select
                                    options={languageOptions}
                                    value={selectedLanguage}
                                    onChange={setSelectedLanguage}
                                    className="text-lg"
                                />
                            </div>
                        </div>
                        <div className=" d-none d-md-block ">
                            <button
                                className="icon-button "
                                id="page-header-app-dropdown"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <CiBoxList className="icon-nav-img icon-nav"/>
                            </button>
                            <ul
                                className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end right-20"
                                id="dropdown-page-header-cart"
                                aria-labelledby="page-header-app-dropdown"
                            >
                                <li>
                                    <div
                                        className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="m-0 fw-semibold fs-15">Web Apps</h6>
                                            </div>
                                            <div className="col-auto">
                                                <a href="#!" className="btn btn-sm btn-soft-info">
                                                    View All Apps
                                                    <i className="ri-arrow-right-s-line align-middle"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="p-2">
                                        <div className="row g-0">
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#!">
                                                    <img src={github} alt="Github" className='w-50'/>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#!">
                                                    <img src={react} alt="bitbucket" className='w-50'/>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#!">
                                                    <img src={vercel} alt="dribbble" className='w-50'/>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="row g-0">
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#!">
                                                    <img src={react} alt="dropbox" className='w-50'/>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#!">
                                                    <img src={vercel} alt="mail_chimp" className='w-50'/>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#!">
                                                    <img src={github} alt="slack" className='w-50'/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <div className='cart-dropdown  d-none d-md-block'>
                            <button className='icon-button'>
                                <FaShoppingCart className='icon-nav-img icon-nav'/>
                                <span className="icon-button__badge">{unreadCount}</span>
                            </button>
                            <div className='cart-dropdown-content'>
                                <div
                                    className="dropdown-menu dropdown-menu-xl dropdown-menu-end p-0 dropdown-menu-cart show"
                                    style={{
                                        position: 'absolute',
                                        inset: '0px 0px auto auto',
                                        margin: '0px',
                                        transform: 'translate3d(0px, 58.4px, 0px)'
                                    }}
                                    data-popper-placement="bottom-end"
                                >
                                    <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="m-0 fs-16 fw-semibold">My Cart</h6>
                                            </div>
                                            <div className="col-auto">
                                                <span className="badge bg-warning-subtle text-warning fs-13">
                                                  <span className="cartitem-badge">5</span> items
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        data-simplebar="init"
                                        style={{maxHeight: '300px'}}
                                        className="simplebar-scrollable-y simplebar-mouse-entered"
                                    >
                                        <div className="simplebar-wrapper" style={{margin: 0}}>
                                            <div className="simplebar-height-auto-observer-wrapper">
                                                <div className="simplebar-height-auto-observer"/>
                                            </div>
                                            <div className="simplebar-mask">
                                                <div className="simplebar-offset" style={{right: 0, bottom: 0}}>
                                                    <div
                                                        className="simplebar-content-wrapper"
                                                        tabIndex={0}
                                                        role="region"
                                                        aria-label="scrollable content"
                                                        style={{height: 'auto', overflow: 'hidden scroll'}}
                                                    >
                                                        <div data-simplebar className="cart-scroll-container"
                                                             style={{maxHeight: '350px'}}>
                                                            <div className="p-2">
                                                                {/* Empty Cart Message (hidden by default) */}
                                                                <div className="text-center empty-cart" id="empty-cart"
                                                                     style={{display: 'none'}}>
                                                                    <div className="avatar-md mx-auto my-4">
                                                                        <div
                                                                            className="avatar-title bg-info-subtle text-info fs-3 rounded-circle d-flex align-items-center justify-content-center">
                                                                            <i className="bx bx-cart"></i>
                                                                        </div>
                                                                    </div>
                                                                    <h5 className="mb-3">Your Cart is Empty!</h5>
                                                                    <a href="apps-ecommerce-products.html"
                                                                       className="btn btn-success px-4 py-2 mb-3">
                                                                        Shop Now
                                                                    </a>
                                                                </div>

                                                                {/* Cart Items */}
                                                                {[...Array(10)].map((_, idx) => (
                                                                    <div
                                                                        key={idx}
                                                                        className="dropdown-item dropdown-item-cart border-bottom py-3"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="flex-shrink-0">
                                                                                <img
                                                                                    src={product}
                                                                                    className="rounded-3 bg-light p-2 me-3"
                                                                                    alt="product"
                                                                                    width="60"
                                                                                    height="60"
                                                                                />
                                                                            </div>
                                                                            <div className="flex-grow-1 min-width-0">
                                                                                <h6 className="mb-1 text-decoration-none">
                                                                                    <a href="apps-ecommerce-product-details.html"
                                                                                       className="text-body text-decoration-none">
                                                                                        Product Title {idx + 1}
                                                                                    </a>
                                                                                </h6>
                                                                                <p className="mb-0 fs-7 text-muted">
                                                                                    Quantity: <span
                                                                                    className="fw-medium">3 x $99</span>
                                                                                </p>
                                                                            </div>
                                                                            <div
                                                                                className="flex-shrink-0 text-end mx-2">
                                                                                <h6 className="mb-0 fw-semibold">$<span
                                                                                    className="cart-item-price">297</span>
                                                                                </h6>
                                                                            </div>
                                                                            <div className="flex-shrink-0 mt-2">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-icon btn-sm btn-danger"
                                                                                >
                                                                                    <RxCrossCircled/>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="simplebar-placeholder"
                                                 style={{width: '420px', height: '336px'}}/>
                                        </div>
                                        <div className="simplebar-track simplebar-horizontal"
                                             style={{visibility: 'hidden'}}>
                                            <div className="simplebar-scrollbar" style={{width: 0, display: 'none'}}/>
                                        </div>
                                        <div className="simplebar-track simplebar-vertical"
                                             style={{visibility: 'visible'}}>
                                            <div
                                                className="simplebar-scrollbar"
                                                style={{
                                                    height: '267px',
                                                    display: 'block',
                                                    transform: 'translate3d(0px, 0px, 0px)'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div
                                        className="p-3 border-bottom-0 border-start-0 border-end-0 border-dashed border mt-5"
                                        id="checkout-elem"
                                        style={{display: 'block'}}
                                    >
                                        <div
                                            className="d-flex justify-content-between align-items-center p-3 w-100 bg-white ">
                                            <h5 className="m-0 text-muted">Total:</h5>
                                            <div className="px-2">
                                                <h5 className="m-0" id="cart-item-total">
                                                    $3399.00
                                                </h5>
                                            </div>
                                        </div>

                                        <a href="apps-ecommerce-checkout.html"
                                           className="btn btn-success text-center w-100">
                                            Checkout
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className=' d-none d-md-block '>
                         <DarkModeToggle/>
                        </div>
                        <div className="notification-dropdown">
                            <button type="button" className="icon-button">
                                <IoMdNotificationsOutline className='icon-nav-img icon-nav'/>
                                <span className="icon-button__badge">{unreadCount}</span>
                            </button>

                            <div className="notification-dropdown-content ">
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                                     aria-labelledby="page-header-notifications-dropdown"
                                     style={{
                                         position: 'absolute',
                                         inset: '0px 0px auto auto',
                                         margin: '0px',
                                         transform: 'translate3d(0px, 58.4px, 0px)'
                                     }}
                                     data-popper-placement="bottom-end">

                                    <div className="dropdown-head bg-primary bg-pattern rounded-top">
                                        <div className="p-3">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h6 className="m-0 fs-16 fw-semibold text-white"> Notifications </h6>
                                                </div>
                                                <div className="col-auto dropdown-tabs">
                                                    <span
                                                        className="badge bg-light-subtle text-body fs-13"> 4 New</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="px-2 pt-2">
                                            <ul className="nav nav-tabs dropdown-tabs nav-tabs-custom"
                                                data-dropdown-tabs="true" id="notificationItemsTab" role="tablist">
                                                <li className="nav-item waves-effect waves-light" role="presentation">
                                                    <a className="nav-link active" data-bs-toggle="tab"
                                                       href="#all-noti-tab" role="tab" aria-selected="true">
                                                        All (4)
                                                    </a>
                                                </li>
                                                <li className="nav-item waves-effect waves-light" role="presentation">
                                                    <a className="nav-link" data-bs-toggle="tab" href="#messages-tab"
                                                       role="tab" aria-selected="false" tabIndex="-1">
                                                        Messages
                                                    </a>
                                                </li>
                                                <li className="nav-item waves-effect waves-light" role="presentation">
                                                    <a className="nav-link" data-bs-toggle="tab" href="#alerts-tab"
                                                       role="tab" aria-selected="false" tabIndex="-1">
                                                        Alerts
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-content position-relative" id="notificationItemsTabContent">
                                        <div className="tab-pane fade show active py-2 ps-2" id="all-noti-tab"
                                             role="tabpanel">
                                            <div style={{maxHeight: "300px", overflowY: "auto", overflowX: "hidden"}}
                                                 className="pe-2">
                                                <div className="simplebar-content" style={{padding: "0px 8px 0px 0px"}}>
                                                    {data.map((item, i) => (
                                                        <div key={i}
                                                             className="text-reset notification-item d-block dropdown-item position-relative">
                                                            <div className="d-flex">
                                                                <img src={item.image}
                                                                     className="me-3 rounded-circle avatar-xs"
                                                                     alt="user-pic"/>
                                                                <div className="flex-grow-1">
                                                                    <a href="#!"
                                                                       className="stretched-link text-decoration-none">
                                                                        <h6 className="mt-0 mb-1 fs-4 fw-semibold">{item.name}</h6>
                                                                    </a>
                                                                    <div className="fs-5 text-wrap">
                                                                        <p className="mb-1">{item.message}</p>
                                                                    </div>
                                                                    <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                <span>
                  <i className="mdi mdi-clock-outline"></i> {item.time}
                </span>
                                                                    </p>
                                                                </div>
                                                                <div className="px-2 fs-15">
                                                                    <div className="form-check notification-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox" value=""
                                                                               id={`notification-check-${i}`}/>
                                                                        <label className="form-check-label"
                                                                               htmlFor={`notification-check-${i}`}></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                    <div className="my-3 text-center view-all"
                                                         style={{display: "block"}}>
                                                        <button type="button"
                                                                className="btn btn-soft-success waves-effect waves-light">
                                                            View All Notifications <i
                                                            className="ri-arrow-right-line align-middle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="tab-pane fade py-2 ps-2" id="messages-tab" role="tabpanel"
                                             aria-labelledby="messages-tab">
                                            <div style={{maxHeight: "300px", overflowY: "auto", overflowX: "hidden"}}
                                                 className="pe-2">
                                                <div className="simplebar-content" style={{padding: "0px 8px 0px 0px"}}>
                                                    {data.map((item, i) => (
                                                        <div key={i}
                                                             className="text-reset notification-item d-block dropdown-item position-relative">
                                                            <div className="d-flex">
                                                                <img src={item.image}
                                                                     className="me-3 rounded-circle avatar-xs"
                                                                     alt="user-pic"/>
                                                                <div className="flex-grow-1">
                                                                    <a href="#!"
                                                                       className="stretched-link text-decoration-none">
                                                                        <h6 className="mt-0 mb-1 fs-4 fw-semibold">{item.name}</h6>
                                                                    </a>
                                                                    <div className="fs-5 text-wrap">
                                                                        <p className="mb-1">{item.message}</p>
                                                                    </div>
                                                                    <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                <span>
                  <i className="mdi mdi-clock-outline"></i> {item.time}
                </span>
                                                                    </p>
                                                                </div>
                                                                <div className="px-2 fs-15">
                                                                    <div className="form-check notification-check">
                                                                        <input className="form-check-input"
                                                                               type="checkbox" value=""
                                                                               id={`notification-check-${i}`}/>
                                                                        <label className="form-check-label"
                                                                               htmlFor={`notification-check-${i}`}></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                    <div className="my-3 text-center view-all"
                                                         style={{display: "block"}}>
                                                        <button type="button"
                                                                className="btn btn-soft-success waves-effect waves-light">
                                                            View All Messages <i
                                                            className="ri-arrow-right-line align-middle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade p-4" id="alerts-tab" role="tabpanel"
                                             aria-labelledby="alerts-tab">
                                            <div className="empty-notification-elem">
                                                <div className="w-25 w-sm-50 pt-3 mx-auto"><img
                                                    src={logo} className="img-fluid"
                                                    alt="user-pic"/></div>
                                                <div className="text-center pb-5 mt-2"><h6
                                                    className="fs-18 fw-semibold lh-base">Hey! You have no any
                                                    notifications </h6></div>
                                            </div>
                                        </div>

                                        <div className="notification-actions" id="notification-actions">
                                            <div className="d-flex text-muted justify-content-center">
                                                Select <div id="select-content"
                                                            className="text-body fw-semibold px-1">0</div> Result <button
                                                type="button" className="btn btn-link link-danger p-0 ms-3"
                                                data-bs-toggle="modal"
                                                data-bs-target="#removeNotificationModal">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="user-dropdown">
                            <img className="icon-nav-img icon-nav" src={photo} alt=""/>
                            <div className="user-dropdown-content ">
                                <div className="mt-4 text-center">
                                    <img className="icon-nav-img" src={photo} alt=""/>
                                    <h6>Saharul Sifat</h6>
                                    <hr className="user-dropdown-divider  p-0"/>
                                </div>
                                <NavLink to="/Profile" className="side-bar-item text-decoration-none">
                                    <AiOutlineUser className="side-bar-item-icon"/>
                                    <span className="side-bar-item-caption">Profile</span>
                                </NavLink>
                                <a onClick={onLogout} className="side-bar-item text-decoration-none">
                                    <AiOutlineLogout className="side-bar-item-icon"/>
                                    <span className="side-bar-item-caption">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>

            <div ref={(div) => {
                sideNavRef = div
            }} className="side-nav-open">

                <NavLink
                    className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none  side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none"}
                    to="/" end>
                    <RiDashboardLine className="side-bar-item-icon "/>
                    <span className="side-bar-item-caption">Dashboard</span>
                </NavLink>

                <NavLink
                    className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none"}
                    to="/analytics">
                    <SiSimpleanalytics  className="side-bar-item-icon"/>
                    <span className="side-bar-item-caption">Analytics</span>
                </NavLink>

                <NavLink
                    className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none  side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none"}
                    to="/All">
                    <BsListNested className="side-bar-item-icon"/>
                    <span className="side-bar-item-caption">New Task</span>
                </NavLink>

                <NavLink
                    className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none  side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none"}
                    to="/High">
                    <BsExclamationTriangle className="side-bar-item-icon"/>
                    <span className="side-bar-item-caption">Priority High Task</span>
                </NavLink>
                <NavLink
                    className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none  side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none"}
                    to="/medium">
                    <BsDashCircle className="side-bar-item-icon"/>
                    <span className="side-bar-item-caption">Priority Medium Task</span>
                </NavLink>
                <NavLink
                    className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none  side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none"}
                    to="/Low">
                    <BsCheckCircle className="side-bar-item-icon"/>
                    <span className="side-bar-item-caption">Priority Low Task</span>
                </NavLink>

                <NavLink
                    className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none  side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none"}
                    to="/Pending">
                    <BsHourglass className="side-bar-item-icon"/>
                    <span className="side-bar-item-caption">Pending Task</span>
                </NavLink>

                <NavLink
                    className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none"}
                    to="/Completed">
                    <AiOutlineCheckCircle className="side-bar-item-icon"/>
                    <span className="side-bar-item-caption">Completed</span>
                </NavLink>

                <NavLink
                    className={(navData) => navData.isActive ? "side-bar-item-active text-decoration-none side-bar-item mt-2" : "side-bar-item mt-2 text-decoration-none"}
                    to="/Canceled">
                    <MdOutlineCancelPresentation className="side-bar-item-icon"/>
                    <span className="side-bar-item-caption text-decoration-none">Canceled</span>
                </NavLink>

            </div>

            <div ref={(div) => contentRef = div} className="content">
                {props.children}
            </div>

        </Fragment>
    );
};

export default MasterLayout;