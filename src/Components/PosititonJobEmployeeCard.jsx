
const PosititonJobEmployeeCard = ({heading,number,alert,background,textColor,colStart,colEnd}) => {
  return (
       <div className={ background +' PosititonJobEmployeeCard p-4 rounded-md flex flex-col gap-3 row-start-1 row-end-3 ' + colStart+ " " + colEnd}>
            <div className="font-medium text-xl">{heading}</div>
            <div className="text-4xl font-bold">{number}</div>
            <div className={textColor}>{alert}</div>
        </div>
  )
}

export default PosititonJobEmployeeCard
