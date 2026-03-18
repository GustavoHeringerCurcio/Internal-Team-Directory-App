import DashboardHeader from "@/components/features/dashboard/DashboardHeader";
import PricingPlans from "@/components/features/pricing/PricingPlans";

export default function Pricing() {
  return (
    <>
      <DashboardHeader />
      <main className="flex flex-col items-center mt-10">
        <section className="flex flex-col items-center gap-4 max-w-2xl px-5">
          <h1 className="font-bold text-5xl">Pricing Plans</h1>
          <p className="text-lg text-gray-600 text-center">
            Choose the ideal plan for your team - demo version, no real benefits
          </p>

          <div className="mt-8 w-full">
            <PricingPlans />
          </div>
        </section>
      </main>
    </>
  );
}
