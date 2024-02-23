import { scrollToTop } from "../../../../pages/DrinkPage/services"
import IconUp from "./IconUp"


const ScrollBtn = ({}) => {
  return (
    <button type='button' className={` bottom-[0] right-[100px] `} onClick={() => scrollToTop()}> <IconUp /></button>
  )
}

export default ScrollBtn

