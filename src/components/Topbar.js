import styled from 'styled-components'
import profilePic from '../assets/images/pic-1.jpg'

const Topbar = () => {
    return (
        <TopbarWrap>
            <div className="bar-inner-wrap flex-align-center">
                <div className="top-left flex-all-center">
                    <div className="top-date">December 18, 2021</div>
                    <div className="search-box flex-all-center">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 22L20 20" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <input placeholder="Search" />
                    </div>
                </div>
                <div className="top-right flex-all-center">
                    <div className="userinfo">
                        <div className="user-name">Samuel Offem</div>
                        <div className="user-type">Admin</div>
                    </div>

                    <div className="profile-pic">
                        <img src={profilePic} alt="profile-pic" />
                    </div>
                    
                </div>
            </div>
        </TopbarWrap>
    )
}

const TopbarWrap = styled.div`

    display: flex;
    justify-content: flex-end;

    .search-box{
        margin-left: 16px;
        border-bottom: 2px solid var(--border-color);
        padding-bottom: 6px;

        input{
            background: none;
            border: none;
            outline: none;
            margin-left: 6px;
        }
    }

    .top-right{
        margin-left: 24px;
    }
    .user-type{
        color: var(--text-color2);
        font-size: 14px;
        text-align: right;
    }
    .profile-pic{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 8px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

`
export default Topbar
