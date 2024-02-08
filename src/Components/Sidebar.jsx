import CompanyLogo from '../assets/sidebar/vasitum-logo.png'
import DashboardLogo from '../assets/sidebar/ic_dashboard.png'
import RecruitmentLogo from '../assets/sidebar/ic_recruitment.png'
import ScheduleLogo from '../assets/sidebar/ic_calendar.png'
import EmployeeLogo from '../assets/sidebar/ic_employee.png'
import DepartmentLogo from '../assets/sidebar/ic_department.png'
import SupportLogo from '../assets/sidebar/ic_support.png'
import SettingsLogo from '../assets/sidebar/ic_settings.png'
import SmallLogo from '../assets/sidebar/logo.png'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const Sidebar = ({isCloseBtn,setIsCloseBtn}) => {
   

   function CloseSidebar(){
    document.querySelector('.sidebar-container').classList.remove('open-full-sidebar')
    document.querySelectorAll('.sidebar-names').forEach((element) => {
      element.style.display = 'none'
    })
    document.querySelector('.responsive-logo').style.display = 'unset'
    document.querySelector('.company-logo').style.display = 'none'
    setIsCloseBtn(false);
   }

  return (
    <div className='sidebar-container'>
      {isCloseBtn && <span onClick={CloseSidebar} className='fixed top-4 right-10'><HighlightOffIcon/></span>}
      <div>
        <img className='block m-auto mt-4 mb-4 company-logo' src={CompanyLogo} alt='vasitum-logo'/>
        <img className='responsive-logo m-auto mt-4 mb-4' src={SmallLogo} alt='small-logo'/>
        <div className='flex flex-col gap-4 p-4' >
          <span className='font-medium text-gray-400 each-sidebar-section'>MAIN MENU</span>

          <div className='flex gap-4 each-sidebar-section'>
          <img  src={DashboardLogo} alt='DashboardLogo'/>
          <span className='text-[red] sidebar-names'>Dashboard</span>  
          </div>

          <div className='flex gap-4 each-sidebar-section'>
          <img src={RecruitmentLogo} alt='RecruitmentLogo'/>
          <span className='hover:text-red-500 cursor-pointer sidebar-names'>Recruitment</span>  
          </div> 

          <div className='flex gap-4 each-sidebar-section'>
          <img src={ScheduleLogo} alt='ScheduleLogo'/>
          <span className='hover:text-red-500 cursor-pointer sidebar-names'>Schedule</span>  
          </div> 

          <div className='flex gap-4 each-sidebar-section'>
          <img src={EmployeeLogo} alt='EmployeeLogo'/>
          <span className='hover:text-red-500 cursor-pointer sidebar-names'>Employee</span>  
          </div> 

          <div className='flex gap-4 each-sidebar-section'>
          <img src={DepartmentLogo} alt='DepartmentLogo '/>
          <span className='hover:text-red-500 cursor-pointer sidebar-names'>Department</span>  
          </div>    
        </div>

        <div className='flex flex-col gap-4 p-4'>
            <span className='font-medium text-gray-400 each-sidebar-section'>OTHER</span>
            <div className='flex gap-4 each-sidebar-section'>
            <img src={SupportLogo} alt='SupportLogo '/>
             <span className='hover:text-red-500 cursor-pointer sidebar-names'>Support</span>  
            </div>

            <div className='flex gap-4 each-sidebar-section'>
            <img src={SettingsLogo} alt='SettingsLogo '/>
             <span className='hover:text-red-500 cursor-pointer sidebar-names'>Settings</span>  
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
