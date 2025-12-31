import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">EasyCare 365</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Care for your loved ones, from anywhere in the world. Premium healthcare subscription for elderly parents in Nepal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/onboarding/customer" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="h-4 w-4 text-emerald-500" />
                support@easycare365.com
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="h-4 w-4 text-emerald-500" />
                +977 1-XXXXXXX
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4 text-emerald-500 mt-0.5" />
                <span>Kathmandu, Nepal<br />Sydney, Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} EasyCare 365. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 text-sm">Payment Partners:</span>
            <div className="flex items-center gap-3">
              <div className="bg-slate-800 px-3 py-1 rounded text-xs font-medium">VISA</div>
              <div className="bg-slate-800 px-3 py-1 rounded text-xs font-medium">Mastercard</div>
              <div className="bg-slate-800 px-3 py-1 rounded text-xs font-medium">PayPal</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
