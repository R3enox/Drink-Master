import sprite from "../../../assets/sprite.svg"


export const HeaderLogo = () => {
    return (
      <>
        <nav className="">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <svg className="mr-2" width={22} height={22} fill="white">
              <use
                className=" h-6 sm:h-9"
                alt=" Drink Master"
                href={sprite + `#icon-logo`}
              ></use>
            </svg>
            <span className="self-center text-s font-semibold whitespace-nowrap dark:text-white">
              Drink Master
            </span>
          </div>
        </nav>
      </>
    );
}