import { login, signup } from './actions'

export default function LoginPage() {
  return (

  <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="login">
    <div className="text-center">
      <h2 className="text-4xl font-bold leading-tight primary-color">
        Sign in
      </h2>
    </div>
    <div className="max-w-[800px] mx-auto">
    <div className="mt-6 bg-[#161616] rounded-xl">
      <div className="p-10">
        <form >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">

            <div>
              <div className="mt-2.5">
                <input className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600" id="email" name="email" type="email" placeholder="Email" required />
              </div>
            </div>

            <div>
              <div className="mt-2.5">
                <input className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600" id="password" name="password" type="password" placeholder="password" required />
              </div>
            </div>

            <div className="sm:col-span-2">
              <button className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md" formAction={login}>Log in</button>
            </div>

            <div className="sm:col-span-2">
              <button className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md" formAction={signup}>Sign up</button>
            </div>

          </div>
        </form>
      </div>
    </div>
    </div>
  </div>


    
  )
}