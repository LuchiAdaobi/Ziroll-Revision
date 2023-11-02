import Photo from '../assets/card-photo.jpeg'
import Email from '../assets/email-icon.png'
import LinkedIn from '../assets/linkedin2.png'

export default function Info(){
    return(
        <div className='info'>
            <img src={Photo} alt="Black lady" className='image'/>
            <h1 className="name">Ada Obi</h1>
            <p className="role">Frontend Developer</p>
            <small>notsure.smith</small>

            <div className="contact">
                <div className="email">
                    <span><img src={Email} alt="email-icon" /></span>
                    <span> Email</span>
                </div>

                 <div className="linkedin">
                    <span><img src={LinkedIn} alt="linkedIn-icon" /></span>
                    <span> LinkedIn</span>
                </div>
            </div>
        </div>
    )
}