import { useMyContext } from '../Context'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Step2() {
    let navigate = useNavigate()
    const { month, setMonth, plan, setPlan, planArray, myObj } = useMyContext()

    useEffect(() => {
        if (myObj.name === '' && myObj.email === '' && myObj.phone === '') {
            navigate('/')
        }
    }, [])

    return (
        <>
            <div className='route'>
                <h1>Select your plan</h1>
                <p className='request'>You have the option of monthly or yearly billing.</p>
                <div className="blocks">
                    {planArray.map((element, index: number) => (
                        <div
                            key={index}
                            className='block'
                            style={plan == element.choice ? { borderColor: '#483EFF', background: '#F8F9FF' } : {}}
                            onClick={() => { setPlan(element.choice) }}
                        >
                            <img src={element.img} alt="arcade" />
                            <div className='block_text'>
                                <h3>{element.choice}</h3>
                                <p className="block_price">${month ? element.month + "/mo" : element.year + "/yr"}</p>
                                <p className='free'>{!month ? '2 month free' : ''}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="month_year">
                    <p
                        style={month ? { color: '#022959' } : {}}
                        onClick={() => {
                            setMonth(true);
                        }}
                    >
                        Monthly
                    </p>
                    <div
                        className='switch'
                        onClick={() => {
                            setMonth(!month)
                        }}
                    >
                        <div
                            className="circle"
                            style={month ? { left: '3px' } : { right: '3px' }}
                        ></div>
                    </div>
                    <p
                        style={!month ? { color: '#022959' } : {}}
                        onClick={() => {
                            setMonth(false)
                        }}
                    >
                        Yearly
                    </p>
                </div>
            </div>
            <footer>
                <div className='step2_buttons'>
                    <Link to={'/'}><h4>Go Back</h4></Link>
                    <Link to={'/add-ons'}><button type='submit'>Next Step</button></Link>
                </div>
            </footer>
        </>
    )
}
