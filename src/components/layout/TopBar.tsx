import { Phone, Clock, Truck, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-foreground text-background/80 text-xs py-2">
      <div className="container-wide flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3" />
            <span>1-800-HART-MED</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>Mon-Fri: 8AM - 6PM EST</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2">
            <Truck className="w-3 h-3" />
            <span>Free Shipping on Orders $500+</span>
          </div>
          <span className="hidden lg:block">•</span>
          <div className="hidden lg:flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            <span>Serving Healthcare Nationwide</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
