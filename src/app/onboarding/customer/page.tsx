"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { pricingPlans, australianCities } from "@/data/mockData";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  CreditCard, 
  Shield, 
  User,
  MapPin,
  Phone,
  Mail,
  Heart
} from "lucide-react";

type Step = 1 | 2 | 3 | 4;

function CustomerOnboardingContent() {
  const searchParams = useSearchParams();
  const preselectedPlan = searchParams.get("plan") || "plus";
  
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedPlan, setSelectedPlan] = useState(preselectedPlan);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  });

  const progress = (currentStep / 4) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep((currentStep + 1) as Step);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((currentStep - 1) as Step);
  };

  const selectedPlanData = pricingPlans.find(p => p.id === selectedPlan);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <Header />
      
      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Progress Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/" className="text-slate-500 hover:text-slate-700">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Create Your Account</h1>
                <p className="text-slate-500">Step {currentStep} of 4</p>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between mb-12">
            {[
              { step: 1, label: "Select Plan", icon: Heart },
              { step: 2, label: "Your Details", icon: User },
              { step: 3, label: "Payment", icon: CreditCard },
              { step: 4, label: "Confirmation", icon: Check },
            ].map(({ step, label, icon: Icon }) => (
              <div key={step} className="flex flex-col items-center gap-2">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center transition-all ${
                  step < currentStep 
                    ? "bg-emerald-500 text-white" 
                    : step === currentStep 
                      ? "bg-emerald-100 text-emerald-600 ring-4 ring-emerald-500/20" 
                      : "bg-slate-100 text-slate-400"
                }`}>
                  {step < currentStep ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                </div>
                <span className={`text-xs font-medium ${
                  step <= currentStep ? "text-emerald-600" : "text-slate-400"
                }`}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: Plan Selection */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Choose Your Care Plan</h2>
                <p className="text-slate-500 mt-2">Select the best plan for your family&apos;s needs</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan) => (
                  <Card 
                    key={plan.id}
                    className={`cursor-pointer transition-all ${
                      selectedPlan === plan.id 
                        ? "ring-2 ring-emerald-500 shadow-lg" 
                        : "hover:shadow-md"
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <CardHeader className="text-center">
                      {plan.badge && (
                        <Badge className="w-fit mx-auto mb-2">{plan.badge}</Badge>
                      )}
                      <CardTitle className="text-lg">{plan.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-3xl font-bold">${plan.price}</span>
                        <span className="text-slate-500">/year</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {plan.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-end pt-6">
                <Button onClick={nextStep} size="lg">
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Personal Details */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-emerald-500" />
                    Your Information
                  </CardTitle>
                  <CardDescription>
                    Tell us about yourself. This information will be used for your account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-slate-400" />
                      Email Address
                    </Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-slate-400" />
                      Phone Number
                    </Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel"
                      placeholder="+61 4XX XXX XXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      City
                    </Label>
                    <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        {australianCities.map((city) => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back
                </Button>
                <Button onClick={nextStep} size="lg">
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-emerald-500" />
                      Payment Details
                    </CardTitle>
                    <CardDescription>
                      All transactions are secure and encrypted
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-4 bg-emerald-50 rounded-xl">
                      <Shield className="h-5 w-5 text-emerald-600" />
                      <span className="text-sm text-emerald-700">Your payment is protected by 256-bit SSL encryption</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-slate-50 to-emerald-50/50">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-white rounded-xl border">
                      <h3 className="font-semibold">{selectedPlanData?.name}</h3>
                      <p className="text-sm text-slate-500 mt-1">{selectedPlanData?.description}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Annual subscription</span>
                        <span>${selectedPlanData?.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Processing fee</span>
                        <span className="text-emerald-600">Free</span>
                      </div>
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total</span>
                          <span className="text-emerald-600">${selectedPlanData?.price}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 text-center">
                      14-day money-back guarantee • Cancel anytime
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back
                </Button>
                <Button onClick={nextStep} size="lg">
                  Complete Payment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="text-center space-y-8 animate-fade-in">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/30">
                <Check className="h-12 w-12 text-white" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900">Welcome to EasyCare 365!</h2>
                <p className="text-slate-500 mt-2 max-w-md mx-auto">
                  Your subscription has been activated. You can now register your loved ones who will receive care.
                </p>
              </div>

              <Card className="max-w-md mx-auto">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Plan</span>
                      <span className="font-semibold">{selectedPlanData?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Amount</span>
                      <span className="font-semibold text-emerald-600">${selectedPlanData?.price}/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Status</span>
                      <Badge variant="success">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/onboarding/patient">
                  <Button size="lg">
                    Register Your Loved One
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline">
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function LoadingFallback() {
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 flex items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <div className="animate-pulse text-center">
        <div className="h-12 w-12 rounded-full bg-emerald-200 mx-auto mb-4" aria-hidden="true"></div>
        <p className="text-slate-500">Loading...</p>
      </div>
    </div>
  );
}

export default function CustomerOnboarding() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CustomerOnboardingContent />
    </Suspense>
  );
}
