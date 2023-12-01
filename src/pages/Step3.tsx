import { Link } from 'react-router-dom'
import { useMyContext } from '../Context'
import { useForm } from 'react-hook-form'

export default function Step3() {
    const { month } = useMyContext()
    const { register, handleSubmit } = useForm()

    const onSubmit = (data: any) => {
        console.log(data);

    }
    return (
        <>
            <div className='route'>
                <h1>Pick add-ons</h1>
                <p className='request'>Add-ons help enhance your gaming experience.</p>
                <form className='add_ons_form'>
                    <label className='add_ons_block' htmlFor='first'>
                        <div className='add_on'>
                            <input
                                type="checkbox"
                                className='check'
                                id='first'
                                {...register('online service')}
                            />
                            <div>
                                <h3>Online service</h3>
                                <p className="block_price">Access to multiplayer games</p>
                            </div>
                        </div>
                        <p className="add_ons_price">{`+$${month ? "1/mo" : "10/yr"}`}</p>
                    </label>
                    <label className='add_ons_block' htmlFor='second'>
                        <div className='add_on'>
                            <input
                                type="checkbox"
                                className='check'
                                id='second'
                                {...register('larger storage')}
                            />
                            <div>
                                <h3>Larger storage</h3>
                                <p className="block_price">Extra 1TB of cloud save</p>
                            </div>
                        </div>
                        <p className="add_ons_price">{`+$${month ? "2/mo" : "20/yr"}`}</p>
                    </label>
                    <label className='add_ons_block' htmlFor='third'>
                        <div className='add_on'>
                            <input
                                type="checkbox"
                                className='check'
                                id='third'
                                {...register('customizable profile')}
                            />
                            <div>
                                <h3>Customizable profile</h3>
                                <p className="block_price">Custom theme on your profile</p>
                            </div>
                        </div>
                        <p className="add_ons_price">{`+$${month ? "2/mo" : "20/yr"}`}</p>
                    </label>
                </form>

            </div>
            <footer>
                <div className='step2_buttons'>
                    <Link to={'/plan'}><h4>Go Back</h4></Link>
                    <Link to={'/summary'}>
                        <button type='submit' onSubmit={handleSubmit(onSubmit)}>Next Step</button>
                    </Link>
                </div>
            </footer>
        </>
    )
}
