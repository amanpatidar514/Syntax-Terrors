import React from 'react'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../global/gloablState'

const Home = ({ history }) => {

    const user = useRecoilValue(userAtom)

    const handleCTA = () => {
        if (user) {
            history.push('/dashboard')
        } else {
            history.push('/signup')
        }
    }

    return (
        <div className="Home">
            <div className="header">

                <div className="left">
                    <h1>Welcome to stockify</h1>
                    <p>Store your warehouse stocks and get an all-automated stockholder
                    registry, with complete security. The Stockify gives you a platform
            where you can interact and manage your stocks.</p>
                    <button onClick={() => handleCTA()} className="cta rev">{user ? "Go to dashboard" : "Get Started"}</button>
                </div>

                <div className="right">
                    <img src={require("../assets/home_back.png")} alt="" />
                </div>
            </div>
            <div className="divider"></div>
            <div className="main-body">
                <div className="features">
                    <h1>Features</h1>
                    <div className="items">
                        <div className="item">
                            <img src="https://imgur.com/JAIyBSS.png"  width="300px" height="300px" alt="" />
                            <p>Advance operations on your Stocks with our app</p>
                        </div>
                        <div className="item">
                            <img src="https://imgur.com/zqIdRyZ.png" width="300px" height="300px" alt="" />
                            <p>We care about your security so we have you assured on that</p>
                        </div>
                        <div className="item">
                            <img src="https://i.imgur.com/ISxxkzh.png" alt="" width="300px" height="300px" />
                            <p>Simple Creative UI/UX for you</p>
                        </div>
                    </div>
                </div>

                <div className="about-us">
                    <h1>About Us</h1>
                    <p className="desc">Members of Team Syntax Terrors</p>
                    <div className="items">
                        <div className="item">
                            <img src="https://imgur.com/C6OyhKo.png" height="300px" width="300px" alt="" />
                            <p>Aman Patidar</p>
                        </div>
                        <div className="item">
                            <img src="https://imgur.com/kgi8dgt.png" height="300px" width="300px" alt="" />
                            <p>Burhan Malu</p>
                        </div>
                        <div className="item">
                            <img src="https://imgur.com/pZDUDtH.png" height="300px" width="300px" alt="" />
                            <p>Atul Shukla</p>
                        </div>
                        <div className="item">
                            <img src="https://imgur.com/BEAPqUm.png" height="300px" width="300px" alt="" />
                            <p>Aman Jain</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
