import './css/Trips.css'
import sarasota from './assets/sara.jpg'
import tampa from './assets/tampa.jpg'
import fm from './assets/fm.jpg'

function Trips() {
    return (
        <>
            <div className="trips-cont">
                <h1>Trips!</h1>
                <span className="divider"></span>
                <h2 className='title'>Nothing is better than going away with you!</h2>
                <div className="trip-items">
                    <div className="t-item">
                        <img src={sarasota} alt="plcaeholder" className='item-img'/>
                        <div className="t-top">
                            <h3 className="t-title">Sarasota</h3>
                            <p className="t-date"><i>July 2025</i></p>
                        </div>
                        <p className="t-desc">Our first trip after not seeing each other for over a month</p>
                    </div>
                    
                    <div className="t-item">
                        <img src={tampa} alt="plcaeholder" className='item-img'/>
                        <div className="t-top">
                            <h3 className="t-title">Tampa/St-Pete</h3>
                            <p className="t-date"><i>August 2025</i></p>
                        </div>
                        <p className="t-desc">Second trip (basically back home lol) for your birthday!</p>
                    </div>

                    <div className="t-item">
                        <img src={fm} alt="plcaeholder" className='item-img'/>
                        <div className="t-top">
                            <h3 className="t-title">Fort Myers</h3>
                            <p className="t-date"><i>August 2025</i></p>
                        </div>
                        <p className="t-desc">Last time getting together in the summer before school</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Trips