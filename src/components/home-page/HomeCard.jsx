import miImagen from "./loginImage.png";
export const HomeCard = () => {
  return (
    <div className="bg-white w-[65%] h-[65%] rounded-tr-[3rem] rounded-bl-[3rem] shadow-2xl  ">
      <div className="w-full flex h-full">
        <img
          src={miImagen}
          alt="Descripción"
          className="h-full w-1/2  rounded-bl-[3rem] "
        />
        <div className="flex flex-col  text-center w-full px-16 py-8   gap-2">
          <h2 className="text-2xl font-thin mb-5">Welcome to</h2>
          <div>
            <h2 className="font-lalezar text-5xl mb-[-0.3em]">Learning</h2>{" "}
            <h1 className="font-lalezar text-8xl text-[#5EB0DC] ">Games</h1>
          </div>
          <form className="space-y-6">
            <div className=" items-center flex flex-col">
              <label
                htmlFor="user"
                className="block text-base font-medium self-start px-8 "
              >
                User:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                required
                className="mt-1 block w-[90%] px-3 py-3 border bg-[#D9D9D9] border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bgBlue focus:border-bgBlue"
              />
            </div>
            <div className="text-left flex flex-col items-center">
              <label
                htmlFor="password"
                className="block text-base font-medium self-start px-8"
              >
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-[90%] bg-[#D9D9D9] px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bgBlue focus:border-bgBlue"
              />
            </div>
            <div className="flex justify-between items-center px-8">
                <div className="flex">
                <input name="remember" id="remember" type="checkbox" className="w-5 h-5 mt-[0.15rem]"/> 
                <p className="font-bold ml-1">REMEMBER</p>
                </div>
                
                
                <p className="text-bgBlue underline cursor-pointer">FORGOT PASSWORD?</p>
            </div>
            <div className="flex justify-center flex-col items-center gap-2">
              <button
                type="submit"
                className="  w-1/3 flex justify-center py-4 px-4 border border-transparent rounded-xl font-lalezar shadow-xl text-4xl font-medium text-white bg-[#91ECBB] hover:bg-bgBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bgBlue"
              >
                Log In
              </button>
              <span className="underline cursor-pointer">Create account</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
