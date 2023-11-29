




export default function Tasks(){
    return(
        <main className="py-10">
  <div className="bg-white ">
  <div className="flex p-10 text-gray-800">
  <div className=" w-full">
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white shadow-sm rounded">
          <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-sm text-gray-500">Users</div>
            <div className="font-bold text-lg">1259</div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white shadow-sm rounded p-4">
          <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-sm text-gray-500">Orders</div>
            <div className="font-bold text-lg">230</div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white shadow-sm rounded p-4">
          <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-sm text-gray-500">New Clients</div>
            <div className="font-bold text-lg">190</div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white shadow-sm rounded p-4">
          <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-sm text-gray-500">Revenue</div>
            <div className="font-bold text-lg">$ 32k</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>

  <div className="p-10  ">
    <div className="my-5">
      <h2 className="text-lg font-semibold text-gray-900">Mentors</h2>
    </div>
    <div className="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
      <div className="mb-6 rounded-lg bg-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="mr-2 h-10 w-10 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Alex Stanton
              </h3>
              <span className="block text-xs font-normal text-gray-500">
                UI / UX Designer
              </span>
            </div>
          </div>
          <p className="text-sm font-medium text-indigo-500">
            <span className="mr-0.5">+</span>Follow
          </p>
        </div>
        <p className="my-6 text-sm font-normal text-gray-500">
          Hi, I'm Jessica Jane. I am a doctoral student at Harvard University
          majoring in Web . . .
        </p>
        <div className="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-2 h-5 w-5 text-base text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
              />
            </svg>
            <span className="mr-1">40</span> Task
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-1 h-5 w-6 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            4,7 (750 Reviews)
          </div>
        </div>
      </div>
      <div className="mb-6 rounded-lg bg-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="mr-2 h-10 w-10 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-900">Antoine</h3>
              <span className="block text-xs font-normal text-gray-500">
                Android Developer
              </span>
            </div>
          </div>
          <p className="text-sm font-medium text-indigo-500">
            <span className="mr-0.5">+</span>Follow
          </p>
        </div>
        <p className="my-6 text-sm font-normal text-gray-500">
          Hi, I'm Alex Stanton. I am a doctoral student at Oxford University
          majoring in UI / UX . . .
        </p>
        <div className="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-2 h-5 w-5 text-base text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
              />
            </svg>
            <span className="mr-1">40</span> Task
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-1 h-5 w-6 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            4,7 (750 Reviews)
          </div>
        </div>
      </div>
      <div className="mb-6 rounded-lg bg-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="mr-2 h-10 w-10 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Richard Kyle
              </h3>
              <span className="block text-xs font-normal text-gray-500">
                2D Design
              </span>
            </div>
          </div>
          <p className="text-sm font-medium text-indigo-500">
            <span className="mr-0.5">+</span>Follow
          </p>
        </div>
        <p className="my-6 text-sm font-normal text-gray-500">
          Hi, I'm Antoine Griezmann. I'm an Android Developer at Google company
          . . .
        </p>
        <div className="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-2 h-5 w-5 text-base text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
              />
            </svg>
            <span className="mr-1">40</span> Task
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-1 h-5 w-6 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            4,7 (750 Reviews)
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    )
}