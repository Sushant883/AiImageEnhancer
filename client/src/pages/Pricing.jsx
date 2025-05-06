import React from 'react';

const plans = [
  {
    name: "Free",
    price: "₹0",
    features: ["1 image/day", "Basic enhancements", "Email support"],
  },
  {
    name: "Pro",
    price: "₹499/mo",
    features: ["Unlimited images", "High-res output", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Contact us",
    features: ["Custom API access", "Team management", "24/7 support"],
  },
];

const Pricing = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-12 text-center text-black">Pricing Plans</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div key={index} className="border rounded-2xl p-6 bg-white dark:bg-[#1a1a1a] shadow-lg hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {plan.features.map((item, idx) => (
                <li key={idx}>✔️ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
