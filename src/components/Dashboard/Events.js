import React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/svg/img-1.svg'

const Events = () => {
    return (
        <Container>
            <div className="wrapper flex">
                <div className="welcome-board flex">
                    <div className="message flex-column">
                        <h2>Good Morning, Samuel</h2>
                        <div className="msg-group">
                            <p>Welcome to your daily calendar.</p>
                            <p>Here you can see all the upcoming events,<br />meetings and create new events</p>
                        </div>

                        <div className="create-btn">
                            <button>+ Create Events</button>
                        </div>
                    </div>
                    <div className="image-wrap">
                        <img src={img1} alt="img" />
                    </div>
                </div>

                <div className="reminder flex-column">
                    <h3>Reminder</h3>
                    <div className="switch1 flex-align-center">
                        <div className="switch-container">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className="switch-desc">
                            <p>Training session</p>
                            <p>10:00am</p>
                        </div>
                    </div>
                    <div className="switch2 flex-align-center">
                        <div className="switch-container">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className="switch-desc">
                            <p>Team meetings</p>
                            <p>1:00pm</p>
                        </div>
                    </div>

                    <div className="add-btn">
                        <button>+ Add new</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .wrapper{
        
    }
    .welcome-board{
        background-color: var(--border-color);
        max-width: 547px;
        height: 265px;
        overflow: visible;
        border-radius: 8px;
    }
    .message{
        height: 100%;
        width: 550%;
        padding: 16px;
    }
    .msg-group{
        margin-top: 16px;
        font-size: 18px;
    }
    .image-wrap{
        width: 45%;

        img{
          height: 110%;
          
        }
    }
    .create-btn{
        margin-top: auto;

        button{
            background-color: #fff;
            border: none;
            color: var(--border-color);
            padding: 8px;
            border-radius: 5px;
            font-weight: 600;
            cursor: pointer;
        }
    }

    .reminder{
        background-color: var(--background-color2);
        padding: 16px;
        border-radius: 8px;
        width: calc(100% - 547px);
        margin-left: 22px;
    }
    .switch1, .switch2{
        margin-top: 16px;
    }
    .switch{
        margin-bottom: 0;
        position: relative;
        display: inline-block;
        width: 52px;
        height: 26px;

        input{
            display: none;
        }
        .slider{
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: #434a59;
            transition: .4s;
            border-radius: 33px;
        }
        .slider:before{
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 0;
            bottom: 0;
            background-color: #fff;
            transition: .4s;
            border-radius: 50%;
        }
        input:checked + .slider{
            background-color: var(--color-green);
        }
        input:checked + .slider:before{
            transform: translateX(26px)
        }
    }
    .switch-desc{
        margin-left: 8px;

        p{
            font-size: 14px;
        }
    }

    .add-btn{
        margin-top: auto;
        display: flex;
        justify-content: center;
        button{
            border: 1px solid var(--border-color);
            color: var(--border-color);
            font-weight: 600;
            background: none;
            border-radius: 5px;
            padding: 8px;
            cursor: pointer;
        }
    }

`

export default Events
