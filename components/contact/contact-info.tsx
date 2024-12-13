import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <MapPin className="h-6 w-6 text-primary" />
        <div>
          <h3 className="font-semibold">Address</h3>
          <p className="mt-1 text-sm text-gray-500">
            123 Energy Street, Sustainable City, India
          </p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <Mail className="h-6 w-6 text-primary" />
        <div>
          <h3 className="font-semibold">Email</h3>
          <p className="mt-1 text-sm text-gray-500">virspark369@gmail.com</p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <Phone className="h-6 w-6 text-primary" />
        <div>
          <h3 className="font-semibold">Phone</h3>
          <p className="mt-1 text-sm text-gray-500">+91 8697319384</p>
        </div>
      </div>

      <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2612045827064!2d73.91455931442687!3d18.562612287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1647834754782!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}