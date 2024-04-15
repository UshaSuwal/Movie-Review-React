export function Navbar(){
    return(
        
        <nav className="w-full bg-gray-800 p-4 text-white top-0 fixed" >
        <div className="container mx-auto flex justify-between">
          <span className="text-5xl font-bold text-red-500 ml-10" style={{ fontFamily: "Philosopher, sans-serif" }}>Todo<span className="text-gray-200">App <i className="fa-solid fa-list text-3xl"></i></span> </span>
        </div>
      </nav>
    
    )
}