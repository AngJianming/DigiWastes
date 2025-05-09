import React from 'react';
import customer1 from '../../assets/images/customer/avatar-1.jpg'
import customer2 from '../../assets/images/customer/avatar-2.jpg'
import customer3 from '../../assets/images/customer/avatar-3.jpg'
import customer4 from '../../assets/images/customer/avatar-4.jpg'
import customer5 from '../../assets/images/customer/avatar-5.jpg'
import customer6 from '../../assets/images/customer/avatar-6.jpg'
const ordersData = [
    {
        "orderId": "VZ2112",
        "orderLink": "apps-ecommerce-order-details.html",
        "customer": {
            "name": "Alex Smith",
            "avatar":customer1
        },
        "productCategory": "Clothes",
        "amount": 109.00,
        "vendor": "Zoetic Fashion",
        "paymentStatus": "Paid",
        "paymentStatusClass": "bg-success-subtle text-success",
        "rating": 5.0,
        "votes": 61
    },
    {
        "orderId": "VZ2111",
        "orderLink": "apps-ecommerce-order-details.html",
        "customer": {
            "name": "Jansh Brown",
            "avatar":customer2
        },
        "productCategory": "Kitchen Storage",
        "amount": 149.00,
        "vendor": "Micro Design",
        "paymentStatus": "Pending",
        "paymentStatusClass": "bg-warning-subtle text-warning",
        "rating": 4.5,
        "votes": 61
    },
    {
        "orderId": "VZ2109",
        "orderLink": "apps-ecommerce-order-details.html",
        "customer": {
            "name": "Ayaan Bowen",
            "avatar": customer3
        },
        "productCategory": "Bike Accessories",
        "amount": 215.00,
        "vendor": "Nesta Technologies",
        "paymentStatus": "Paid",
        "paymentStatusClass": "bg-success-subtle text-success",
        "rating": 4.9,
        "votes": 89
    },
    {
        "orderId": "VZ2108",
        "orderLink": "apps-ecommerce-order-details.html",
        "customer": {
            "name": "Prezy Mark",
            "avatar": customer4
        },
        "productCategory": "Furniture",
        "amount": 199.00,
        "vendor": "Syntyce Solutions",
        "paymentStatus": "Unpaid",
        "paymentStatusClass": "bg-danger-subtle text-danger",
        "rating": 4.3,
        "votes": 47
    },
    {
        "orderId": "VZ2107",
        "orderLink": "apps-ecommerce-order-details.html",
        "customer": {
            "name": "Vihan Hudda",
            "avatar": customer5
        },
        "productCategory": "Bags and Wallets",
        "amount": 330.00,
        "vendor": "iTest Factory",
        "paymentStatus": "Paid",
        "paymentStatusClass": "bg-success-subtle text-success",
        "rating": 4.7,
        "votes": 161
    }
    ,
    {
        "orderId": "VZ2157",
        "orderLink": "apps-ecommerce-order-details.html",
        "customer": {
            "name": "Vihan Hudda",
            "avatar": customer6
        },
        "productCategory": "Bags and Wallets",
        "amount": 330.00,
        "vendor": "iTest Factory",
        "paymentStatus": "Paid",
        "paymentStatusClass": "bg-success-subtle text-success",
        "rating": 4.7,
        "votes": 161
    }
];

const OrdersTable = () => {
    return (
        <div className="table-responsive table-card">
            <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                <thead className="text-muted table-light">
                <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Product</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Vendor</th>
                    <th scope="col">Status</th>
                    <th scope="col">Rating</th>
                </tr>
                </thead>
                <tbody>
                {ordersData.map((order, index) => (
                    <tr key={index}>
                        <td>
                            <a href={order.orderLink} className="fw-medium text-decoration-none">#{order.orderId}</a>
                        </td>
                        <td>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-2">
                                    <img src={order.customer.avatar} alt="" className="avatar-xs rounded-circle" />
                                </div>
                                <div className="flex-grow-1">{order.customer.name}</div>
                            </div>
                        </td>
                        <td>{order.productCategory}</td>
                        <td>
                            <span className="text-success">${order.amount.toFixed(2)}</span>
                        </td>
                        <td style={{fontSize:'10px'}}>{order.vendor}</td>
                        <td>
                            <span className={`badge ${order.paymentStatusClass}`}>{order.paymentStatus}</span>
                        </td>
                        <td>
                            <h5 className=" fw-medium mb-0" style={{fontSize:'10px'}}>
                                {order.rating}
                                <span className="text-muted ms-1" style={{fontSize:'10px'}}>({order.votes} votes)</span>
                            </h5>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;