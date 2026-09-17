import React from "react";
import CommerceShell from "@/components/CommerceShell";
import { ShieldCheck, Sparkles, Scale, RefreshCw, Truck, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Supply, Sanctification & Cancellation Policy | Kashi Prasad",
  description: "Official legal guidelines, non-returnable sacred items policy, transit protection, and visual disclaimers.",
};

export default function RefundPolicyPage() {
  return (
    <CommerceShell
      title="Terms of Supply & Sacred Policy"
      copy="Legal conditions regarding Vedic consecration, non-returnable goods, visual representations, and transit protection."
    >
      <div className="mt-8 max-w-4xl mx-auto space-y-8 text-zinc-300 text-xs sm:text-sm leading-relaxed">
        {/* Binding Legal Notice */}
        <div className="rounded-2xl border border-amber-500/20 bg-zinc-950/80 p-6 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-serif text-base font-bold">
            <Scale className="h-4 w-4" />
            <h3>Binding Agreement & Statutory Compliance</h3>
          </div>
          <p className="text-zinc-400 text-xs leading-relaxed">
            By accessing this platform, initiating an order, or completing payment on Kashi Prasad, the consumer explicitly agrees to and accepts the Terms of Supply, Sanctification Policies, and Visual Disclaimers set forth herein. These terms are published in compliance with the Consumer Protection (E-Commerce) Rules, 2020 and the Indian Contract Act, 1872.
          </p>
        </div>

        {/* Section 1: Non-Returnable Goods (Customized & Perishable Goods) */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
          <h4 className="font-serif text-base font-bold text-zinc-100 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-amber-400" />
            1. Non-Returnable & Non-Refundable Policy (Statutory Exceptions)
          </h4>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Pursuant to the nature of spiritual articles, consecrated goods, personalized Sankalp rituals, and perishable offerings, goods once ordered and consecrated are <strong>Strictly Non-Returnable and Non-Refundable</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-zinc-400">
            <li>
              <strong className="text-zinc-200">Temple Prasad & Sacred Consumables:</strong> Consecrated Mahaprasad, Gangajal, and organic offering items cannot be returned or reused under applicable health, hygiene, and religious sanctity standards.
            </li>
            <li>
              <strong className="text-zinc-200">Personalized Consecration (Pran Pratishtha):</strong> Rudrakshas, Gemstones (Ratnas), Yantras, and Malas are individually purified and energized under customized Vedic Sankalp (Gotra and Name). Once sanctified, they carry personal spiritual energy and cannot be restocked or transferred.
            </li>
            <li>
              <strong className="text-zinc-200">Custom Vedic Puja Services:</strong> Rituals performed at Kashi Vishwanath or Ganga Ghats on behalf of the devotee cannot be revoked or refunded once scheduled/performed.
            </li>
          </ul>
        </div>

        {/* Section 2: Comprehensive Visual Disclaimer & Non-Exact Match Waiver (All Products) */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
          <h4 className="font-serif text-base font-bold text-zinc-100 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-amber-400" />
            2. Product Imagery, Visual Variations & Disclaimer of Exact Match (All Products)
          </h4>
          <p className="text-zinc-400 text-xs leading-relaxed">
            All images, digital renderings, mockups, color palettes, product videos, packaging boxes, and catalogue representations displayed on this Platform are published <strong>strictly for indicative, illustrative, and representational purposes only</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-2.5 text-xs text-zinc-400">
            <li>
              <strong className="text-zinc-200">Actual Product May Differ:</strong> The actual delivered article (including but not limited to its exact color shade, hue, luster, finish, surface polish, dimensions, weight, texture, engraving depth, packaging design, or visual aesthetics) <strong>may vary or differ from the digital images displayed on the website</strong>. This applies unconditionally to all goods—whether natural, organic, manufactured, cast, artificial, artisan-crafted, composite, or commercial.
            </li>
            <li>
              <strong className="text-zinc-200">Lighting & Display Disclaimers:</strong> Photographs are captured under specialized studio/temple illumination. Variations arising from device screen calibrations, resolution differences, camera optics, or manufacturing/sourcing batch changes are inherently acknowledged and accepted by the buyer prior to checkout.
            </li>
            <li>
              <strong className="text-zinc-200">Express Legal Waiver by Buyer:</strong> By placing an order, the buyer expressly covenants and agrees that any visual, aesthetic, shade, dimensional, or packaging variation between the website photograph and the delivered product <strong>shall NOT constitute a product defect, deficiency in service, deceptive practice, or misrepresentation</strong> under the Consumer Protection Act, 2019 or any other prevailing statute.
            </li>
            <li>
              <strong className="text-zinc-200">Exclusion of Aesthetic Claims:</strong> No return, refund, chargeback, or compensation request shall be entertained on grounds of color mismatch, personal expectation divergence, visual variation, or non-identical appearance with catalogue photography.
            </li>
          </ul>
        </div>

        {/* Section 3: Transit Damage & Free Replacement Procedure */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
          <h4 className="font-serif text-base font-bold text-zinc-100 flex items-center gap-2">
            <RefreshCw className="h-4 w-4 text-emerald-400" />
            3. Transit Damage & Replacement Protocol
          </h4>
          <p className="text-zinc-400 text-xs leading-relaxed">
            We ensure complete transit safety. In the rare event that an article is damaged in transit or an incorrect item is delivered, a <strong className="text-emerald-300">100% Free Express Replacement</strong> will be provided subject to the following mandatory verification:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-zinc-400">
            <li>
              <strong className="text-zinc-200">Mandatory Unboxing Video:</strong> The recipient must provide a continuous, uncut unboxing video showing the outer shipping label and the condition of the inner seal/item upon opening.
            </li>
            <li>
              <strong className="text-zinc-200">48-Hour Reporting Window:</strong> The video must be submitted to our customer care within 48 hours of confirmed courier delivery.
            </li>
            <li>
              Upon validation by our support team, a replacement unit will be dispatched without any additional shipping cost to the customer.
            </li>
          </ul>
        </div>

        {/* Section 4: Cancellation Window */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
          <h4 className="font-serif text-base font-bold text-zinc-100 flex items-center gap-2">
            <Truck className="h-4 w-4 text-amber-400" />
            4. Cancellation Window
          </h4>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Order cancellation requests are accepted strictly within <strong>4 hours of placement</strong> or before the item enters temple consecration. Once sanctification rituals have commenced or the consignment has been sealed for dispatch, cancellations cannot be entertained.
          </p>
        </div>

        {/* Section 5: Jurisdiction & Governing Law */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
          <h4 className="font-serif text-base font-bold text-zinc-100 flex items-center gap-2">
            <FileText className="h-4 w-4 text-amber-400" />
            5. Governing Law & Legal Jurisdiction
          </h4>
          <p className="text-zinc-400 text-xs leading-relaxed">
            All disputes, claims, or controversies arising out of or in connection with the purchase of goods or services from Kashi Prasad shall be governed by and construed in accordance with the laws of India, and shall be subject to the exclusive jurisdiction of the competent courts in <strong>Varanasi, Uttar Pradesh, India</strong>.
          </p>
        </div>

        {/* Contact Strip */}
        <div className="text-center pt-4 pb-8 space-y-2">
          <p className="text-xs text-zinc-500">
            For questions or genuine replacement claims under our policy:
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-mono">
            <a
              href="https://wa.me/918604971503"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              WhatsApp Support (+91 86049 71503)
            </a>
            <span className="text-zinc-700">•</span>
            <Link href="/track-order" className="text-amber-400 hover:underline">
              Track Order Status
            </Link>
          </div>
        </div>
      </div>
    </CommerceShell>
  );
}

