import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pricingPlans } from "@/data/mockData";
import { Check, Sparkles } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-emerald-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-wide uppercase">
            Simple Pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Choose the Right Plan for Your Family
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            All plans include annual coverage. Cancel anytime within 14 days for a full refund.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative card-hover border-2 ${
                plan.highlighted 
                  ? "border-emerald-500 shadow-2xl shadow-emerald-500/20 scale-105 z-10" 
                  : "border-transparent"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 shadow-lg">
                    <Sparkles className="h-3 w-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pt-10 pb-6">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-sm text-slate-500 mt-2">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-slate-900">${plan.price}</span>
                  <span className="text-slate-500">/{plan.period}</span>
                </div>
                <p className="text-emerald-600 font-medium text-sm mt-2">
                  Only ${(plan.price / 365).toFixed(2)}/day
                </p>
              </CardHeader>

              <CardContent className="px-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-emerald-600" />
                      </div>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-8 pt-4">
                <Link href={`/onboarding/customer?plan=${plan.id}`} className="w-full">
                  <Button 
                    className="w-full" 
                    size="lg"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-4">Secure payments powered by</p>
          <div className="flex justify-center items-center gap-6">
            <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-100">
              <span className="font-bold text-slate-700">VISA</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-100">
              <span className="font-bold text-slate-700">Mastercard</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-100">
              <span className="font-bold text-slate-700">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
