export const PageTitle = ({ title }) => {
  return (
    <div className="mt-[80px] mb-[40px] md:mt-[140px] md:mb-[60px]">
      <h2 className="text-primary-text-color text-[32px] leading-[1.19] md:text-[56px] md:leading-[1.1]">
        {title}
      </h2>
    </div>
  );
};
