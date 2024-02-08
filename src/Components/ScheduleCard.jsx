import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const ScheduleCard = () => {
  return (
    <div className='schedule-card mt-4 flex flex-col gap-4 border-[2px] rounded-md p-3 '>
      <div className='flex justify-between'>
        <span className='text-xl font-medium'>Upcoming Schedule</span>
        <div className='border-[2px] p-1'>
        <span>Today, 13 Sep 2021</span>
        <ArrowDropDownRoundedIcon/>
        </div>
      </div>
      <div>
        <span className='text-gray-500'>Priority</span>
        <div className='flex justify-between bg-gray-200 p-2 rounded-md items-center'>
            <div>
                <h6 className='font-medium'>Review candidate applications</h6>
                <div>Today - 11.30 AM</div>
            </div>
            <MoreHorizRoundedIcon color='tertiary'/>
        </div>
      </div>
      <div>
        <span className='text-gray-500'>Other</span>
        <div className='flex justify-between bg-gray-200 p-2 items-center'>
            <div>
                <h6 className='font-medium'>Interview with candidates</h6>
                <div>Today - 10.30 AM</div>
            </div>
            <MoreHorizRoundedIcon color='tertiary'/>
        </div>

      </div>
      <div className='text-center text-red-500 font-medium hover:bg-red-500 hover:text-white cursor-pointer rounded-md p-2'>Create a new Schedule</div>
    </div>
  )
}

export default ScheduleCard
