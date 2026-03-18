import PricingCard from "./PricingCard";

/**
 * PricingPlans Component
 * Grid of all pricing tier cards
 */
export default function PricingPlans() {
  const plans = [
    {
      title: "Free plan",
      price: "$0",
      buttonText: "Currently Plan",
      features: [
        { label: "Up to 20 team members", included: true },
        { label: "Basic member search", included: true },
        { label: "Basic filters (by role)", included: true },
        { label: "Export team list", included: false },
        { label: "Import members", included: false },
        { label: "Activity history", included: false },
        { label: "Priority support", included: false },
      ],
    },
    {
      title: "Premium plan",
      price: "$49",
      buttonText: "Upgrade to Premium",
      highlighted: true,
      features: [
        { label: "Unlimited team members", included: true },
        { label: "Advanced member search", included: true },
        { label: "Advanced filters (role, status, location, project)", included: true },
        { label: "Export team list", included: true },
        { label: "Import members", included: true },
        { label: "Activity history", included: true },
        { label: "Priority support", included: true },
      ],
    },
  ];

  return (
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-8 md:gap-4 justify-center">
      {plans.map((plan) => (
        <PricingCard
          key={plan.title}
          title={plan.title}
          price={plan.price}
          buttonText={plan.buttonText}
          features={plan.features}
          highlighted={plan.highlighted}
        />
      ))}
    </div>
  );
}
