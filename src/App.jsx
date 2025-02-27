import './App.css'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Card from './components/Card'
import { useState } from 'react'
import Header from './components/Header'
import heroBg from './assets/more/3.png'
import coffeeOne from './assets/icons/1.png'
import coffeeTwo from './assets/icons/2.png'
import coffeeThree from './assets/icons/3.png'
import coffeeFour from './assets/icons/4.png'
import homeLeftBg from './assets/more/4.png'
import homeRight from './assets/more/5.png'
import Footer from './components/Footer'
import firstTea from './assets/cups/Rectangle 9.png'
import secondTea from './assets/cups/Rectangle 10.png'
import thirdTea from './assets/cups/Rectangle 11.png'
import forthTea from './assets/cups/Rectangle 12.png'
import fifthTea from './assets/cups/Rectangle 13.png'
import sixTea from './assets/cups/Rectangle 14.png'
import sevenTea from './assets/cups/Rectangle 15.png'
import eightTea from './assets/cups/Rectangle 16.png'


function App() {

  const loadCoffee = useLoaderData()
  // console.log(loadCoffee)
  const [coffees, setCoffees] = useState(loadCoffee);

  const Navigate =useNavigate()

  return (
    <>
      <div>
        <Header></Header>
      </div>

      <div className='text-white h-[650px] flex justify-end items-center'
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#3d2b1f', // Fixed background color
        }}>
        {/* <div></div> */}
        <div className='mr-30 space-y-4'>
          <h2 className='text-4xl '>Would you like a Cup of Delicious Coffee?</h2>
          <p>It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
          <button>Learn More</button>
        </div>
      </div>

      <div className='flex justify-around items-center py-14 bg-[#ECEAE3]'>
        <div className='space-y-2'>
          <img src={coffeeOne} alt="" />
          <h4>Awesome Aroma</h4>
          <p>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
        </div>

        <div className='space-y-2'>
          <img src={coffeeTwo} alt="" />
          <h4>High Quality</h4>
          <p>We served the coffee to you maintaining <br />the best quality</p>
        </div>

        <div className='space-y-2'>
          <img src={coffeeThree} alt="" />
          <h4>Pure Grades</h4>
          <p>The coffee is made of the green coffee <br /> beans which you will love</p>
        </div>

        <div className='space-y-2'>
          <img src={coffeeFour} alt="" />
          <h4>Proper Roasting</h4>
          <p>Your coffee is brewed by first roasting <br /> the green coffee beans</p>
        </div>
      </div>

      <div className='my-25'
        style={{
          background: `url(${homeLeftBg}) top left no-repeat, 
                       url(${homeRight}) bottom right no-repeat`,
          backgroundSize: '200px, 200px', // Adjust size as needed
        }}>
        <div className='text-center space-y-2 pb-6'>
          <h4>--- Sip & Savor ---</h4>
          <h2 className='text-4xl'>Our Popular Products</h2>
          <button onClick={() => Navigate("/addCoffee")} className='btn bg-[#E3B577] text-white'>Add Coffee</button>
        </div>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {
              coffees.map(coffee => <Card key={coffee._id} setCoffees={setCoffees} coffees={coffees} coffee={coffee}></Card>)
            }
          </div>
        </div>
      </div>
      <div className='max-w-6xl mx-auto my-10'>
        <div className='text-center space-y-3 my-4'>
        <h2>Follow Us Now</h2>
        <p className='text-4xl'>Follow on Instagram</p>
        </div>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 rounded-2xl'>
            <div>
              <img src={firstTea} alt="" />
            </div>
            <div>
              <img src={secondTea} alt="" />
            </div>
            <div>
              <img src={thirdTea} alt="" />
            </div>
            <div>
              <img src={forthTea} alt="" />
            </div>
            <div>
              <img src={fifthTea} alt="" />
            </div>
            <div>
              <img src={sixTea} alt="" />
            </div>
            <div>
              <img src={sevenTea} alt="" />
            </div>
            <div>
              <img src={eightTea} alt="" />
            </div>
          </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
