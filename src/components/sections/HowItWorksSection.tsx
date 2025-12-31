import { howItWorksSteps } from "@/data/mockData";
import { CreditCard, UserPlus, ClipboardCheck, HeartPulse } from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  CreditCard,
  UserPlus,
  ClipboardCheck,
  HeartPulse,
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-wide uppercase">
            Simple Process
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            How EasyCare 365 Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Getting started is easy. Follow these simple steps to begin caring for your loved ones remotely.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {howItWorksSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Step Number & Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl shadow-emerald-500/30 rotate-3 hover:rotate-0 transition-transform duration-300">
                      {Icon && <Icon className="h-10 w-10 text-white" />}
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center text-emerald-600 font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-2">
            Ready to start caring for your loved ones?
          </p>
          <p className="text-emerald-600 font-semibold">
            Join 500+ families who trust EasyCare 365
          </p>
        </div>
      </div>
    </section>
  );
}
