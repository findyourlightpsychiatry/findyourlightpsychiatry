import Image from "next/image";
import { config } from "@/lib/config";

const Footer = () => {
  return (
    <div className="relative w-full bg-gray-50 text-gray-600 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Find Your Light Psychiatry Logo"
              width={180}
              height={180}
              className="w-36 h-36 sm:w-44 sm:h-44 object-contain"
              priority={false}
            />
          </div>

          {/* Footer content */}
          <div className="text-center space-y-2 text-sm">
            <p className="font-semibold text-gray-700">{config.businessName}</p>
            <p>{"HIPAA-Compliant In-Person & Telepsychiatry"} &nbsp;|&nbsp; {"Copyright \u00A9"} {config.copyrightYear}</p>
            <p>{(config.location && typeof config.location === 'string' ? config.location.split(',')[0] : config.location) || 'Seattle'}, WA &nbsp;|&nbsp; Telehealth Statewide</p>
            <p className="italic text-gray-600">
              <em>Compassionate, Evidence-Based Care for Mind, Body, and Soul.</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

