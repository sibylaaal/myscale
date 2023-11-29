import { Link } from "react-router-dom"



export default function Nav(){
    const Navigations=[
        {name:"Home",link:"/user/"},
        {name:"Data",link:"/user/data"},
        {name:"Task",link:"/user/task"},
        {name:"Stats",link:"/user/stats"},
        {name:"Profile",link:"/user/profile"}


    ]
    return(
        <nav className=" p-10  bg-white dark:bg-gray-800 py-4">
  <div>
    
          <img src="/logo.png" alt="" className="  w-10 h-10 "/>
  </div>

  <ul className="mt-2 text-gray-700 dark:text-gray-400 capitalize">
     


    {/* Links */}
    {
        Navigations.map((el ,index)=>(
         <li key={index} className="mt-3 p-2 text-blue-600 dark:text-blue-300 rounded-lg">
      <Link to={el.link} className=" ">

        <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
          <path
            d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"
          />
        </svg>
        <span className="text-xs mt-2">{el.name}</span>
      </Link>
    </li>     
        ))
    }
  

  </ul>
  <div
    className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200
			dark:text-blue-500 rounded-full"
  >
    {/* important action */}
    <a href="#">
      <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
        <path
          d="M12 1c-5 0-9 4-9 9v7a3 3 0 003 3h3v-8H5v-2a7 7 0 017-7
						7 7 0 017 7v2h-4v8h4v1h-7v2h6a3 3 0
						003-3V10c0-5-4.03-9-9-9z"
        />
      </svg>
    </a>
  </div>
</nav>

    )
}