import React, { useState } from 'react'
import { RxCalendar } from "react-icons/rx";
import { GiJetFighter } from "react-icons/gi";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const isAuth = !!localStorage.getItem('token');
    const navigate = useNavigate();

    const [flightname, setFlightname] = useState('');
    const [flightid, setFlightid] = useState('');
    const [flightdate, setFlightdate] = useState('');

    const searchFlight = () => {
        if (!isAuth) {
            toast.error('Please Login/Signup First');
            return;
        }
        if (flightname === '' && flightid === '' && flightdate === '') {
            toast.error('Please Enter atleast one field');
            return;
        }
        navigate('/searchresults', { state: { flightname, flightid, flightdate } });
    }


    return (
        <div className="search container section">
            <div className="sectionContainer grid">
                <div className="btns flex" style={{ justifyContent: "center" }}>
                    <div onClick={() => { navigate('/flights') }} className="singleBtn" style={{ cursor: "pointer" }}><span>Show all Flights</span></div>
                </div>
                <div className="searchInputs flex">

                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <GiJetFighter className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Flight Name</h4>
                            <input type="text" placeholder='Add Flight Name' value={flightname} onChange={(e) => setFlightname(e.target.value)} />
                        </div>
                    </div>
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <GiJetFighter className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Flight ID</h4>
                            <input type="text" placeholder='Add Flight ID' value={flightid} onChange={(e) => setFlightid(e.target.value)} />
                        </div>
                    </div>
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Date</h4>
                            <input type="date" placeholder='Add date' value={flightdate} onChange={(e) => setFlightdate(e.target.value)} />
                        </div>
                    </div>
                    <button onClick={searchFlight} className='btn btnBlock flex' style={{ justifyContent: "center" }}>Search Flight</button>
                </div>
            </div>
        </div>
    )
}

export default Search