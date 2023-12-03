import { Route, Routes, Link, useLocation } from 'react-router-dom'
import { useMyContext } from './Context'
import Step1 from './pages/Step1'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Step4 from './pages/Step4'
import ThankYou from './pages/ThankYou'

function App() {
  const location = useLocation()
  const { myObj } = useMyContext()

  return (
    <div>
      <div className='header'>
        <nav>
          <ul>
            <li>
              <Link style={location.pathname == '/' ? { background: '#BEE2FD', borderColor: '#BEE2FD', color: '#022959' } : {}} className='sidebar_nums' to={location.pathname !== '/confirmed' ? '/' : location.pathname}>1</Link>
              <div className='nav_details'>
                <p className="header_step">STEP 1</p>
                <h2>YOUR INFO</h2>
              </div>
            </li>
            <li>
              <Link
                style={location.pathname == '/plan' ? { background: '#BEE2FD', borderColor: '#BEE2FD', color: '#022959' } : {}}
                className='sidebar_nums'
                to={
                  myObj.name !== '' &&
                    myObj.email !== '' &&
                    myObj.phone !== '' &&
                    location.pathname !== '/confirmed'
                    ?
                    '/plan'
                    :
                    location.pathname
                }
              >
                2
              </Link>
              <div className='nav_details'>
                <p className="header_step">STEP 2</p>
                <h2>SELECT PLAN</h2>
              </div>
            </li>
            <li>
              <Link
                style={location.pathname == '/add-ons' ? { background: '#BEE2FD', borderColor: '#BEE2FD', color: '#022959' } : {}}
                className='sidebar_nums'
                to={
                  myObj.name !== '' &&
                    myObj.email !== '' &&
                    myObj.phone !== '' &&
                    location.pathname !== '/confirmed'
                    ?
                    '/add-ons'
                    :
                    location.pathname
                }
              >
                3
              </Link>
              <div className='nav_details'>
                <p className="header_step">STEP 3</p>
                <h2>ADD-ONS</h2>
              </div>
            </li>
            <li>
              <Link
                style={location.pathname == '/summary' ? { background: '#BEE2FD', borderColor: '#BEE2FD', color: '#022959' } : {}}
                className='sidebar_nums'
                to={
                  myObj.name !== '' &&
                    myObj.email !== '' &&
                    myObj.phone !== '' &&
                    location.pathname !== '/confirmed'
                    ?
                    '/summary'
                    :
                    location.pathname
                }
              >
                4
              </Link>
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
        <Route path='/confirmed' element={<ThankYou />} />
      </Routes>
    </div>
  )
}

export default App
