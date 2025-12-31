"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  mockCustomers, 
  mockPatients, 
  mockActivities, 
  pricingPlans 
} from "@/data/mockData";
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Heart, 
  Home, 
  MapPin, 
  Phone, 
  Plus,
  Pill,
  Video,
  Truck as Ambulance,
  TestTube,
  Activity,
  FileText,
  Bell,
  Download,
  RefreshCcw
} from "lucide-react";

// Use first customer as the logged-in user
const currentCustomer = mockCustomers[0];
const customerPatients = mockPatients.filter(p => p.customerId === currentCustomer.id);
const currentPlan = pricingPlans.find(p => p.id === currentCustomer.subscriptionPlan);

const getActivityIcon = (type: string) => {
  switch (type) {
    case "home_visit": return Home;
    case "telehealth": return Video;
    case "nemt": return Ambulance;
    case "pharmacy": return Pill;
    case "lab_collection": return TestTube;
    default: return Activity;
  }
};

const getActivityColor = (type: string) => {
  switch (type) {
    case "home_visit": return "bg-blue-100 text-blue-600";
    case "telehealth": return "bg-purple-100 text-purple-600";
    case "nemt": return "bg-amber-100 text-amber-600";
    case "pharmacy": return "bg-pink-100 text-pink-600";
    case "lab_collection": return "bg-cyan-100 text-cyan-600";
    default: return "bg-slate-100 text-slate-600";
  }
};

