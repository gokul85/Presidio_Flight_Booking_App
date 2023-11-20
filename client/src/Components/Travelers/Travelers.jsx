import React from 'react'
import france from '../../assets/Images/france.jpg'
import person from '../../assets/Images/person.jpg'


const Travelers = () => {
    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2>Top travelers of this month!</h2>

                <div className="travelerContainer grid">
                    <div className="singleTraveler">
                        <img src={france} className='destinationImages' />
                        <div className="travelerDetails">
                            <div className="travelerPicture">
                                <img src={person} className='travelerImage' />
                            </div>
                        </div>
                        <div className="travelerName">
                            <span>Traveler 1</span>
                            <p>@travaler1</p>
                        </div>
                    </div>
                    <div className="singleTraveler">
                        <img src={france} className='destinationImages' />
                        <div className="travelerDetails">
                            <div className="travelerPicture">
                                <img src={person} className='travelerImage' />
                            </div>
                        </div>
                        <div className="travelerName">
                            <span>Traveler 2</span>
                            <p>@travaler2</p>
                        </div>
                    </div>
                    <div className="singleTraveler">
                        <img src={france} className='destinationImages' />
                        <div className="travelerDetails">
                            <div className="travelerPicture">
                                <img src={person} className='travelerImage' />
                            </div>
                        </div>
                        <div className="travelerName">
                            <span>Traveler 3</span>
                            <p>@travaler3</p>
                        </div>
                    </div>
                    <div className="singleTraveler">
                        <img src={france} className='destinationImages' />
                        <div className="travelerDetails">
                            <div className="travelerPicture">
                                <img src={person} className='travelerImage' />
                            </div>
                        </div>
                        <div className="travelerName">
                            <span>Traveler 4</span>
                            <p>@travaler4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Travelers