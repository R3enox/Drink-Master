import { scrollToTop } from "../../../../pages/DrinkPage/services"
import IconUp from "./IconUp"


const ScrollBtn = () => {
  return (
    <button type='button' className={` absolute flex items-center justify-center bottom-[-1000] right-[100px] hover:scale-110 bg-primary-text-color text-grey-text-color p-[10px] rounded-[50px]`} onClick={() => scrollToTop()}> <IconUp /></button>
  )
}

export default ScrollBtn

