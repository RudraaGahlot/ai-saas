// import Navbar from "@/components/Navbar"
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default async function DashboardLayout({
    children
  }: {
    children: React.ReactNode;
  }) {
    // const apiLimitCount = await getApiLimitCount();
    // const isPro = await checkSubscription();
  
    return (
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        
        <Sidebar  />
        </div>
        <main className="md:pl-72">
          <Navbar />
          {children}
        </main>
      </div>
  
    );

}


//isPro={isPro} apiLimitCount={apiLimitCount}