import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './Home.scss'
import Navbar from '../Components/Navbar/Navbar';
import Featured from '../Components/Featured/Featured';

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured type="movie"/>
    </div>
  )
}

export default Home