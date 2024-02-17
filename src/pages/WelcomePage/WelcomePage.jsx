import AuthNav from '../../components/AuthNav/AuthNav';
// import * as pic from '../../assets/index';

const WelcomePage = () => {
  return (
    <section className="container pt-[304px] bg-mobile-bg-welcome h-full bg-contain bg-right bg-no-repeat  ">
      <div className="flex flex-col gap-10">
        <div className=" flex flex-col  items-center">
          {/* <img src={pic.image} alt="cocktail" /> */}
          <h1 className="text-welcome-text-color text-center text-[28px] mb-[14px]">
            Welcome to the app!
          </h1>
          <p className="text-welcome-text-color text-center w-[319px] text-sm">
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </p>
        </div>
        <div>
          <AuthNav />
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
