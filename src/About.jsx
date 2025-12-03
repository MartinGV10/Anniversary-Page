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
                    <div className="time">
                        <h2 className="">Time Together</h2>
                        <p>{timeSince.years} {timeSince.years > 1 ? 'Years': 'Year'} {timeSince.months} Months {timeSince.days} Days</p>
                    </div>

                    <div className="trips-taken"></div>
                    <div className="">Trips Taken</div>
                </div>
            </div>
        </>
    )
}

export default About