import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { useMyContext } from '../Context'

type Inputs = {
    name: string,
    email: string,
    phone: string
}

export default function Step1() {

    const schema = yup.object().shape({
        name: yup.string().required('This field is required').matches(/^[A-Za-z\s]+$/, 'Letters only'),
        email: yup.string().required('This field is required').email('Not a valid email format'),
        phone: yup.string().required('This field is required')
    })

    const { myObj, setMyObj } = useMyContext()
    const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>({ resolver: yupResolver(schema) })
    let navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (data) {
            navigate("/plan")
            setMyObj(data)
        }
    }

    return (
        <>
            <div className='route'>
                <h1>Personal info</h1>
                <p className='request'>Please provide your name, email address, and phone number.</p>
                <form className="inputs">

                    <div className="input_div">
                        <label htmlFor="name">Name</label>
                        <input
                            id='name'
                            type="text"
                            defaultValue={myObj.name}
                            placeholder='e.g. Stephen King'
                            {...register('name')}
                        />
                        <p style={{ fontSize: '10px', color: 'red' }}>{errors.name?.message}</p>
                    </div>

                    <div className="input_div">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id='email'
                            type="email"
                            defaultValue={myObj.email}
                            placeholder='e.g. stephenking@lorem.com'
                            {...register('email')}
                        />
                        <p style={{ fontSize: '10px', color: 'red' }}>{errors.email?.message}</p>
                    </div>

                    <div className="input_div">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            id="phone"
                            type="number"
                            defaultValue={myObj.phone}
                            placeholder='e.g. +1 234 567 890'
                            {...register('phone',)}
                        />
                        <p style={{ fontSize: '10px', color: 'red' }}>{errors.phone?.message}</p>
                    </div>

                </form>

            </div>
            <footer>
                <div className='step1_buttons'>
                    <button onClick={handleSubmit(onSubmit)} type='submit'>Next Step</button>
                </div>
            </footer>
        </>
    )
}
