import React from 'react'
import FindUs from './FindUs/FindUs'
import SocialLogin from './LoginComponents/SocialLogin'


function RightBar() {
    return (
        <div>
            <SocialLogin />


            <div>
                <FindUs />
            </div>

        </div>
    )
}

export default RightBar