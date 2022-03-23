import React from "react";
function Footer() {
    const getYear=()=>{
        return new Date().getFullYear()
    }
  return (
    <div className="bg-blue-500 border-2 border-gray-50 grid place-items-center flex-col gap-0 text-2 h-18 text-white">
      <p><span className="text-red-700 text-xl  align-middle">&hearts;</span> &copy; {getYear()} Mark Okoth</p>
      <p><a href="mailto:markokoth96@gmail.com">markokoth96@gmail.com</a></p>
      <p><a href="tel:+254791236814">+254 791236814</a></p>
    </div>
  );
}

export default Footer;
