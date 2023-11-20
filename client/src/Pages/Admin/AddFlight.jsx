import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddFlight = () => {
    const navigate = useNavigate();

    const [flightname, setFlightname] = useState('');
    const [flightid, setFlightid] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departuretime, setDeparturetime] = useState('');
    const [arrivaltime, setArrivaltime] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        if (flightname === '' || flightid === '' || origin === '' || destination === '' || departuretime === '' || arrivaltime === '') {
            toast.error('Please fill all the fields');
            return;
        }
        axios.post('/api/flights/',
            {
                "flightName": flightname,
                "flightId": flightid,
                "origin": origin,
                "destination": destination,
                "departureTime": departuretime,
                "arrivalTime": arrivaltime
            }, { headers: { authorization: localStorage.getItem('token') } })
            .then(data => {
                console.log(data.data.message);
                toast.success(data.data.message);
                setFlightname('');
                setFlightid('');
                setOrigin('');
                setDestination('');
                setDeparturetime('');
                setArrivaltime('');
            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response);
                    toast.error(err.response.data.message);
                }
            })
    }
    return (
        <div className='addflight' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="formcontainer">
                <form className='fform flex' onSubmit={handlesubmit}>
                    <div className="formgroup flex">
                        <label>
                            Flight ID:
                        </label>
                        <input type="text" name="flightId" value={flightid} onChange={(e) => { setFlightid(e.target.value) }} />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Flight Name:
                        </label>
                        <input type="text" name="flightName" value={flightname} onChange={(e) => { setFlightname(e.target.value) }} />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Origin:
                        </label>
                        <input type="text" name="origin" value={origin} onChange={(e) => { setOrigin(e.target.value) }} />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Destination:
                        </label>
                        <input type="text" name="destination" value={destination} onChange={(e) => { setDestination(e.target.value) }} />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Departure Time:
                        </label>
                        <input type="datetime-local" name="departureTime" value={departuretime} onChange={(e) => { setDeparturetime(e.target.value) }} />
                    </div>
                    <div className="formgroup flex">
                        <label>
                            Arrival Time:
                        </label>
                        <input type="datetime-local" name="arrivalTime" value={arrivaltime} onChange={(e) => { setArrivaltime(e.target.value) }} />
                    </div>
                    <input type="submit" className='btn' value="Add Flight" />
                </form>
            </div>
        </div>
    )
}

export default AddFlight