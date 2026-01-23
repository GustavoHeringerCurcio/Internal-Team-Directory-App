'use client';

type Feature = {
  label: string
  included: boolean
}

type PlanCardProps = {
  title: string
  price: string
  period?: string
  features: Feature[]
  buttonText: string
  highlighted?: boolean
}

export default function PlanCard({
  title,
  price,
  period = "/month",
  features,
  highlighted = false,
  buttonText,
}: PlanCardProps) {


  return (
    <div
      className={`w-full md:w-full max-w-sm p-6 rounded-base shadow-xs border
        ${highlighted
          ? "bg-brand-soft border-brand"
          : "bg-neutral-primary-soft border-default"
        }`}
    >
      <h5 className="mb-4 text-xl font-medium text-body">{title}</h5>

      <div className="flex items-baseline text-heading">
        <span className="text-5xl font-extrabold tracking-tight">
          {price}
        </span>
        <span className="ms-2 font-medium text-body">{period}</span>
      </div>
      
      {/* ====== Payment Button ====== */}
      <button
        type="button"
        onClick={() => {
          if (title === "Free plan") {
            return; //do nothing
          }else {
            window.open("https://checkout.perfectpay.com.br/pay/PPU38CQ6GO2?", "_blank");
          }
        
        }}


        className={` my-5 w-full text-white shadow-xs font-medium rounded-base text-sm px-4 py-2.5 focus:outline-none
          ${highlighted
            ? "bg-brand hover:bg-brand-strong hover:scale-105 focus:ring-4 focus:ring-brand-medium active:scale-98"
            : "bg-gray-500 hover:bg-neutral-strong"
          }
        `}  
      >
        
        {buttonText} 
      </button>

      <ul role="list" className="space-y-4 ">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center ${!feature.included
                ? "line-through decoration-body text-body"
                : "text-body"
              }`}
          >
            <svg
              className="w-5 h-5 shrink-0 text-fg-brand me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span>{feature.label}</span>
          </li>
        ))}
      </ul>

      
    </div>
  );
}