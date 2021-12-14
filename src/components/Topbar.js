import styled from 'styled-components'

const Topbar = () => {
    return (
        <TopbarWrap>
            <div className="bar-inner-wrap">
                <div className="top-left">
                    <div className="top-date">December 18, 2021</div>
                    <div className="search-box"></div>
                </div>
                <div className="top-right"></div>
            </div>
        </TopbarWrap>
    )
}

const TopbarWrap = styled.div`

`
export default Topbar
