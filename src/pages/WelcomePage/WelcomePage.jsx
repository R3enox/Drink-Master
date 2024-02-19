import AuthNav from '../../components/AuthNav/AuthNav';

const WelcomePage = () => {
  return (
    <section className="welcome-container">
      <div className="flex flex-col md:px-[32px]">
        <div className="flex flex-col items-center md:items-start mb-[45px]">
          <h1 className="welcome-title">Welcome to the app!</h1>
          <p className="welcome-desc">
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
