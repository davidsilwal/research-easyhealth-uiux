"use client";

import { useState } from "react";
import Link from "next/link";
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
import { nepaliCities, healthConditions } from "@/data/mockData";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  User,
  MapPin,
  Phone,
  Heart,
  Stethoscope,
  UserPlus,
  Calendar
} from "lucide-react";

type Step = 1 | 2 | 3;

export default function PatientOnboarding() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    city: "",
    address: "",
    emergencyContact: "",
    emergencyContactName: "",
    selectedConditions: [] as string[],
    additionalNotes: "",
  });

  const progress = (currentStep / 3) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleCondition = (condition: string) => {
    setFormData({
      ...formData,
      selectedConditions: formData.selectedConditions.includes(condition)
        ? formData.selectedConditions.filter(c => c !== condition)
        : [...formData.selectedConditions, condition]
    });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep((currentStep + 1) as Step);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((currentStep - 1) as Step);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <Header />
      
      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Progress Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/dashboard" className="text-slate-500 hover:text-slate-700">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Register Your Loved One</h1>
                <p className="text-slate-500">Step {currentStep} of 3</p>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center gap-16 mb-12">
            {[
              { step: 1, label: "Basic Info", icon: User },
              { step: 2, label: "Health Details", icon: Stethoscope },
              { step: 3, label: "Confirmation", icon: Check },
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

          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserPlus className="h-5 w-5 text-emerald-500" />
                    Patient Information
                  </CardTitle>
                  <CardDescription>
                    Enter the details of your parent or elderly family member in Nepal
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        Date of Birth
                      </Label>
                      <Input 
                        id="dateOfBirth" 
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-slate-400" />
                      Phone Number (Nepal)
                    </Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel"
                      placeholder="+977 98XXXXXXXX"
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
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {nepaliCities.map((city) => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Full Address</Label>
                    <Input 
                      id="address" 
                      name="address"
                      placeholder="Enter complete address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContactName">Emergency Contact Name</Label>
                      <Input 
                        id="emergencyContactName" 
                        name="emergencyContactName"
                        placeholder="Neighbor/relative name"
                        value={formData.emergencyContactName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContact">Emergency Contact Phone</Label>
                      <Input 
                        id="emergencyContact" 
                        name="emergencyContact"
                        placeholder="+977 98XXXXXXXX"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between pt-6">
                <Link href="/dashboard">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Cancel
                  </Button>
                </Link>
                <Button onClick={nextStep} size="lg">
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Health Information */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-emerald-500" />
                    Health Information
                  </CardTitle>
                  <CardDescription>
                    This information helps our care team provide personalized care
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Existing Health Conditions</Label>
                    <p className="text-sm text-slate-500">Select all that apply</p>
                    <div className="flex flex-wrap gap-2">
                      {healthConditions.map((condition) => (
                        <button
                          key={condition}
                          type="button"
                          onClick={() => toggleCondition(condition)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            formData.selectedConditions.includes(condition)
                              ? "bg-emerald-500 text-white"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {condition}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      rows={4}
                      className="flex w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
                      placeholder="Any additional information about your loved one's health, mobility, or special requirements..."
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Our care coordinator will contact your loved one within 48 hours to conduct a comprehensive health assessment and create a personalized care plan.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back
                </Button>
                <Button onClick={nextStep} size="lg">
                  Complete Registration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="text-center space-y-8 animate-fade-in">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/30">
                <Check className="h-12 w-12 text-white" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900">Registration Complete!</h2>
                <p className="text-slate-500 mt-2 max-w-md mx-auto">
                  Your loved one has been registered successfully. Our care coordinator will reach out within 48 hours.
                </p>
              </div>

              <Card className="max-w-md mx-auto">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Patient</span>
                      <span className="font-semibold">
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Location</span>
                      <span className="font-semibold">{formData.city}, Nepal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Status</span>
                      <Badge variant="warning">Pending Assessment</Badge>
                    </div>
                    {formData.selectedConditions.length > 0 && (
                      <div>
                        <span className="text-slate-500 text-sm">Health Conditions:</span>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {formData.selectedConditions.map((condition) => (
                            <Badge key={condition} variant="secondary" className="text-xs">
                              {condition}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="p-4 bg-emerald-50 rounded-xl max-w-md mx-auto">
                <h3 className="font-semibold text-emerald-800 mb-2">What&apos;s Next?</h3>
                <ul className="text-sm text-emerald-700 text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="bg-emerald-200 text-emerald-800 rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                    Our care coordinator will call your loved one to introduce themselves
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-emerald-200 text-emerald-800 rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                    A comprehensive health assessment will be scheduled
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-emerald-200 text-emerald-800 rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                    You&apos;ll receive a personalized care plan via email
                  </li>
                </ul>
              </div>

              <div className="flex justify-center pt-4">
                <Link href="/dashboard">
                  <Button size="lg">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
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
