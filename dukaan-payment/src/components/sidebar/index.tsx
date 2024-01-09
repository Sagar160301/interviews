import NavTop from './NavTop'
import NavBottom from './NavBottom'

const Sidebar = () => {
  return (
    <div className='bg-[#353C53] py-4 px-2.5 flex flex-col justify-between h-full'>
        <NavTop/>
        <NavBottom/>
    </div>
  )
}

export default Sidebar