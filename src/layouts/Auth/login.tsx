import { Link } from "react-router-dom";




export default function Loginelements(){  
    
    return(
        <div style={{ backgroundImage: "url('/bg.gif')",backgroundSize:"cover" }} className=" flex flex-col mx-auto  rounded-lg  ">
            <div>
 
            </div>
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form className="flex flex-col w-full h-full pb-6 text-center  rounded-3xl">
                <h3 className="mb-3 text-4xl font-extrabold text-white">
                  Sign In
                </h3>
                <p className="mb-4 text-white font-semibold">Enter your email and password</p>
                <a className="flex  bg-white  text-black items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl font-semibold bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                  <img
                    className="h-5 mr-2"
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                    alt=""
                  />
                  Sign in with Google
                </a>
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  <p className="mx-4 text-grey-600">or</p>
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                </div>
                <label
                  htmlFor="email"
                  className="mb-2 text-sm text-start text-white font-semibold"
                >
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="mail@loopple.com"
                  className="flex text-black items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-black font-semibold bg-grey-200 text-black rounded-2xl"
                />
                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-start text-white font-semibold"
                >
                  Password*
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter a password"
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-black font-semibold bg-grey-200 text-black rounded-2xl"
                />
                <div className="flex flex-row justify-between mb-8">
                  <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-purple-blue-500">
                      <img
                        className=""
                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                        alt="tick"
                      />
                    </div>
                    <span className="ml-3 text-sm font-normal text-white font-semibold">
                      Keep me logged in
                    </span>
                  </label>
                  <a
                    href="javascript:void(0)"
                    className="mr-4 text-sm font-medium text-cyan-600"
                  >
                    Forget password?
                  </a>
                </div>
                <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl focus:ring-4 focus:ring-purple-100 bg-cyan-600">
                  Sign In
                </button>
                <p className="text-sm leading-relaxed text-white font-semibold">
                  Not registered yet?{" "}
                  <Link to={'/register'} className="font-bold text-white font-semibold">
                    Create an Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      

    )
}

