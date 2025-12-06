import './css/Pics.css'
import one from './assets/1.jpg'
import two from './assets/2.jpg'
import three from './assets/3.jpg'
import four from './assets/4.jpg'
import five from './assets/5.jpg'
import six from './assets/6.jpg'
import seven from './assets/7.jpg'
import eight from './assets/8.jpg'
import nine from './assets/9.jpg'
import ten from './assets/10.jpg'
import eleven from './assets/11.jpg'
import twelve from './assets/12.jpg'

function Pics() {
    return (
        <>
            <div className="pics-cont">
                <h1>Pictures!</h1>
                <span className="divider"></span>
                <div className="pic-items">
                    <div className="pics">
                        <img src={three} alt="placeholder" className='pic-img'/>
                        <div className="text">
                            <p>Date taken: Nov 15, 2025</p>
                            <p>Location: 42N</p> 
                        </div>
                    </div>

                    <div className="pics">
                        <img src={two} alt="placeholder" className='pic-img'/>
                        <div className="text">
                            <p>Date taken: Nov 16, 2025</p>
                            <p>Location: Car to Arcade</p> 
                        </div>
                    </div>

                    <div className="pics">
                        <img src={four} alt="placeholder" className='pic-img'/>
                        <div className="text">
                            <p>Date taken: Nov 1, 2025</p>
                            <p>Location: 42N</p> 
                        </div>
                    </div>

                    <div className="pics">
                        <img src={five} alt="placeholder" className='pic-img'/>
                        <div className="text">
                            <p>Date taken: Aug 2, 2025</p>
                            <p>Location: Naples</p> 
                        </div>
                    </div>

                    <div className="pics">
                        <img src={twelve} alt="placeholder" className='pic-img'/>
                        <div className="text">
                            <p>Date taken: Apr 26, 2025</p>
                            <p>Location: USFSP</p> 
                        </div>
                    </div>

                    <div className="pics">
                        <img src={ten} alt="placeholder" className='pic-img'/>
                        <div className="text">
                            <p>Date taken: Jun 28, 2025</p>
                            <p>Location: Sarasota</p> 
                        </div>
                    </div>

                    <div className="pics">
                        <img src={six} alt="placeholder" className='pic-img'/>
                        <div className="text">
                            <p>Date taken: Dec 3, 2025</p>
                            <p>Location: 42N</p> 
                        </div>
                    </div>

                    <div className="pics">
                        <img src={eight} alt="placeholder" className='pic-img'/>
                        <div className="text">
                            <p>Date taken: Aug 3, 2025</p>
                            <p>Location: Fort Myers</p> 
                        </div>
                    </div>

                    <div className="pics">
                        <img src={eleven} alt="placeholder" className='pic-img'/>
                        <div className="text">
                            <p>Date taken: Jun 28, 2025</p>
                            <p>Location: Sarasota</p> 
                        </div>
                    </div>

                    <div className="pics">
                        <img src={seven} alt="placeholder" className='pic-img'/>
                        <div className="text">
                            <p>Date taken: Nov 16, 2025</p>
                            <p>Location: 42N</p> 
                        </div>
                    </div>

                    <div className="pics">
                        <img src={one} alt="placeholder" className='pic-img'/>
                        <div className="text">
                            <p>Date taken: Nov 21, 2025</p>
                            <p>Location: 42N</p> 
                        </div>
                    </div>

                    <div className="pics">
                        <img src={nine} alt="placeholder" className='pic-img'/>
                        <div className="text">
                            <p>Date taken: Aug 1, 2025</p>
                            <p>Location: Fort Myers</p> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pics