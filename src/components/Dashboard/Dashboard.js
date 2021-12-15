import React from 'react'
import styled from 'styled-components'
import Contacts from './Contacts'
import Events from './Events'
import Schedule from './Schedule'

const Dasboard = () => {
    return (
        <DashboardWrapper>
            <h1 className="dash-header">Dashboard</h1>

            <div className="dashboard">
                <div className="main-board">
                    <Events />
                    <Contacts />
                </div>

                <div className="schedule-wrap">
                    <Schedule />
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
        
    }
`

export default Dasboard
