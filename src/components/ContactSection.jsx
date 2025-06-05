import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {/* Email */}
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
                        <Mail className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-semibold text-black text-lg">Email</h3>
                        <p className="font-semibold text-black text-lg">anjulanadeeshan2002@gmail.com</p>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
                        <Phone className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-semibold text-black text-lg">Phone</h3>
                        <p className="font-semibold text-black text-lg">+94 985 1619</p>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
                        <MapPin className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-semibold text-black text-lg">Location</h3>
                        <p className="font-semibold text-black text-lg">Gampaha, Sri Lanka</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
