import SearchIcon from '../assets/navbar/Union.png'
import MessageIcon from '../assets/navbar/Group.png'
import NotifyIcon from '../assets/navbar/ic_round-notifications.png'
import Avatar from '../assets/navbar/avatar.png'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({setIsCloseBtn}) => {

   function handleSidebar(){
      document.querySelector('.sidebar-container').classList.add('open-full-sidebar')
      document.querySelectorAll('.sidebar-names').forEach((element) => {
        element.style.display = 'unset'
      })
      document.querySelector('.responsive-logo').style.display = 'none'
      document.querySelector('.company-logo').style.display = 'unset'
      setIsCloseBtn(true)
   }

  return (
    <div className='flex pt-6 justify-between items-center'>
      <span onClick={handleSidebar} className=' cursor-pointer menu-icon'><MenuIcon/></span>
      <div className='search-input relative w-[30%]'>
      <input className=' p-1 border border-gray bg-slate-100 rounded-md focus:outline-none  w-[100%]' type='text' placeholder="Search"/>
       <img className='absolute top-2 right-4 ' src={SearchIcon} alt='search-icon'/>
      </div>
      <div className='flex gap-6 items-center'>
        <img src={NotifyIcon} alt='notify-icon'/>
        <img src={MessageIcon} alt='message-icon'/>
        <div className='flex items-center gap-2 mr-6'>
        <img className='rounded-full' src={Avatar} alt='avatar-logo'/>
        <span className='avatar-name'>Anonymous</span>
        <ArrowDropDownRoundedIcon/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
