import styled from "styled-components"
const Sidebar = () => {
    return (
        <SidebarWrap>
            <div className="sidebar-content">
                <h2 className="header-logo">Sport<br />Time</h2>

                <div className="side-menu">
                    <div className="menu-item">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.38 5.95667L14.66 1.255C12.8283 -0.0283349 10.0167 0.0416653 8.25499 1.40667L2.40999 
                                5.96833C1.24332 6.87833 0.321655 8.745 0.321655 10.215V18.265C0.321655 21.24 2.73665 23.6667 
                                5.71166 23.6667H18.2883C21.2633 23.6667 23.6783 21.2517 23.6783 18.2767V10.3667C23.6783 8.79167 
                                22.6633 6.855 21.38 5.95667ZM12.875 19C12.875 19.4783 12.4783 19.875 12 19.875C11.5217 19.875 11.125 
                                19.4783 11.125 19V15.5C11.125 15.0217 11.5217 14.625 12 14.625C12.4783 14.625 12.875 15.0217 12.875 
                                15.5V19Z" fill="white"/>
                            </svg>
                        </span>
                    </div>
                    <div className="menu-item">
                        <span>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5416 4.15334V2.33334C19.5416 1.85501 19.145 1.45834 18.6666 1.45834C18.1883 1.45834 17.7916 1.85501 
                            17.7916 2.33334V4.08334H10.2083V2.33334C10.2083 1.85501 9.81165 1.45834 9.33332 1.45834C8.85498 1.45834 8.45832 
                            1.85501 8.45832 2.33334V4.15334C5.30832 4.44501 3.77998 6.32334 3.54665 9.11168C3.52332 9.45001 3.80332 9.73001 
                            4.12998 9.73001H23.87C24.2083 9.73001 24.4883 9.43834 24.4533 9.11168C24.22 6.32334 22.6916 4.44501 19.5416 4.15334Z" 
                            fill="white"/>
                            <path d="M23.3333 11.48H4.66667C4.025 11.48 3.5 12.005 3.5 12.6467V19.8334C3.5 23.3334 5.25 25.6667 9.33333 
                            25.6667H18.6667C22.75 25.6667 24.5 23.3334 24.5 19.8334V12.6467C24.5 12.005 23.975 11.48 23.3333 11.48ZM10.745 
                            21.245C10.6867 21.2917 10.6283 21.35 10.57 21.385C10.5 21.4317 10.43 21.4667 10.36 21.49C10.29 21.525 10.22 21.5484 
                            10.15 21.56C10.0683 21.5717 9.99833 21.5834 9.91667 21.5834C9.765 21.5834 9.61333 21.5484 9.47333 21.49C9.32167 21.4317 
                            9.205 21.35 9.08833 21.245C8.87833 21.0234 8.75 20.72 8.75 20.4167C8.75 20.1134 8.87833 19.81 9.08833 19.5884C9.205 19.4834 
                            9.32167 19.4017 9.47333 19.3434C9.68333 19.25 9.91667 19.2267 10.15 19.2734C10.22 19.285 10.29 19.3084 10.36 19.3434C10.43 19.3667 
                            10.5 19.4017 10.57 19.4484C10.6283 19.495 10.6867 19.5417 10.745 19.5884C10.955 19.81 11.0833 20.1134 11.0833 20.4167C11.0833 20.72 
                            10.955 21.0234 10.745 21.245ZM10.745 17.1617C10.5233 17.3717 10.22 17.5 9.91667 17.5C9.61333 17.5 9.31 17.3717 9.08833 17.1617C8.87833 
                            16.94 8.75 16.6367 8.75 16.3334C8.75 16.03 8.87833 15.7267 9.08833 15.505C9.415 15.1784 9.92833 15.0734 10.36 15.26C10.5117 15.3184 
                            10.64 15.4 10.745 15.505C10.955 15.7267 11.0833 16.03 11.0833 16.3334C11.0833 16.6367 10.955 16.94 10.745 17.1617ZM14.8283 21.245C14.6067 
                            21.455 14.3033 21.5834 14 21.5834C13.6967 21.5834 13.3933 21.455 13.1717 21.245C12.9617 21.0234 12.8333 20.72 12.8333 20.4167C12.8333 
                            20.1134 12.9617 19.81 13.1717 19.5884C13.6033 19.1567 14.3967 19.1567 14.8283 19.5884C15.0383 19.81 15.1667 20.1134 15.1667 20.4167C15.1667 
                            20.72 15.0383 21.0234 14.8283 21.245ZM14.8283 17.1617C14.77 17.2084 14.7117 17.255 14.6533 17.3017C14.5833 17.3484 14.5133 17.3834 14.4433 
                            17.4067C14.3733 17.4417 14.3033 17.465 14.2333 17.4767C14.1517 17.4884 14.0817 17.5 14 17.5C13.6967 17.5 13.3933 17.3717 13.1717 17.1617C12.9617
                            16.94 12.8333 16.6367 12.8333 16.3334C12.8333 16.03 12.9617 15.7267 13.1717 15.505C13.2767 15.4 13.405 15.3184 13.5567 15.26C13.9883 15.0734 
                            14.5017 15.1784 14.8283 15.505C15.0383 15.7267 15.1667 16.03 15.1667 16.3334C15.1667 16.6367 15.0383 16.94 14.8283 17.1617ZM18.9117 21.245C18.69 
                            21.455 18.3867 21.5834 18.0833 21.5834C17.78 21.5834 17.4767 21.455 17.255 21.245C17.045 21.0234 16.9167 20.72 16.9167 20.4167C16.9167 20.1134 
                            17.045 19.81 17.255 19.5884C17.6867 19.1567 18.48 19.1567 18.9117 19.5884C19.1217 19.81 19.25 20.1134 19.25 20.4167C19.25 20.72 19.1217 21.0234 
                            18.9117 21.245ZM18.9117 17.1617C18.8533 17.2084 18.795 17.255 18.7367 17.3017C18.6667 17.3484 18.5967 17.3834 18.5267 17.4067C18.4567 17.4417 
                            18.3867 17.465 18.3167 17.4767C18.235 17.4884 18.1533 17.5 18.0833 17.5C17.78 17.5 17.4767 17.3717 17.255 17.1617C17.045 16.94 16.9167 16.6367 16.9167 
                            16.3334C16.9167 16.03 17.045 15.7267 17.255 15.505C17.3717 15.4 17.4883 15.3184 17.64 15.26C17.85 15.1667 18.0833 15.1434 18.3167 15.19C18.3867 
                            15.2017 18.4567 15.225 18.5267 15.26C18.5967 15.2834 18.6667 15.3184 18.7367 15.365C18.795 15.4117 18.8533 15.4584 18.9117 15.505C19.1217 15.7267 
                            19.25 16.03 19.25 16.3334C19.25 16.6367 19.1217 16.94 18.9117 17.1617Z" fill="white"/>
                            </svg>
                        </span>
                    </div>
                    <div className="menu-item">
                        <span>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 2.33333C7.44331 2.33333 4.95831 4.81833 4.95831 7.875C4.95831 10.8733 7.30331 13.3 10.36 13.405C10.4533 13.3933 10.5466 13.3933 10.6166 13.405C10.64 13.405 10.6516 13.405 10.675 13.405C10.6866 13.405 10.6866 13.405 10.6983 13.405C13.685 13.3 16.03 10.8733 16.0416 7.875C16.0416 4.81833 13.5566 2.33333 10.5 2.33333Z" fill="white"/>
                                <path d="M16.4267 16.5083C13.1717 14.3383 7.86335 14.3383 4.58502 16.5083C3.10335 17.5 2.28668 18.8417 2.28668 20.2767C2.28668 21.7117 3.10335 23.0417 4.57335 24.0217C6.20668 25.1183 8.35335 25.6667 10.5 25.6667C12.6467 25.6667 14.7933 25.1183 16.4267 24.0217C17.8967 23.03 18.7134 21.7 18.7134 20.2533C18.7017 18.8183 17.8967 17.4883 16.4267 16.5083Z" fill="white"/>
                                <path d="M23.3217 8.56331C23.5083 10.8266 21.8983 12.81 19.67 13.0783C19.6583 13.0783 19.6583 13.0783 19.6467 13.0783H19.6117C19.5417 13.0783 19.4717 13.0783 19.4133 13.1016C18.2817 13.16 17.2433 12.7983 16.4617 12.1333C17.6633 11.06 18.3517 9.44997 18.2117 7.69997C18.13 6.75497 17.8033 5.89164 17.3133 5.15664C17.7567 4.93497 18.27 4.79497 18.795 4.74831C21.0817 4.54997 23.1233 6.25331 23.3217 8.56331Z" fill="white"/>
                                <path d="M25.655 19.355C25.5617 20.4867 24.8383 21.4667 23.625 22.1317C22.4583 22.7734 20.9883 23.0767 19.53 23.0417C20.37 22.2834 20.86 21.3384 20.9533 20.335C21.07 18.8884 20.3817 17.5 19.005 16.3917C18.2233 15.7734 17.3133 15.2834 16.3217 14.9217C18.9 14.175 22.1433 14.6767 24.1383 16.2867C25.2117 17.15 25.76 18.235 25.655 19.355Z" fill="white"/>
                            </svg>
                        </span>
                    </div>
                    <div className="menu-item">
                        <span>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.8333 4.08334H8.16665C4.66665 4.08334 2.33331 5.83334 2.33331 9.91667V18.0833C2.33331 22.1667 4.66665 
                                23.9167 8.16665 23.9167H19.8333C23.3333 23.9167 25.6666 22.1667 25.6666 18.0833V9.91667C25.6666 5.83334 23.3333 
                                4.08334 19.8333 4.08334ZM20.3816 11.1883L16.73 14.105C15.96 14.7233 14.98 15.0267 14 15.0267C13.02 15.0267 12.0283 14.7233 
                                11.27 14.105L7.61831 11.1883C7.24498 10.885 7.18665 10.325 7.47831 9.95167C7.78165 9.57834 8.32998 9.50834 8.70331 9.81167L12.355 
                                12.7283C13.2416 13.44 14.7466 13.44 15.6333 12.7283L19.285 9.81167C19.6583 9.50834 20.2183 9.56667 20.51 9.95167C20.8133 10.325 20.755 
                                10.885 20.3816 11.1883Z" fill="white"/>
                                </svg>
                            </span>
                    </div>
                    <div className="menu-item">
                        <span>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.45 10.7567C21.3383 10.7567 20.475 9.2634 21.525 7.43173C22.1316 6.37007 21.77 5.01673 
                                20.7083 4.41007L18.69 3.25507C17.7683 2.70673 16.5783 3.0334 16.03 3.95507L15.9016 4.17673C14.8516 6.0084 
                                13.125 6.0084 12.0633 4.17673L11.935 3.95507C11.41 3.0334 10.22 2.70673 9.29831 3.25507L7.27998 
                                4.41007C6.21831 5.01673 5.85665 6.38173 6.46331 7.4434C7.52498 9.2634 6.66165 10.7567 4.54998 10.7567C3.33665 
                                10.7567 2.33331 11.7484 2.33331 12.9734V15.0267C2.33331 16.2401 3.32498 17.2434 4.54998 17.2434C6.66165 17.2434 
                                7.52498 18.7367 6.46331 20.5684C5.85665 21.6301 6.21831 22.9834 7.27998 23.5901L9.29831 24.7451C10.22 25.2934 
                                11.41 24.9667 11.9583 24.0451L12.0866 23.8234C13.1366 21.9917 14.8633 21.9917 15.925 23.8234L16.0533 24.0451C16.6016 
                                24.9667 17.7916 25.2934 18.7133 24.7451L20.7316 23.5901C21.7933 22.9834 22.155 21.6184 21.5483 20.5684C20.4866 
                                18.7367 21.35 17.2434 23.4616 17.2434C24.675 17.2434 25.6783 16.2517 25.6783 15.0267V12.9734C25.6666 11.7601 24.675 
                                10.7567 23.45 10.7567ZM14 17.7917C11.9116 17.7917 10.2083 16.0884 10.2083 14.0001C10.2083 11.9117 11.9116 10.2084 
                                14 10.2084C16.0883 10.2084 17.7916 11.9117 17.7916 14.0001C17.7916 16.0884 16.0883 17.7917 14 17.7917Z" fill="white"/>
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="more">
                    <div className="more-wrap">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </SidebarWrap>
    )
}

const SidebarWrap = styled.div`
    width: 159px;
    height: 100vh;
    position: fixed;

    .sidebar-content{
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .header-logo{
        text-align: right;
    }

    .side-menu{
        margin-top: 70px;
    }
    
    .menu-item{
        display: flex;
        justify-content: flex-end;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-right: 4px; 
        
        border: 2px solid var(--background-color);
        border-left: 0;
        border-radius: 0 35px 35px 0;
        cursor: pointer;
        transition: all .3s ease-in-out;

        :not(:first-child){
            margin-top: 30px;
        }

        

        :hover{
            border: 2px solid var(--border-color);
            border-left: 0;
        }
        span{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #292e39;
            display: flex;
            align-items: center;
            justify-content: center;
            
        }
    }

    .more{
        display: flex;
        justify-content: flex-end;
        padding-left: 4px;
        margin-top: auto;
        margin-bottom: 50px;
        cursor: pointer;

        .more-wrap{
            display: flex;
            justify-content: center;
            width: 50px;
            div{
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #292e39;

                :not(:first-child){
                    margin-left: 4px;
                }
            }
        }
    }
`

export default Sidebar
