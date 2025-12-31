import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Globe } from "lucide-react";
import { stats } from "@/data/mockData";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Trusted by 500+ families in Australia
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Care for Your{" "}
              <span className="gradient-text">Loved Ones</span>{" "}
              From Anywhere
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              EasyCare 365 provides comprehensive healthcare subscription for your elderly parents in Nepal. 
              Stay connected, stay informed, and ensure they receive the best care — all for just{" "}
              <span className="font-semibold text-emerald-600">$1/day</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/onboarding/customer">
                <Button size="lg" className="w-full sm:w-auto group">
                  Start Your Subscription
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Pricing
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Shield className="h-5 w-5 text-emerald-600" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="h-5 w-5 text-emerald-600" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Globe className="h-5 w-5 text-emerald-600" />
                <span>Global Access</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl rotate-3 blur-sm opacity-20" />
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white">
                    <p className="text-3xl lg:text-4xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-emerald-50 rounded-2xl">
                <p className="text-sm text-emerald-800 font-medium text-center">
                  &quot;Connecting Nepali diaspora in Australia with quality care for parents in Nepal&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
