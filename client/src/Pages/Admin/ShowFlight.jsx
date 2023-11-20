import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowFlight = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('/api/flights')
            .then(response => {
                setFlights(response.data.flights);
                console.log(response.data.flights);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div style={{ padding: "10rem 2rem 0rem 2rem" }}>
            <table style={{ border: 'solid 1px black', borderCollapse: 'collapse', width: '100%', padding: "10rem 2rem" }}>
                <thead>
                    <tr style={{ background: '#f7f7f7' }}>
                        <th
                            style={{
                                borderBottom: 'solid 1px black',
                                background: '#f2f2f2',
                                padding: '8px',
                                textAlign: 'left'
                            }}
                        >
                            Flight ID
                        </th>
                        <th
                            style={{
                                borderBottom: 'solid 1px black',
                                background: '#f2f2f2',
                                padding: '8px',
                                textAlign: 'left'
                            }}
                        >
                            Flight Name
                        </th>
                        <th
                            style={{
                                borderBottom: 'solid 1px black',
                                background: '#f2f2f2',
                                padding: '8px',
                                textAlign: 'left'
                            }}
                        >
                            Origin
                        </th>
                        <th
                            style={{
                                borderBottom: 'solid 1px black',
                                background: '#f2f2f2',
                                padding: '8px',
                                textAlign: 'left'
                            }}
                        >
                            Destination
                        </th>
                        <th
                            style={{
                                borderBottom: 'solid 1px black',
                                background: '#f2f2f2',
                                padding: '8px',
                                textAlign: 'left'
                            }}
                        >
                            Departure Time
                        </th>
                        <th
                            style={{
                                borderBottom: 'solid 1px black',
                                background: '#f2f2f2',
                                padding: '8px',
                                textAlign: 'left'
                            }}
                        >
                            Arrival Time
                        </th>
                        <th
                            style={{
                                borderBottom: 'solid 1px black',
                                background: '#f2f2f2',
                                padding: '8px',
                                textAlign: 'left'
                            }}
                        >
                            Passengers Capacity
                        </th>
                        <th
                            style={{
                                borderBottom: 'solid 1px black',
                                background: '#f2f2f2',
                                padding: '8px',
                                textAlign: 'left'
                            }}
                        >
                            Available Seats
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map(row => {
                        return (
                            <tr style={{ borderBottom: 'solid 1px black' }}>
                                <td style={{
                                    padding: '8px',
                                    textAlign: 'left'
                                }}
                                >
                                    {row.flightId}
                                </td>
                                <td style={{
                                    padding: '8px',
                                    textAlign: 'left'
                                }}
                                >
                                    {row.flightName}
                                </td>
                                <td style={{
                                    padding: '8px',
                                    textAlign: 'left'
                                }}
                                >
                                    {row.origin}
                                </td>
                                <td style={{
                                    padding: '8px',
                                    textAlign: 'left'
                                }}
                                >
                                    {row.destination}
                                </td>
                                <td style={{
                                    padding: '8px',
                                    textAlign: 'left'
                                }}
                                >
                                    {new Date(row.departureTime).toLocaleString()}
                                </td>
                                <td style={{
                                    padding: '8px',
                                    textAlign: 'left'
                                }}
                                >
                                    {new Date(row.arrivalTime).toLocaleString()}
                                </td>
                                <td style={{
                                    padding: '8px',
                                    textAlign: 'left'
                                }}
                                >
                                    {row.passengers}
                                </td>
                                <td style={{
                                    padding: '8px',
                                    textAlign: 'left'
                                }}
                                >
                                    {row.availability}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ShowFlight