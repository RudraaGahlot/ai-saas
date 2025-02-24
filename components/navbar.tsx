import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Ghost, Menu } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";

// import MobileSidebar from "@/components/mobile-sidbar";
// import { getApiLimitCount } from "@/lib/api-limit";
// import { checkSubscription } from "@/lib/subscription";

export default async function Navbar() {
//   const apiLimitCount = await getApiLimitCount();
//   const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar  />
      {/* <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} /> */}
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

// isPro={isPro} apiLimitCount={apiLimitCount}