import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="" />
            <div>
                <p>DATA ANALYTICS DASHBOARD</p>
                <h1>Manage Data Analytics Centerally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Optio, quis suscipit aliquam doloribus commodi nobis, 
                cupiditate adipisci, veniam neque voluptatibus dolore 
                natus possimus qui asperiores. Ea deserunt a et ipsa?
                </p>
            </div>
        </div>
    </div>
  )
}

export default Analytics
