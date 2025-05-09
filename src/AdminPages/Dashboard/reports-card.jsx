import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";

const reportsCard = ({ title, value, percentage, linkText, icon, bg, iconColor, isPositive }) => (
    <div className="bg-white p-3 rounded shadow-sm flex-grow-1" style={{minWidth: '220px'}}>
        <div className="d-flex justify-content-between align-items-start">
            <div>
                <small className="text-muted text-uppercase ">{title}</small>
                <div className="d-flex align-items-center gap-2 mt-2">
                    <h5 className="fw-bold">{value}</h5>

                </div>
            </div>

            <small className={isPositive ? "text-success" : "text-danger"}>
                {isPositive ? <BsArrowUpRight/> : <BsArrowDownRight/>} {percentage}
            </small>
        </div>
        <div className='d-flex justify-content-between'>
            <a href="#" className="text-decoration-none mt-2 d-inline-block">{linkText}</a>
            <div
                className="p-2 rounded"
                style={{backgroundColor: bg, color: iconColor}}
            >
                {icon}

            </div>
        </div>
    </div>
);

export default reportsCard