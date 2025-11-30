import Close from './Close'
import Video from './Video'
import About from './About'
import Pics from './Pics'
import Trips from './Trips'
import './css/Home.css'
import Footer from "./Footer"
import Nav from "./Nav"
import './css/Nav.css'
import { useState } from 'react'
import Songs from './Songs'

function Home() {
    const [page, setPage] = useState('about')

    return (
        <>
        <div className="page">
            <Nav setPage={setPage}/>

            <div className="cont">
                { page === 'about' && <About />}
                { page === 'trips' && <Trips />}
                { page === 'pictures' && <Pics />}
                { page === 'songs' && <Songs />}
                { page === 'video' && <Video />}
                { page === 'close' && <Close />}
            </div>

            <Footer />

        </div>
        </>
    )
}

export default Home