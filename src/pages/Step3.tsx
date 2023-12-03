import { Link, useNavigate } from 'react-router-dom'
import { useMyContext } from '../Context'
import { SubmitHandler, useForm } from 'react-hook-form'
import {useEffect} from 'react'

export default function Step3() {
    const navigate = useNavigate();
    const { month, setAddOns, addOns, myObj } = useMyContext()
    const { register, handleSubmit, setValue, watch } = useForm<any>()

    useEffect(() => {
        if (myObj.name === '' && myObj.email === '' && myObj.phone === '') {
            navigate('/')
        }
    }, [])

    const arr = [
        {
            id: "online_service",
            title: "Online service",
            description: "Access to multiplayer games",
            month: "+$1/mo",
            year: "+$10/yr",
            watch: watch("online_service")
        },
        {
            id: "larger_storage",
            title: "Larger storage",
            description: "Extra 1TB of cloud save",
            month: "+$2/mo",
            year: "+$20/yr",
            watch: watch("larger_storage")
        },
        {
            id: "customizable_profile",
            title: "Larger storage",
            description: "Extra 1TB of cloud save",
            month: "+$2/mo",
            year: "+$20/yr",
            watch: watch("customizable_profile")
        }
    ]

    const onSubmit: SubmitHandler<any> = (data) => {
        if (data) {
            setAddOns(data);
            navigate('/summary')
        }
    }


    return (
        <>
            <div className='route'>
                <h1>Pick add-ons</h1>
                <p className='request'>Add-ons help enhance your gaming experience.</p>
                <form className='add_ons_form'>
                    {arr.map((item: any, index: number) => (
                        <label
                            key={index}
                            className='add_ons_block'
                            htmlFor={item.id}
                            style={item.watch === undefined && addOns[item.id] ? { borderColor: '#483EFF' } : item.watch ? { borderColor: '#483EFF' } : {}}
                            onClick={() => {
                                setValue(item.id, !addOns[item.id])
                            }}
                        >
                            <div className='add_on'>
                                <div className='checkbox_div'>
                                    <input
                                        type="checkbox"
                                        className='check'
                                        id={item.id}
                                        defaultChecked={addOns[item.id]}
                                        {...register(item.id)}
                                    />
                                    <div className='svg_div' style={item.watch === undefined && addOns[item.id] ? { backgroundColor: '#483EFF', borderColor: '#483EFF' } : item.watch ? { backgroundColor: '#483EFF', borderColor: '#483EFF' } : {}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                                            <path d="M1 4L4.43298 7.43298L10.866 1" stroke="white" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p className="block_price">{item.description}</p>
                                </div>
                            </div>
                            <p className="add_ons_price">{month ? item.month : item.year}</p>
                        </label>
                    ))}
                </form>

            </div>
            <footer>
                <div className='step2_buttons'>
                    <Link to={'/plan'}><h4>Go Back</h4></Link>
                    <button type='submit' onClick={handleSubmit(onSubmit)}>Next Step</button>
                </div>
            </footer>
        </>
    )
}
