import React from 'react'
import "./Header.css"
import Typical from 'react-typical'
import profileimg from '../../assets/mypic.png'

function Header() {
    return (
        <div className='header-container'>
            <div className='header-content'>
                <h1>Hey! Am</h1>
                <h2 className='fullname'>Karthik S</h2>
                <h2>
                    I'm a {" "}
                    <Typical 
                        steps={
                            [
                                " Full Stack Developer 💻", 1000,
                                " Chill Person 💙", 1000,
                                " Programmer 💻", 1000
                            ] 
                        } loop={Infinity} wrapper='b'
                    />
                </h2>
                <p>👉 I am a highly committed, hardworking, and creative worker. Also, I enjoy doing things my own way and being a leader who can have a huge influence and do something that would be make an impact on the society. </p>

                <div className='header-payment-container'>
                    <button>Hide Me</button>
                    <i className='fa-brands fa-paypal'></i>
                    <i className='fa-brands fa-cc-visa'></i>
                    <i className='fa-brands fa-cc-mastercard'></i>
                    <i className='fa-brands fa-cc-amex'></i>
                </div>
            </div>
            <div className='profile-img-container'>
                <img src={profileimg} alt="loading"/>
                <div className='circle-1'></div>
                <div className='circle-2'></div>
            </div>
        </div>
    )
}

export default Header