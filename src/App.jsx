import './App.css'
import './assets/css/style.css'
import './assets/css/animate.css'
import './assets/css/mobile.css'
import './assets/css/super-classes.css'
import './assets/bootstarp/bootstrap.min.css'
import Skills from './Component/Skills.jsx'
import Portfolio from './Component/Portfolio.jsx'
import Tastimonials from './Component/Tastimonials.jsx'
import Blog from './Component/Blog.jsx'
import Form from './Component/Form.jsx'
import Footer from './Component/Footer.jsx'
import Navbar from './Component/Navbar.jsx'
import Services from './Component/Services.jsx'
import Home from './Component/Home'
import axios from 'axios'
import { useEffect, useState } from 'react'



function App() {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      setData(response.data);
      console.log(response?.data);

    }
    fetchData()
  }, [])


  useEffect(() => {
    console.log(data?.user.about);
  } , [data])



  return (
    <>
      <Navbar />
      <Home data={data?.user.about} social={data?.user.social_handles} />
      <Services data={data?.user.services}/>
      <Skills data={data?.user.skills} />
      <Portfolio data={data?.user.projects} />
      <Tastimonials data={data?.user.testimonials} />
      <Blog />
      <Form data={data} />
      <Footer data={data?.user.social_handles} />

    </>
  )
}

export default App
