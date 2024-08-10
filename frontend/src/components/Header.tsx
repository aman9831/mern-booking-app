import { Link } from "react-router-dom";
import { useAppcontext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";


const Header = () => {
  const { isLoggedIn } = useAppcontext();
     
  return (
    <div className="bg-gradient-to-r from-[#003844] to-[#FFFDF7] py-6">
      <div className="container mx-auto flex items-center">
        <span className="text-3xl text-white pl-4 font-bold tracking-tight">
          <Link to="/">Trip<div style={{ display: 'inline-block' }} className="border-2 border-black rounded-tr-xl rounded-bl-xl rounded-tl-md rounded-br-md px-1 py-1 mx-1 bg-red-600">My</div>Make.com</Link>
        </span>
        <span className="flex space-x-2 ml-auto border-0 border-black rounded-lg">
          { isLoggedIn ? (
            <>
              <span><Link to="/my-bookings" style={{ color: '#09203F' }} className="flex text-lg items-center px-3 mt-1 font-bold hover:bg-gray-100">My Bookings</Link></span>
              <span><Link to="/my-hotels" style={{ color: '#09203F' }} className="flex text-lg items-center px-3 mt-1 font-bold hover:bg-gray-100">My Hotels</Link></span>
              <SignOutButton />
            </> 
            ) : (
            <Link to="/sign-in" className="flex bg-white items-center border-2 border-black text-blue-600 px-3 py-1 rounded-lg font-bold hover:bg-gray-100" style={{ color: '#09203F' }}>
            Login / Sign In 
          </Link>
            )
          }
        </span>
        <span className="flex ml-4 ">
        <select
            style={{ color: '#09203F' }}
            name="Language"
            className="bg-white  px-1 py-1 rounded-lg font-bold rounded hover:bg-gray-100">
            <option disabled selected value={''}>Language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
          </select>
        </span>
      </div>
      
    </div>
  );
};

export default Header;

