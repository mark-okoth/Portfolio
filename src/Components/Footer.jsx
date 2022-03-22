import React from "react";
function Footer() {
    const getYear=()=>{
        return new Date().getFullYear()
    }
  return (
    <div className="bg-blue-500 flex justify-center items-center text-2 h-16 text-white">
      <p><span className="text-red-700 text-xl  align-middle">&hearts;</span> &copy; {getYear()} Mark Okoth</p>
    </div>
  );
}

export default Footer;
