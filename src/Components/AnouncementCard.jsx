import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import PushPinIcon from '@mui/icons-material/PushPin';

const AnouncementCard = () => {
  return (
    <div className=' col-span-6 border-[2px] rounded-md p-4 flex flex-col gap-2 '>
      <div className='flex justify-between'>
            <span className='text-xl font-medium'>Anouncement</span>
            <div className='border-[2px] p-1'>
            <span>Today, 13 Sep 2021</span>
            <ArrowDropDownRoundedIcon/>
            </div>
      </div>
      <div className='flex justify-between bg-gray-200 p-2 rounded-md items-center'>
            <div>
                <h6 className='font-medium'>Review candidate applications</h6>
                <div className='text-sm text-gray-600'>5 minutes ago</div>
            </div>
            <div className='flex gap-4'>
            <span className='rotate-45'><PushPinIcon /></span>
            <MoreHorizRoundedIcon/>
            </div>
        </div>
        <div className='flex justify-between bg-gray-200 p-2 rounded-md items-center'>
            <div>
                <h6 className='font-medium'>Meeting HR Department</h6>
                <div className='text-sm text-gray-600'>Yesterday, 12: 30 pm</div>
            </div>
            <div className='flex gap-4'>
            <span className='rotate-45 text-gray-500'><PushPinIcon /></span>
            <MoreHorizRoundedIcon />
            </div>
        </div>
        <div className='text-center text-red-500 font-medium hover:bg-red-500 hover:text-white cursor-pointer rounded-md p-2'>See All Anouncement</div>
    </div>
  )
}

export default AnouncementCard
