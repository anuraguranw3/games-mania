import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-[70%] p-3 m-auto text-center text-black rounded-lg bg-white/30 backdrop-blur-2xl">
      <div className="p-5 m-auto bg-white rounded">
        <h2 className="text-4xl">Error!</h2>
        <h3 className="text-2xl mt-5 mb-10">Page not found</h3>
        <Link to="/" className="text-2xl font-semibold underline text-blue-500 hover:text-black">Home</Link>
      </div>
    </div>
  );
};

export default Error;