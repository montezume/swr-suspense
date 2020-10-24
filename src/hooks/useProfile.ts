import useSWR, { responseInterface } from "swr";
import { mockProfile } from "./mockProfile";

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

type Profile = typeof mockProfile;

interface SuspenseResponseInterface extends responseInterface<Profile, any> {
  data: Profile;
}

export const useProfile = () => {
  return useSWR(
    "profile",
    async () => {
      await timeout(1500);
      return mockProfile;
    },
    { suspense: true }
  ) as SuspenseResponseInterface;
};
