import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'
import { useMyContext } from "../Context";

export default function ThankYou() {
    const navigate = useNavigate();
    const { myObj } = useMyContext();

    useEffect(() => {
        if (myObj.name === '' && myObj.email === '' && myObj.phone === '') {
            navigate('/')
        }
    }, [])

    return (
        <div className="route">
            <div className="thank_div">
                <img src="/assets/images/icon-thank-you.svg" alt="thank-you" className="thankyou" />
                <h2 className="thank_title">Thank you!</h2>
                <p className="thank_text">
                    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    )
}