export default function Dashboard() {
  const [selectedPatient, setSelectedPatient] = useState(customerPatients[0]?.id || "");
  const patientActivities = mockActivities.filter(a => a.patientId === selectedPatient);
  const selectedPatientData = customerPatients.find(p => p.id === selectedPatient);

  // Calculate days until next billing
  const nextBilling = new Date(currentCustomer.nextBillingDate);
  const today = new Date();
  const daysUntilRenewal = Math.ceil((nextBilling.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Welcome back, {currentCustomer.name.split(" ")[0]}! 👋
              </h1>
              <p className="text-slate-500 mt-1">
                Here&apos;s what&apos;s happening with your care plan
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Link href="/onboarding/patient">
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Patient
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-100 text-sm">Active Plan</p>
                    <p className="text-xl font-bold mt-1">{currentPlan?.name.replace("EasyCare 365 ", "")}</p>
                  </div>
                  <Heart className="h-10 w-10 text-white/30" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-sm">Patients Covered</p>
                    <p className="text-2xl font-bold mt-1 text-slate-900">{customerPatients.length}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-sm">Next Renewal</p>
                    <p className="text-2xl font-bold mt-1 text-slate-900">{daysUntilRenewal} days</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-sm">Services Used</p>
                    <p className="text-2xl font-bold mt-1 text-slate-900">
                      {patientActivities.filter(a => a.status === "completed").length}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Patient Selector */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Your Loved Ones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 overflow-x-auto pb-2">
                    {customerPatients.map((patient) => (
                      <button
                        key={patient.id}
                        onClick={() => setSelectedPatient(patient.id)}
                        className={`flex-shrink-0 p-4 rounded-xl border-2 transition-all ${
                          selectedPatient === patient.id
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className={selectedPatient === patient.id ? "bg-emerald-500 text-white" : ""}>
                              {patient.name.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-left">
                            <p className="font-semibold text-slate-900">{patient.name}</p>
                            <p className="text-sm text-slate-500">{patient.age} years old</p>
                          </div>
                        </div>
                      </button>
                    ))}
                    <Link href="/onboarding/patient" className="flex-shrink-0">
                      <div className="h-full p-4 rounded-xl border-2 border-dashed border-slate-300 hover:border-emerald-400 hover:bg-emerald-50 transition-all flex items-center gap-3 cursor-pointer">
                        <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                          <Plus className="h-5 w-5 text-slate-500" />
                        </div>
                        <span className="text-slate-600 font-medium">Add Patient</span>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Patient Details & Activity */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="health">Health Info</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  {selectedPatientData && (
                    <>
                      {/* Patient Info Card */}
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                            <div className="flex items-start gap-4">
                              <Avatar className="h-16 w-16">
                                <AvatarFallback className="text-lg bg-emerald-500 text-white">
                                  {selectedPatientData.name.split(" ").map(n => n[0]).join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="text-xl font-bold text-slate-900">{selectedPatientData.name}</h3>
                                <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-500">
                                  <span className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {selectedPatientData.city}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Phone className="h-4 w-4" />
                                    {selectedPatientData.phone}
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                  {selectedPatientData.healthConditions.map((condition, i) => (
                                    <Badge key={i} variant="secondary">{condition}</Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="text-left md:text-right">
                              <p className="text-sm text-slate-500">Care Coordinator</p>
                              <p className="font-semibold text-slate-900">{selectedPatientData.assignedCoordinator}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Next Scheduled */}
                      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <Calendar className="h-6 w-6 text-blue-600" />
                              </div>
                              <div>
                                <p className="text-blue-600 text-sm font-medium">Next Scheduled Visit</p>
                                <p className="text-lg font-bold text-slate-900">
                                  {new Date(selectedPatientData.nextScheduledVisit).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                  })}
                                </p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Reschedule
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </>
                  )}
                </TabsContent>

                <TabsContent value="activity" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Recent Activity</CardTitle>
                      <CardDescription>Service history for {selectedPatientData?.name}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {patientActivities.map((activity) => {
                        const Icon = getActivityIcon(activity.type);
                        const colorClass = getActivityColor(activity.type);
                        return (
                          <div key={activity.id} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${colorClass}`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className="font-semibold text-slate-900 capitalize">
                                  {activity.type.replace("_", " ")}
                                </p>
                                <Badge 
                                  variant={activity.status === "completed" ? "success" : activity.status === "scheduled" ? "default" : "destructive"}
                                >
                                  {activity.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-slate-500 mt-1">{activity.notes}</p>
                              <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(activity.date).toLocaleDateString()}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {activity.coordinator}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="health" className="space-y-4">
                  {selectedPatientData && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Health Information</CardTitle>
                        <CardDescription>Medical details for {selectedPatientData.name}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-slate-500">Age</p>
                              <p className="font-semibold">{selectedPatientData.age} years old</p>
                            </div>
                            <div>
                              <p className="text-sm text-slate-500">Gender</p>
                              <p className="font-semibold capitalize">{selectedPatientData.gender}</p>
                            </div>
                            <div>
                              <p className="text-sm text-slate-500">Last Visit</p>
                              <p className="font-semibold">
                                {new Date(selectedPatientData.lastVisitDate).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 mb-2">Health Conditions</p>
                            <div className="space-y-2">
                              {selectedPatientData.healthConditions.map((condition, i) => (
                                <div key={i} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                                  <Heart className="h-4 w-4 text-red-500" />
                                  <span className="font-medium">{condition}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <p className="text-sm text-slate-500 mb-2">Emergency Contact</p>
                          <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
                            <Phone className="h-5 w-5 text-amber-600" />
                            <span className="font-medium">{selectedPatientData.emergencyContact}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Subscription Card */}
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-emerald-400" />
                    Your Subscription
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-slate-400 text-sm">Current Plan</p>
                    <p className="text-xl font-bold">{currentPlan?.name}</p>
                    <p className="text-emerald-400 font-semibold">${currentPlan?.price}/year</p>
                  </div>

                  <Separator className="bg-slate-700" />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Status</span>
                      <Badge variant="success">Active</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Renewal Date</span>
                      <span>{new Date(currentCustomer.nextBillingDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <Button variant="outline" className="w-full bg-transparent border-slate-600 hover:bg-slate-700 text-white">
                      <RefreshCcw className="h-4 w-4 mr-2" />
                      Upgrade Plan
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full text-slate-400 hover:text-white hover:bg-slate-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download Invoice
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Video className="h-4 w-4 mr-3 text-purple-500" />
                    Schedule Teleconsultation
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Home className="h-4 w-4 mr-3 text-blue-500" />
                    Request Home Visit
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Pill className="h-4 w-4 mr-3 text-pink-500" />
                    Order Medication Refill
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Ambulance className="h-4 w-4 mr-3 text-amber-500" />
                    Book Transport
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </Button>
                </CardContent>
              </Card>

              {/* Support Card */}
              <Card className="bg-emerald-50 border-emerald-200">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Need Help?</h3>
                  <p className="text-sm text-slate-500 mt-1 mb-4">
                    Our care team is available 24/7
                  </p>
                  <Button size="sm" className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
