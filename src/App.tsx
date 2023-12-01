import { Route, Routes, Link, useLocation } from 'react-router-dom'
import Step1 from './pages/Step1'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Step4 from './pages/Step4'

function App() {
  const location = useLocation()


  return (
    <div>
      <div className='header'>
        <nav>
          <ul>
            <li>
              <Link style={location.pathname == '/' ? {background: '#BEE2FD', borderColor: '#BEE2FD', color: '#022959'} : {}} className='sidebar_nums' to={'/'}>1</Link>
              <div className='nav_details'>
                <p className="header_step">STEP 1</p>
                <h2>YOUR INFO</h2>
              </div>
            </li>
            <li>
              <Link style={location.pathname == '/plan' ? {background: '#BEE2FD', borderColor: '#BEE2FD', color: '#022959'} : {}} className='sidebar_nums' to={'/plan'}>2</Link>
              <div className='nav_details'>
                <p className="header_step">STEP 2</p>
                <h2>SELECT PLAN</h2>
              </div>
            </li>
            <li>
              <Link style={location.pathname == '/add-ons' ? {background: '#BEE2FD', borderColor: '#BEE2FD', color: '#022959'} : {}} className='sidebar_nums' to={'/add-ons'}>3</Link>
              <div className='nav_details'>
                <p className="header_step">STEP 3</p>
                <h2>ADD-ONS</h2>
              </div>
            </li>
            <li>
              <Link style={location.pathname == '/summary' ? {background: '#BEE2FD', borderColor: '#BEE2FD', color: '#022959'} : {}} className='sidebar_nums' to={'/summary'}>4</Link>
              <div className='nav_details'>
                <p className="header_step">STEP 4</p>
                <h2>SUMMARY</h2>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
          <Route path='/' element={<Step1 />} />
          <Route path='/plan' element={<Step2 />} />
          <Route path='/add-ons' element={<Step3 />} />
          <Route path='/summary' element={<Step4 />} />
      </Routes>
    </div>
  )
}

export default App
