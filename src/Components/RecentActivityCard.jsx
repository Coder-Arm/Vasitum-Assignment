import { Button } from "@mui/material"

const RecentActivityCard = () => {
  return (
    <div style={{background : '#121843'}} className="recent-activity-card flex flex-col gap-2 text-white h-[45%] rounded-md">
      <div style={{background : '#1b204a'}} className="rounded-md p-4 font-medium">Recent Activity</div>
      <div className="p-4">
        <div className="text-sm text-gray-200">10.40 AM, Fri 8 Feb 2024</div>
        <div className="font-bold text-xl">You Posted a New Job</div>
        <div className="text-sm text-gray-300">Kindly check the requirements and terms of work and make sure everything is right.</div>
      </div>
      <div className="bottom-one pl-4 pr-4 flex justify-between items-center">
        <div>Today you makes 12 Activity</div>
        <Button style={{background : 'tomato'}} variant="contained">See All Activity</Button>
      </div>
    </div>
  )
}

export default RecentActivityCard
