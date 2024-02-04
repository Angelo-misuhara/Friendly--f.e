import React from 'react'

const AuthPage = () => {
  return (
   <>
    <div id="login-popup" tabIndex="-1"
    className="bg-[#101010] overflow-y-auto overflow-x-hidden pt-[50%] md:pt-0 fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
    <div className="relative p-4 w-full max-w-md h-full md:h-auto">

        <div className="relative bg-[#101010] rounded-lg shadow">
            <div className="p-5">
                <div className="text-center">
                    <p className="mb-3 text-4xl font-semibold leading-5 text-[#f3f5f7]" id='titleLogin'>
                        Friendly!
                    </p>
                    <p className="mt-2 text-sm leading-4 text-[#f3f5f7]">
                       Share your thoughts to the world!
                    </p>
                </div>

                <div className="mt-7 flex flex-col gap-2">

                    <button
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                            src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub"
                            className="h-[18px] w-[18px] "/>
                        Continue with GitHub
                    </button>

                    <button
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                            src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
                            className="h-[18px] w-[18px] "/>Continue with
                        Google
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default AuthPage