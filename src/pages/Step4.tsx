import { Link, useNavigate } from 'react-router-dom'
import { useMyContext } from '../Context'
import { useEffect } from 'react'


interface SelectedPlan {
    choice: string,
    img: string,
    month: number,
    year: number
}

const arr = {
    online_service: {
        month: 1,
        year: 10,
    },
    larger_storage: {
        month: 2,
        year: 20,
    },
    customizable_profile: {
        month: 2,
        year: 20,
    },
}

export default function Step4() {
    const { plan, month, addOns, planArray, setMonth, myObj } = useMyContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (myObj.name === '' && myObj.email === '' && myObj.phone === '') {
            navigate('/')
        }
    }, [])

    const selectedPlan: SelectedPlan = planArray.filter((item) => item.choice == plan)[0]
    return (
        <>
            <div className='route'>
                <h1>Finishing up</h1>
                <p className='request'>Double-check everything looks OK before confirming.</p>
                <div className="sum_content">
                    <div className="above">
                        <h3>{plan + `(${month ? "Monthly" : "Yearly"})`}</h3>
                        <p
                            className="block_price"
                            id='change'
                            onClick={() => {
                                setMonth(!month)
                            }}
                        >
                            Change
                        </p>
                        <p className="main_price">{month ? `+$${selectedPlan.month}/mo` : `+$${selectedPlan.year}/yr`}</p>
                    </div>
                    <hr />
                    <div className="sum_addons">
                        {
                            addOns.online_service ?
                                <div className="sum_add">
                                    <p className="block_price" style={{ fontSize: '14px' }}>Online service</p>
                                    <p className="add_ons_price2">{`+$${month ? "1/mo" : "10/yr"}`}</p>
                                </div>
                                :
                                null
                        }
                        {
                            addOns.larger_storage ?
                                <div className="sum_add">
                                    <p className="block_price" style={{ fontSize: '14px' }}>Larger storage</p>
                                    <p className="add_ons_price2">{`+$${month ? "2/mo" : "20/yr"}`}</p>
                                </div>
                                :
                                null
                        }
                        {
                            addOns.customizable_profile ?
                                <div className="sum_add">
                                    <p className="block_price" style={{ fontSize: '14px' }}>Customizable profile</p>
                                    <p className="add_ons_price2">{`+$${month ? "2/mo" : "20/yr"}`}</p>
                                </div>
                                :
                                null
                        }
                    </div>
                </div>
                <div className='total_sum_div'>
                    <p className="block_price" style={{ fontSize: "14px" }}>Total (per {month ? "month" : "year"})</p>
                    <p className="total_sum">
                        {
                            `+$${(selectedPlan.month +
                                (addOns.online_service ? arr.online_service.month : 0) +
                                (addOns.larger_storage ? arr.larger_storage.month : 0) +
                                (addOns.customizable_profile ? arr.customizable_profile.month : 0)) * (month ? 1 : 10) + (month ? "/mo" : "/yr")}`
                        }
                    </p>
                </div>
            </div>
            <footer>
                <div className='step2_buttons'>
                    <Link to={'/add-ons'}><h4>Go Back</h4></Link>
                    <Link to={'/confirmed'}><button id='confirm' type='submit'>Confirm</button></Link>
                </div>
            </footer>
        </>
    )
}
