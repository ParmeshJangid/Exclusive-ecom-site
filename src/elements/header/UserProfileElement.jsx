import React from "react";
import { MdLogout, MdHome } from "react-icons/md";

const UserProfileElement = ({ handleLogout }) => {
  return (
    <div className="absolute border top-8 right-0 bg-white shadow-xl rounded-md px-2 py-2 space-y-2 z-20">
      <div className="w-full min-w-[160px] space-y-2 flex flex-col justify-center">
        <div className="text-lg font-medium">Welcome: emilys</div>
        <button className="flex items-center gap-x-2 py-2 px-2 rounded-md hover:bg-gray-300/50 w-full">
          <MdHome className="text-2xl" />
          Profile
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center gap-x-2 py-2 px-2 rounded-md hover:bg-gray-300/50 w-full"
        >
          <MdLogout className="text-2xl" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfileElement;