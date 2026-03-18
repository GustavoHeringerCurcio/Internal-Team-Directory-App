import Header from "../components/navbar/Header";
import PlanCard from "../components/princingcards/PlanCard";

export default function Pricing() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col items-center mt-10">
        <section className="flex flex-col items-center gap-4 max-w-2xl px-5">
          <h1 className="font-bold text-5xl">Pricing Plans</h1>
          <p className="text-lg text-gray-600 text-center">
            Choose the ideal plan for your team - demo version, no real benefits

          </p>



            <div className="flex flex-row flex-wrap md:flex-nowrap gap-8 md:gap-4 justify-center  ">
              {/* FREE PLAN */}
              <PlanCard
                title="Free plan"
                price="$0"
                buttonText="Currently Plan"
                features={[
                  { label: "Up to 20 team members", included: true },
                  { label: "Basic member search", included: true },
                  { label: "Basic filters (by role)", included: true },
                  { label: "Export team list", included: false },
                  { label: "Import members", included: false },
                  { label: "Activity history", included: false },
                  { label: "Priority support", included: false },
                ]}
              />

              {/* PAID PLAN */}
              <PlanCard
                title="Premium plan"
                price="$49"
                buttonText="Upgrade to Premium"
                highlighted={true} 
                features={[
                  { label: "Unlimited team members", included: true },
                  { label: "Advanced member search", included: true },
                  { label: "Advanced filters (role, status, location, project)", included: true },
                  { label: "Export team list", included: true },
                  { label: "Import members", included: true },
                  { label: "Activity history", included: true },
                  { label: "Priority supports", included: true },
                ]}
              />


            </div>
        </section>
      </main>
    </>
  );
}
