import React, { Suspense } from "react";
import { Profile } from "./Profile";
import { ProfileSkeleton } from "./ProfileSkeleton";

function App() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <Profile />
    </Suspense>
  );
}

export default App;
