import AuthNav from 'components/AuthNav/AuthNav';

const WelcomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center md:items-start mb-[40px]">
        <div className="typing-container">
          <h1 className="typed welcome-title">Welcome to the app!</h1>
        </div>
        <p className="welcome-desc">
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
      </div>
      <div>
        <AuthNav />
      </div>
    </div>
  );
};

export default WelcomePage;
