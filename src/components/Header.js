import call from '../assets/call.png'
import location from '../assets/loction.png'
import time from '../assets/time.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'
import linkden from '../assets/linkden.png'
import twitter from '../assets/twitter.png'

const Header = () => {
  return (
    <div className='bg-blue-600 h-14 flex items-center justify-between text-white space-x-4 px-5 text-sm'>
    <img alt='' src={call} className='h-5 w-5' /> {/* Adjust margin-right */}
    <span className='leading-none mr-4' style={{marginLeft:'0px'}}>+92 3455555396</span> {/* Adjust margin-right if necessary */}

    <img alt='' src={location} className='h-5 w-5' /> {/* Adjust margin-right */}
    <span className='leading-none' style={{marginLeft:'0px'}}>Westridge 1, Office #304-G Peshawar Road, Rawalpindi, Pakistan</span> {/* Adjust margin-right if necessary */}

    <img alt='' src={time} className='h-6 w-6 ' /> {/* Adjust margin-right */}




    <span style={{marginLeft:'0px'}}>Mon - Fri 8.00 - 20.00</span>
    <img alt='' src={facebook} className='h-6 w-6'/>
    <img alt='' src={insta} className='h-6 w-6'/>
    <img alt='' src={github} className='h-6 w-6'/>
    <img alt='' src={youtube} className='h-6 w-6'/>
    <img alt='' src={linkden} className='h-6 w-6'/>
    <img alt='' src={twitter} className='h-6 w-6'/>
<span>Login</span>
<span>Register </span>





</div>

  )
}

export default Header
