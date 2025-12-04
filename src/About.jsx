import { useEffect, useState } from 'react'
import top from './assets/top.jpg'
import './css/About.css'

function About() {
    const oneYear = new Date('2024-12-07')
    const [timeSince, setTimeSince] = useState({ years: 0, months: 0, days: 0})


    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            let years = now.getFullYear() - oneYear.getFullYear()
            let months = now.getMonth() - oneYear.getMonth()
            let days = now.getDate() - oneYear.getDate()

            
            if (days < 0) {
                const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
                days += prevMonth.getDate()
                months -= 1
            }
            
            if (months < 0) {
                months += 12;
                years -= 1;
            }

            setTimeSince({ years, months, days })
        }
        
        updateTime()
        const interval = setInterval(updateTime, 1000 * 60 * 10)
        return () => clearInterval(interval)
    }, [])
    return (
        <>
            <div className="about-cont">
                <h1>Hi!</h1>
                <span className="divider"></span>
                <img src={top} alt="placeholder" className='top-pic'/>
                <p className="note">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>

                <div className="facts">
                    <div className="f-item">
                        <h2 className="f-title">Time Together</h2>
                        <div className='f-bottom'>
                            <div className="f-sub"><p>{timeSince.years}</p> {timeSince.years > 1 || timeSince.years == 0 ? 'Years': 'Year'}</div>   
                            <div className="f-sub"><p>{timeSince.months}</p> Months</div>  
                            <div className="f-sub"><p>{timeSince.days}</p> Days</div> 
                        </div>
                    </div>

                    <div className="f-item">
                        <h2 className="f-title">Day We First Met</h2>
                        <h2 className="f-sub">October 6th, 2024</h2>
                    </div>

                    <div className="f-item">
                        <h2 className="f-title">Day We Became Official</h2>
                        <h2 className="f-sub">December 7th, 2024</h2>
                    </div>

                    <div className="f-item">
                        <h2 className="f-title">Number of Trips Taken</h2>
                        <h2 className="f-sub">2</h2>
                    </div>

                    <div className="f-item">
                        <h2 className="f-title">Photos Taken of Each Other</h2>
                        <h2 className="f-sub">300+</h2>
                    </div>

                    <div className="f-item">
                        <h2 className="f-title">Times We've Said I Love You</h2>
                        <h2 className="f-sub">564,231,623+</h2>
                    </div>
                    
                    <div className="f-item">
                        <h2 className="f-title">Favorite Restaurant</h2>
                        <h2 className="f-sub">Jay Luigi's</h2>
                    </div>

                    <div className="f-item">
                        <h2 className="f-title">Our Song</h2>
                        <h2 className="f-sub">Glue Song - Beabadoobie</h2>
                    </div>

                    <div className="f-item">
                        <h2 className="f-title">Favorite Date</h2>
                        <h2 className="f-sub">Sarasota</h2>
                    </div>
                    
                    <div className="f-item">
                        <h2 className="f-title">Times She Said "I Can't Wait to be a Mom"</h2>
                        <h2 className="f-sub">32,165</h2>
                    </div>
                    
                    <div className="f-item">
                        <h2 className="f-title">Times She's Asked to be Babied</h2>
                        <h2 className="f-sub">984</h2>
                    </div>
                    
                    <div className="f-item">
                        <h2 className="f-title">Times She's Fallen Asleep Before me</h2>
                        <h2 className="f-sub">Every time lol</h2>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default About