import Chart1 from '../assets/dashboard/chart1.png'
const EmploeesAndTalent = ({colStart,colEnd}) => {
  return (
    <div className={"border-[2px] rounded-md p-4 flex justify-between row-start-3 row-end-5 "+ colStart+" " + colEnd}>
      <div className='flex flex-col gap-2'>
         <div className='text-xl font-medium'>Total Employees</div>
         <div className='text-4xl font-bold'>216</div>
         <div className='text-sm text-gray-500 mt-2'>120 Men</div>
         <div className='text-sm text-gray-500 mt-[-5px]'>96 Women</div>
      </div>
      <div>
        <img src={Chart1} alt="graph-img"/>
        <div className='bg-orange-100 p-1 rounded-md'>+2% Past month</div>
      </div>
    </div>
  )
}

export default EmploeesAndTalent
