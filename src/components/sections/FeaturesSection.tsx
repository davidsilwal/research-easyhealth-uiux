import { Card, CardContent } from "@/components/ui/card";
import { keyFeatures } from "@/data/mockData";
import { 
  Home, 
  Video, 
  Truck as Ambulance, 
  Pill, 
  TestTube, 
  Users 
} from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  Home,
  Video,
  Ambulance,
  Pill,
  TestTube,
  Users,
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-wide uppercase">
            Comprehensive Care
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Everything Your Parents Need, Covered
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From regular health checkups to emergency transport, we handle all aspects of elderly care 
            so you can focus on staying connected with your loved ones.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card key={index} className="card-hover border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25 mb-6">
                    {Icon && <Icon className="h-7 w-7 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
