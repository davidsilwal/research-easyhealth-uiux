import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-16 lg:px-16 lg:py-20">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Content */}
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
                <Heart className="h-4 w-4" />
                <span>Start caring today</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Give Your Parents the Care They Deserve
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Join hundreds of Nepali families in Australia who are already using EasyCare 365. 
                Start your subscription today and experience peace of mind.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4">
              <Link href="/onboarding/customer">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-600 hover:bg-white/90 shadow-xl group"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-white/80 text-sm">
                From just $1/day • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
