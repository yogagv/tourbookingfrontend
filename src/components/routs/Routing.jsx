import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Register from '../Register/Register'
import Signin from '../Signin/Signin'
import FeaturedTour from '../FeaturedTour/FeaturedTour'
import Experience from '../Experience/Experience'
import Gallery from '../Gallery/Gallery'
import Testmonials from '../Testimonials/Testmonials'
import Tour from '../Tour/Tour'
import TourCreation from '../TourCreation/TourCreation'
import SingleTour from '../SingleTour/SingleTour'
import TourFilter from '../TourFilter/TourFilter'
import TourFilterError from '../TourFilterError/TourFilterError'
import Thankyou from '../Thankyou/Thankyou'


const Routing = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/featuredtour' element={<FeaturedTour />}/>
        <Route path='/experience' element={<Experience />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/testimonials' element={<Testmonials />}/>
        <Route path='/tour' element={<Tour />}/>
        <Route path='/tourcreation' element={<TourCreation />}/>
        <Route path='/:id' element={<SingleTour />}/>
        <Route path='/tour/:id' element={<SingleTour />}/>
        <Route path='/tour/filter/:city/:id' element={<SingleTour />}/>
        <Route path='/thankyou' element={<Thankyou />}/>
        <Route path='/tour/filter/:city' element={<TourFilter />}/>
        <Route path='/tourfiltererror' element={<TourFilterError/>}/>
    </Routes>
    </div>
  )
}

export default Routing