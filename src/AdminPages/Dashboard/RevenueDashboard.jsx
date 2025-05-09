

import React from "react";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import MonthlyMetricsChart from "./reports-chats";

const RevenueDashboard = () => {
    const ExpenseChart = [
        { _id: "Mar 07", TotalAmount: 120 },
        { _id: "Mar 08", TotalAmount: 98 },
        { _id: "Mar 09", TotalAmount: 135 },
        { _id: "Mar 10", TotalAmount: 87 },
        { _id: "Mar 11", TotalAmount: 160 },
        { _id: "Mar 12", TotalAmount: 140 },
        { _id: "Mar 13", TotalAmount: 180 },
        { _id: "Mar 14", TotalAmount: 110 },
        { _id: "Mar 15", TotalAmount: 145 },
        { _id: "Mar 16", TotalAmount: 100 },
        { _id: "Mar 17", TotalAmount: 130 },
        { _id: "Mar 18", TotalAmount: 150 },
        { _id: "Mar 19", TotalAmount: 170 },
        { _id: "Mar 20", TotalAmount: 160 },
        { _id: "Mar 21", TotalAmount: 190 },
        { _id: "Mar 22", TotalAmount: 120 },
        { _id: "Mar 23", TotalAmount: 175 },
        { _id: "Mar 24", TotalAmount: 160 },
        { _id: "Mar 25", TotalAmount: 190 },
        { _id: "Mar 26", TotalAmount: 155 },
        { _id: "Mar 27", TotalAmount: 135 },
        { _id: "Mar 28", TotalAmount: 145 },
        { _id: "Mar 29", TotalAmount: 125 },
        { _id: "Mar 30", TotalAmount: 110 },
        { _id: "Mar 31", TotalAmount: 140 },
        { _id: "Apr 01", TotalAmount: 155 },
        { _id: "Apr 02", TotalAmount: 170 },
        { _id: "Apr 03", TotalAmount: 190 },
        { _id: "Apr 04", TotalAmount: 185 },
        { _id: "Apr 05", TotalAmount: 200 },
    ];



    return (
        <div className="">
            <div className="card">
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                        <span className="h6">Revenue</span>
                        <div className="btn-group btn-group-sm  p-1 rounded-pill gap-3">
                            <button className="btn btn-primary rounded-pill px-3 py-1">ALL</button>
                            <button className="btn btn-light text-muted rounded-pill px-3 py-1">1M</button>
                            <button className="btn btn-light text-muted rounded-pill px-3 py-1">6M</button>
                            <button className="btn btn-light text-muted rounded-pill px-3 py-1">1Y</button>
                        </div>

                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-6 col-sm-3">
                            <div className="p-3 border border-dashed border-start-0">
                                <h5 className="mb-1">
                                    <span className="counter-value" data-target="7585">7,585</span>
                                </h5>
                                <p className="text-muted mb-0">Orders</p>
                            </div>
                        </div>
                        {/* End col */}

                        <div className="col-6 col-sm-3">
                            <div className="p-3 border border-dashed border-start-0">
                                <h5 className="mb-1">
                                    $<span className="counter-value" data-target="22.89">22.89</span>k
                                </h5>
                                <p className="text-muted mb-0">Earnings</p>
                            </div>
                        </div>
                        {/* End col */}

                        <div className="col-6 col-sm-3">
                            <div className="p-3 border border-dashed border-start-0">
                                <h5 className="mb-1">
                                    <span className="counter-value" data-target="367">367</span>
                                </h5>
                                <p className="text-muted mb-0">Refunds</p>
                            </div>
                        </div>
                        {/* End col */}

                        <div className="col-6 col-sm-3">
                            <div className="p-3 border border-dashed border-start-0 border-end-0">
                                <h5 className="mb-1 text-success">
                                    <span className="counter-value" data-target="18.92">18.92</span>%
                                </h5>
                                <p className="text-muted mb-0 ">Conversion</p>
                            </div>
                        </div>
                        {/* End col */}
                    </div>

                    <MonthlyMetricsChart/>

                </div>
            </div>

        </div>
    );
};

export default RevenueDashboard;
