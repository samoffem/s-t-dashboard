import React from 'react'
import styled from 'styled-components'
import Contacts from './Contacts'
import Events from './Events'
import Schedule from './Schedule'

const Dashboard = ({showSchedule}) => {
    return (
        <DashboardWrapper>
            <h1 className="dash-header">Dashboard</h1>

            <div className="dashboard">
                <div className="main-board">
                    <Events />
                    <Contacts />
                </div>

                <div className={`schedule-wrap ${showSchedule? 'show':''}`}>
                    <Schedule/>
                </div>
            </div>
            
            
        </DashboardWrapper>
    )
}

const DashboardWrapper = styled.div`

    
    margin-top: 30px;

    .dash-header{
        margin-bottom: 30px;
        padding-left: 40px;
    }
    .dashboard{
        position: relative;
        overflow-x: hidden;
    }
    .main-board{
        width: calc(100% - 352px);
        padding-left: 40px;
        padding-right: 16px;
        
    }

    .schedule-wrap{
        width: 352px;
        height: 623px;
        position: absolute;
        right: 0;
        top: 0;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        background: var(--background-color);
        
    }

    @media screen and (max-width: 1260px){

        .main-board{
            width: calc(100% - 250px);
            padding-left: 30px;
        }
        .schedule-wrap{
            width: 250px;
        }
    }

    @media screen and (max-width: 767px){

        .main-board{
            width: 100%;
            padding-left: 10px;
        }
        .schedule-wrap{
            transform: translateX(500px);
            transition: all 0.3s ease-in-out;
        }
        .schedule-wrap.show{
            transform: translateX(0);
        }
    }
`

export default Dashboard
