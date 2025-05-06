import React, { Component } from 'react'
import { connect } from 'react-redux'
// Update these paths to match your project structure
import Ticket from '../../Components/Ticket'
import Footer from '../../Components/Footer'
import HeaderAdmin from '../../Components/HeaderAdmin'
import Loading from "../../Components/Loading"
import { fetchTickets } from '../../actions/ticketActions'


// corresponding style file: _ticketList.scss

class TicketList extends Component {
    componentDidMount = () => {
        const token = localStorage.getItem('token')
        this.props.fetchTickets(token, this.props.history)
    }

    render() {
        let loading
        if(this.props.tickets.loading) {
            loading = <Loading />
        }

        return (
            <React.Fragment>
                <HeaderAdmin history={this.props.history}/>
                {/* shows loading */}
                {loading}
                <div className="container">
                    <h4 className="h4-5">Items to be approved</h4>
                    {this.props.tickets.data.map(ticket => {
                        return <Ticket item={ticket} key={`item ${ticket._id}`} />
                    })}
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ tickets }) => {
    return { tickets }
}


export default connect(mapStateToProps, { fetchTickets: fetchTickets })(TicketList)