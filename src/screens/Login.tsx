import React from "react";
import FacebookIcon from "../assets/img/facebook.svg";
import GoogleIcon from "../assets/img/google.svg";
// import RocketVector from "../assets/img/rocket.svg";
export default function Login() {
  return (
    <>
      <section className="absolute w-full top-0">
        <div className="absolute h-screen w-screen bg-black"></div>

        <div className="container mx-auto px-4 flex content-center items-center justify-center h-full">
          <div className="relative w-full lg:w-4/12 px-4 pt-32">
            {/* <img
              src={RocketVector}
              alt="rocket"
              className="absolute -right-32 top-0 w-72"
            /> */}
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
              <div className="flex-auto px-4 lg:px-10 py-8">
                <div className="text-center mb-6">
                  <h6 className="text-gray-600 text-3xl font-bold">
                    Welcome to Muzo
                  </h6>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="Email"
                    >
                      Email
                    </label>
                    <input
                      name="Email"
                      type="email"
                      className="px-3 py-3 placeholder-gray-700 text-gray-700 bg-gray-50 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      className="px-3 py-3 placeholder-gray-700 text-gray-700 bg-gray-50 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full transition-all duration-300"
                      type="button"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
              <hr className="border-b-1 border-gray-400" />
              <div className="rounded-t mb-0 p-6">
                <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>or sign in with social media</small>
                </div>
                <div className="text-center">
                  <button
                    className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="facebook"
                      className="w-5 mr-1"
                      src={FacebookIcon}
                    />
                    Facebook
                  </button>
                  <button
                    className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs transition-all duration-150"
                    type="button"
                  >
                    <img alt="google" className="w-5 mr-1" src={GoogleIcon} />
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
