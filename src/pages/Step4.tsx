import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Step4() {
    useEffect(() => {
        let data = localStorage.getItem('formData')
        if (data) {
            let parsedData = JSON.parse(data);
            console.log(parsedData);
            
        }
    }, [])
    return (
        <>
            <div className='route'>
                <h1>Finishing up</h1>
                <p className='request'>Double-check everything looks OK before confirming.</p>
            </div>
            <footer>
                <div className='step2_buttons'>
                    <Link to={'/add-ons'}><h4>Go Back</h4></Link>
                    <Link to={'/summary'}><button id='confirm' type='submit'>Confirm</button></Link>
                </div>
            </footer>
        </>
    )
}
