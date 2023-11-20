import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Home from '../../Components/Home/Home'
import Search from '../../Components/Search/Search'
import Support from '../../Components/Support/Support'
import Travelers from '../../Components/Travelers/Travelers'

const Index = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Search />
            <Support />
            <Travelers />
            <Footer />
        </>
    )
}

export default Index;