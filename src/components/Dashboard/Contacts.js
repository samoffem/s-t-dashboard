import React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/images/pic-2.jpg'
import img2 from '../../assets/images/pic-3.jpg'
import img3 from '../../assets/images/pic-4.jpg'
import img4 from '../../assets/images/pic-5.jpg'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Contacts = () => {

    const data = [
        {
          name: 'A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <ContactsWrapper>

            <div className="inner-wrapper flex">
                <div className="contact-list-wrap">

                    <div className="headers flex-align-center justify-between">
                        <p>Contacts</p>
                        <p>View all</p>
                    </div>

                    <div className="contacts-list">
                        <div className="contact flex-align-center justify-between">
                            <div className="left flex-align-center">
                                <div className="contact-img">
                                    <img src={img1} alt="img" />
                                </div>
                                <div className="contact-desc">
                                    <p>Martin Black</p>
                                    <p>Coach</p>
                                </div>
                            </div>
                            <div className="right">
                                <span>
                                    <svg width="17" height="4" viewBox="0 0 17 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2" cy="2" r="2" fill="#292E39"/>
                                        <circle cx="8.5" cy="2" r="2" fill="#292E39"/>
                                        <circle cx="15" cy="2" r="2" fill="#292E39"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="contact flex-align-center justify-between">
                            <div className="left flex-align-center">
                                <div className="contact-img">
                                    <img src={img2} alt="img" />
                                </div>
                                <div className="contact-desc">
                                    <p>Jane Cooper</p>
                                    <p>Manager</p>
                                </div>
                            </div>
                            <div className="right">
                                <span>
                                    <svg width="17" height="4" viewBox="0 0 17 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2" cy="2" r="2" fill="#292E39"/>
                                        <circle cx="8.5" cy="2" r="2" fill="#292E39"/>
                                        <circle cx="15" cy="2" r="2" fill="#292E39"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="contact flex-align-center justify-between">
                            <div className="left flex-align-center">
                                <div className="contact-img">
                                    <img src={img3} alt="img" />
                                </div>
                                <div className="contact-desc">
                                    <p>Jacob Gate</p>
                                    <p>Player</p>
                                </div>
                            </div>
                            <div className="right">
                                <span>
                                    <svg width="17" height="4" viewBox="0 0 17 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2" cy="2" r="2" fill="#292E39"/>
                                        <circle cx="8.5" cy="2" r="2" fill="#292E39"/>
                                        <circle cx="15" cy="2" r="2" fill="#292E39"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="contact flex-align-center justify-between">
                            <div className="left flex-align-center">
                                <div className="contact-img">
                                    <img src={img4} alt="img" />
                                </div>
                                <div className="contact-desc">
                                    <p>Albert Fox</p>
                                    <p>Player</p>
                                </div>
                            </div>
                            <div className="right">
                                <span>
                                    <svg width="17" height="4" viewBox="0 0 17 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2" cy="2" r="2" fill="#292E39"/>
                                        <circle cx="8.5" cy="2" r="2" fill="#292E39"/>
                                        <circle cx="15" cy="2" r="2" fill="#292E39"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="chart-wrap">
                    <div className="headers chart-header flex-align-center justify-between">
                        <p>Half Year Work Results</p>
                        <p>Browse more</p>
                    </div>
                    <div className="chart-inner-wrap">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#f03c80" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#ffc961" />
                            <Line type="monotone" dataKey="amt" stroke="#505dd6" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    
                </div>
            </div>
            
        </ContactsWrapper>
    )
}

const ContactsWrapper = styled.div`
    
    margin-top: 15px;
    
    .contact-list-wrap{
        width: 319px;
        background-color: var(--background-color2);
        padding: 16px;
        border-radius: 8px;
    }

    .headers{
        p:first-child{
            font-size: 18px;
            margin-left: 4px;
        }
        p:last-child{
            font-size: 12px;
            color: var(--border-color);
        }
    }

    .chart-header{
        padding: 10px 22px;
    }

    .contact-img{
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .contact{
        margin-top: 10px;
    }
    .contact-desc{
        margin-left: 8px;

        p:last-child{
            color: var(--text-color2);
            font-size: 12px;
        }
    }

    .chart-wrap{
        width: calc(100% - 319px);
        height: 350px;
        background-color: var(--background-color2);
        border-radius: 8px;
        margin-left: 12px;

        .chart-inner-wrap{
            height: 300px;
        }
    }

    @media screen and (max-width: 1100px){
        .contact-list-wrap{
            width: 280px;
        }
        .chart-wrap{
            width: calc(100% - 280px);
        }
        .headers{
            p:first-child{
                font-size: 14px;
                margin-left: 4px;
            }
            p:last-child{
                font-size: 10px;
                color: var(--border-color);
            }
        }
    }

    @media screen and (max-width: 1023px){

        .inner-wrapper{
            flex-direction: column;
        }

        .contact-list-wrap{
            width: 100%;
        }
        .chart-wrap{
            width: 100%;
            margin-left: 0;
            margin-top: 20px;
        }
    }


`

export default Contacts
