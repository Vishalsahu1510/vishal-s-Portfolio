import {
  Github,
  Linkedin,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { cn } from "../lib/utils";
import toast from "react-hot-toast";


const ContactSection = () => {

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  
     

  try {
    const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      toast.success("Your message has been sent. I’ll get back to you soon.");
      form.reset();
    } else {
      toast.error("Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    toast.error("Network error. Please try again.");
  }
};


  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to exciting opportunities! Whether you're looking for
          a passionate intern, a collaborator for a tech project, or just want
          to connect — feel free to reach out. Let’s build something great
          together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-center-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Mail className="text-primary h-6 w-6" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:vishalsahu0644@gmail.com"
                    className="text-muted-foregropund hover:text-primary transition-colors"
                  >
                    vishalsahu0644@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+91 8770708984"
                    className="text-muted-foregropund hover:text-primary transition-colors"
                  >
                    +91- 8770708984
                  </a>
                </div>
              </div>

              <div className="flex items-center-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <MapPin className="text-primary h-6 w-6" />{" "}
                </div>
                <div>
                  <h4>Location</h4>
                  <a className="text-muted-foregropund hover:text-primary transition-colors">
                    Jabalpur, Madhya Pradesh, India
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4>Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/vishal-sahu-1510/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://github.com/Vishalsahu1510" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form 
            onSubmit={handleSubmit}
            className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Vishal Sahu"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="vishalsahu0644@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize:none"
                  placeholder="Hello I'd like totalk about...."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
