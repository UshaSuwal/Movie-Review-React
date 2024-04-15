export function Button({color, icon, text }) {
    let buttonColorClass;
    if (color === "red") {
      buttonColorClass = "bg-red-400 hover:bg-red-500";
    } else {
      buttonColorClass = "bg-gray-400 hover:bg-gray-500";
    }
  
    return (
      <button
        className={`w-1/2 p-2 ml-1 text-white rounded-lg transition text-xl ${buttonColorClass}`}
        style={{ fontFamily: "Philosopher, sans-serif" }}
      >
        {text}
        <i className={icon}></i>
      </button>
    );
  }
  