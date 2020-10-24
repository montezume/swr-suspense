import React from "react";
import { useProfile } from "./hooks/useProfile";

export const Profile = () => {
  const { data } = useProfile();

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={data.profilePicture} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {data.firstName} {data.lastName}
        </div>
        <p className="text-gray-700 text-base">{data.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {data.interests.map(interest => (
          <span
            key={interest}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{interest}
          </span>
        ))}
      </div>
    </div>
  );
};
