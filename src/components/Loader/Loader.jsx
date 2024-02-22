import { DNA, InfinitySpin } from 'react-loader-spinner';
import {
  CircleLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
} from 'react-spinners';
// import css from './loader.module.css';

const Loader = () => {
  return (
    <div className="fixed top-[50%] left-[50%]">
      <DNA
        visible={true}
        height="80"
        width="80"
        color="#4070CD"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>

    // <div className="fixed top-[50%] left-[45%] ">
    //   <InfinitySpin
    //     visible={true}
    //     width="200"
    //     color="#4070CD"
    //     ariaLabel="infinity-spin-loading"
    //   />
    // </div>
    // <div className="fixed top-[50%] left-[50%]">
    //   {/* <PacmanLoader color="#4070CD" /> */}
    //   <CircleLoader color="#4070CD" />
    // </div>

    // <div className="fixed top-[50%] left-[50%]">
    //   <PropagateLoader color="#4070CD" />
    // </div>
  );
};

export default Loader;
