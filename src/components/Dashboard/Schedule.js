import React, {useState} from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Schedule = () => {
    const [date, setDate] = useState(new Date())

    const onChange = (data)=>{
        setDate(data)
    }
    return (
        <ScheduleWrapper>
            <div className="inner-wrap">
                <Calendar onChange={onChange} value={date} />

                <div className="schedules">

                    <div className="headers flex justify-between">
                        <p>Schedule</p>
                        <p>View all</p>
                    </div>

                    <div className="schedule">

                        <div className="schedule-desc flex-align-center justify-between">
                            <div className="schedule-name green">Team meetings</div>
                            <span>
                                <svg width="17" height="4" viewBox="0 0 17 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#292E39"/>
                                    <circle cx="8.5" cy="2" r="2" fill="#292E39"/>
                                    <circle cx="15" cy="2" r="2" fill="#292E39"/>
                                </svg>
                            </span>
                        </div>

                        <div className="venue">BD & Treatment Centre</div>
                        <div className="schedule-time">4:15 pm - 6:00 pm</div>
                    
                    </div>
                    <div className="schedule">

                        <div className="schedule-desc flex-align-center justify-between">
                            <div className="schedule-name indigo">Medical checks</div>
                            <span>
                                <svg width="17" height="4" viewBox="0 0 17 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#292E39"/>
                                    <circle cx="8.5" cy="2" r="2" fill="#292E39"/>
                                    <circle cx="15" cy="2" r="2" fill="#292E39"/>
                                </svg>
                            </span>
                        </div>

                        <div className="venue">BD & Treatment Centre</div>
                        <div className="schedule-time">4:15 pm - 6:00 pm</div>
                    
                    </div>
                </div>
            </div>
        </ScheduleWrapper>
    )
}

const ScheduleWrapper = styled.div`

    .inner-wrap{
        padding: 16px;
    }

    .react-calendar{
        background: none;
        border: none;
        
        button{
            color: #fff;
        }
    }

    .schedules{
        padding-top: 20px;
    }
    .schedule{
        background-color: var(--background-color2);
        padding: 10px;
        margin-top: 15px;
        border-radius: 8px;

        .venue{
            margin-top: 10px;
            font-weight: 400;
        }
        .schedule-time{
            margin-top: 10px;
            color: var(--text-color2);
            font-size: 12px;
        }
        .schedule-name{
            padding: 8px;
            border-radius: 5px;
            font-size: 14px;
        }
        .green{
            background: #39bd45;
        }
        .indigo{
            background: #505dd6;
        }
    }
    .headers{
        p:first-child{
            font-size: 20px;
            margin-left: 4px;
        }
        p:last-child{
            font-size: 12px;
            color: var(--border-color);
        }
    }

`

export default Schedule
