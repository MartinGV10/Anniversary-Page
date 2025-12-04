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
                <p className="note">Hi baby, Happy Anniversary! I love you so much and I'm so glad that we've been able to spend the past year making so many fun memories and making each other better by working towards each other. I've grown so much in the past year and I couldn't have done it without you. We've had so many moments in the past 365 days, good and bad, but the most important thing is that we've grown to learn about each other more with each passing day! It feels like it was just yesterday that we met for the first time. I still get butterflies talking to you lol. <br /><br /> I figured that, since you helped me find my love with programming again, that I'd do something about it! So I decided to commemorate our 1 year anniversary by making this website to keep a record of our time together. Over time I'll develop it more so we can be able to add images to it  and stuff and improve how it looks and how it functions. I really hope that, alongside your actual gift, you love this just as much as I do because I made it with so much love and care. I love you so much baby, I'm so happy that we've been able to live so much life together, and I can't wait to see what the future has in store for us! <br /><br /><p className="love">❤️❤️❤️I love you!!!❤️❤️❤️</p></p>

                <span className="divider2"></span>

                <h1 className="title">Some Facts About Us!</h1>
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