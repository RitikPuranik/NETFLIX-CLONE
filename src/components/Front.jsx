import bgimg from "../assets/bannerbg.jpg";
const Nav = () => {
  return (
    <>
      <div className=" py-5 bg-black text-white z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
        <div className="relative z-0">
          <div className="flex justify-between items-center">
            <div className="text-5xl font-bold text-red-600">NETFLIX</div>
            <div className=" flex">
              <div className=" focus:border-blue-500 focus:border-3">
                <select
                  className="pr-25 border p-1 mr-2 border-gray-500"
                  name=""
                  id=""
                >
                  <option className="text-black" value="English">
                    English
                  </option>
                  <option className="text-black" value="Hindi">
                    Arabic
                  </option>
                </select>
              </div>
              <button className="bg-red-600 px-5 py-1 rounded cursor-pointer">Sign In</button>
            </div>
          </div>
          <div className="py-30 flex flex-col items-center ">
            <div className="text-6xl font-bold w-150 text-center ">
              Unlimited movies, shows and more
            </div>
            <div className="py-5 font-bold text-[22px]">
              Starts at ₹149. Cancel at any time.
            </div>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="py-5">
              <input
                className="border p-5 border-gray-500 backdrop-blur-sm pr-70 mr-5"
                type="text"
                placeholder="Email Address"
              />
              <button className="bg-red-600 p-4  px-8 rounded text-2xl cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
