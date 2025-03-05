import React from 'react'
import Header from '../Header'
import LatestNews from '../LatestNews/LatestNews'
import LeftBar from '../LayoutComponents/LeftNavbar/LeftBar'
import RightBar from '../LayoutComponents/RightNavbar/RightBar'
import News from '../Main/News'


import Navbar from '../Navbar/Navbar'

function HomeLayout() {
  return (
    <div className='  font-poppins  mx-auto'>

      <header> <Header /> </header>

      <section className='w-11/12 mx-auto'>
        <LatestNews />

      </section>



      <nav className='w-11/12 mx-auto py-2'>
        <Navbar />
      </nav>
      <main className=' w-11/12 mx-auto grid md:grid-cols-12  gap-3'>
        <aside className='  left col-span-3'>

          <LeftBar />
        </aside>
        <section className=' main col-span-6'> <News /></section>
        <aside className=' right  col-span-3'><RightBar />  </aside>


      </main>
    </div>
  )
}

export default HomeLayout