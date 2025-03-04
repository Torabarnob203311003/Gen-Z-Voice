import React from 'react'
import Header from '../Header'
import LatestNews from '../LatestNews/LatestNews'

function HomeLayout() {
  return (
    <div className='   mx-auto'>

         <header> <Header/> </header>

         <section>
            <LatestNews/>

         </section>

<nav></nav>
<main></main>
    </div>
  )
}

export default HomeLayout