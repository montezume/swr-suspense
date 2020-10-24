import React from "react";
import "./ProfileSkeleton.css";

export const ProfileSkeleton = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div
        style={{ width: "100%", paddingBottom: "66.70%" }}
        className="relative"
      >
        <div className="absolute top-0 left-0 h-full w-full">
          <span className="skeleton-box group-hover:scale-110 transition-transform transform-center block h-full" />
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex">
          <span className="skeleton-box h-5 w-16 inline-block" />
          <span className="ml-4 skeleton-box h-5 w-16 inline-block" />
        </div>
        <p className="text-gray-700 text-base">
          <span className="skeleton-box h-10 w-2/3 inline-block" />
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="skeleton-box h-6 w-16 rounded-full inline-block" />
        <span className="ml-4 skeleton-box h-6 w-16 rounded-full inline-block" />
        <span className="ml-4 skeleton-box h-6 w-16 rounded-full inline-block" />
      </div>
    </div>
  );
};
