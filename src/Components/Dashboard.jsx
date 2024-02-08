import AnouncementCard from "./AnouncementCard"
import EmploeesAndTalent from "./EmploeesAndTalent"
import PosititonJobEmployeeCard from "./PosititonJobEmployeeCard"
import RecentActivityCard from "./RecentActivityCard"
import ScheduleCard from "./ScheduleCard"

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-medium">Dashboard</h1>
      <div className="mt-4 pr-4">

        <div className="company-stats flex gap-2 h-[85vh]">
         
          <div className="upper-stats grid w-[80%] gap-4 grid-rows-4 grid-cols-6">
         <PosititonJobEmployeeCard heading={'Available Positions'} number={24} alert={'4 Urgently needed'} background={'bg-red-100'} textColor={'text-red-500'} colStart={'col-start-1'} colEnd={'col-end-3'}/>
         <PosititonJobEmployeeCard heading={'Job Open'} number={10} alert={'4 Active hiring'} background={'bg-blue-100'} textColor={'text-blue-500'}  colStart={'col-start-3'} colEnd={'col-end-5'}/>
         <PosititonJobEmployeeCard heading={'New Employees'} number={24} alert={'4 Department'} background={'bg-pink-200'} textColor={'text-pink-500'}  colStart={'col-start-5'} colEnd={'col-end-7'}/>
         <EmploeesAndTalent colStart={'col-start-1'} colEnd={'col-end-4'}/>
         <EmploeesAndTalent colStart={'col-start-4'} colEnd={'col-end-7'}/>
         
         <AnouncementCard/> 
         </div>

          <div className="activity-schedule-box pl-2">
         <RecentActivityCard/>
         
         <ScheduleCard/>
         </div>
         
        </div>
      </div>
    </div>
  )
}

export default Dashboard
