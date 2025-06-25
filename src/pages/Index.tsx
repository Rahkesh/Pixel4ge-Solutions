import { ArrowRight, Code, Globe, ShoppingCart, Settings, Sparkles, ExternalLink, CheckCircle, Clock, Search, Palette, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/916383979183', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/pixel4ge_solutions?igsh=cW1jZXNzcm9veW52&utm_source=qr', '_blank');
  };

  const handleStartProject = () => {
    handleWhatsAppClick(); // Redirect to WhatsApp for project inquiries
  };

  const handleViewWork = () => {
    // Scroll to featured project section
    const featuredSection = document.getElementById('featured-work');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJeyamCarsClick = () => {
    window.open('https://www.jeyamcars.in/', '_blank');
  };

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.open('mailto:rakeshkanna1025@gmail.com', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+916383979183', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-16 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10">
            <div className="max-w-4xl">
              <div className="mb-8">
                <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                  <span className="block">Pixel4ge</span>
                  <span className="block text-blue-600">Solutions</span>
                </h1>
                <p className="mt-6 text-xl text-slate-600 font-medium">
                  Design meets function. One pixel at a time.
                </p>
              </div>
              
              <div className="max-w-2xl">
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  Modern freelance web development that blends design precision with functional excellence. 
                  We craft beautiful websites for startups, D2C brands, and personal brands — pixel by pixel.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={handleStartProject} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button onClick={handleViewWork} variant="outline" size="lg" className="px-8 py-3 text-lg">
                    View Our Work
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-20">
            <div className="h-96 w-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-600"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-24 sm:px-8 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Custom web solutions tailored to your brand identity and functional needs. 
              From concept to deployment, we handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Code className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl">Website Design & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Clean, responsive, mobile-friendly websites with optimized user experience and modern design patterns.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                  <ShoppingCart className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl">E-Commerce Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Product-focused stores with cart functionality, secure checkout, and payment gateway integration.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                  <Globe className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl">Domain Setup & Hosting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Purchase, configuration, and DNS management for professional web presence and optimal performance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors duration-300">
                  <Search className="h-6 w-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl">SEO Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Search engine optimization, performance tuning, and technical SEO to improve your website's visibility and ranking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-600 transition-colors duration-300">
                  <Palette className="h-6 w-6 text-rose-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  User-centered design with intuitive interfaces, wireframing, prototyping, and user experience optimization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <Settings className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl">Admin & Backend Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Seamless integration with platforms like Supabase, Lovable AI, or custom solutions for data management.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-600 transition-colors duration-300">
                  <Sparkles className="h-6 w-6 text-pink-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl">Maintenance & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Post-launch assistance, performance tuning, content updates, and ongoing technical support.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section id="featured-work" className="px-6 py-24 sm:px-8 lg:px-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              <CheckCircle className="w-4 h-4 mr-2" />
              Completed Project
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-slate-600">
              See our latest completed project in action
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-2xl border-0 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 bg-white">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Jeyam Cars</h3>
                  <p className="text-slate-600 text-lg">Second-hand car dealership website</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Car listing showcase with clean UI/UX
                  </div>
                  <div className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Fully responsive layout
                  </div>
                  <div className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Custom domain setup
                  </div>
                  <div className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    SEO-Optimization
                  </div>
                </div>

                <Button onClick={handleJeyamCarsClick} className="bg-blue-600 hover:bg-blue-700">
                  Visit Live Site
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <Globe className="h-24 w-24 mx-auto mb-6 opacity-80" />
                  <p className="text-xl font-semibold mb-2">Live & Running</p>
                  <p className="text-blue-100">Deployed with custom domain</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="px-6 py-24 sm:px-8 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">
              <Clock className="w-4 h-4 mr-2" />
              Coming Soon
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Upcoming Projects
            </h2>
            <p className="text-xl text-slate-600">
              Exciting projects currently in development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-dashed border-slate-200 bg-slate-50/50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-orange-500" />
                  Thangam Oil
                </CardTitle>
                <CardDescription className="text-base">
                  Traditional Tamil oil brand e-commerce platform with Tamil-English language support and heritage branding.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-dashed border-slate-200 bg-slate-50/50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-orange-500" />
                  Colux
                </CardTitle>
                <CardDescription className="text-base">
                  Full-featured detergent e-commerce website with product showcase, user accounts, and order tracking.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-dashed border-slate-200 bg-slate-50/50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-orange-500" />
                  A.K Mahal
                </CardTitle>
                <CardDescription className="text-base">
                  Premium marriage & event hall website with gallery, hall features, and booking inquiries.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About & Contact Section */}
      <section id="contact-section" className="px-6 py-24 sm:px-8 lg:px-12 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Why Choose Pixel4ge?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Freelance Agility</h3>
                    <p className="text-slate-300">Professional quality with personalized attention and fast turnaround times.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full Ownership</h3>
                    <p className="text-slate-300">From planning to domain registration to launch — we handle everything.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
                    <p className="text-slate-300">Ready for SEO, marketing, and future upgrades as your business grows.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transparent Process</h3>
                    <p className="text-slate-300">Clear communication and competitive pricing throughout the project.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8">
                Let's Build Together
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Whether you're a business owner looking for a digital storefront or a startup wanting to validate your idea online, 
                Pixel4ge Solutions is your go-to development partner — where every pixel matters.
              </p>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Contact Rakesh Kanna</CardTitle>
                  <CardDescription className="text-slate-400">
                    Founder & Lead Developer
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-slate-300">
                    <span className="font-semibold mr-2">Email:</span>
                    <button onClick={handleEmailClick} className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                      rakeshkanna1025@gmail.com
                    </button>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <span className="font-semibold mr-2">Phone:</span>
                    <button onClick={handlePhoneClick} className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                      +91 63839 79183
                    </button>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <span className="font-semibold mr-2">Based in:</span>
                    <span>India</span>
                  </div>
                  
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 sm:px-8 lg:px-12 bg-slate-950 text-slate-400">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-lg font-semibold text-white mb-2">Pixel4ge Solutions</p>
          <p>Design meets function. One pixel at a time.</p>
          <p className="mt-4 text-sm">© 2025 Pixel4ge Solutions. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <Button
          onClick={handleInstagramClick}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
          title="Follow on Instagram"
        >
          <Instagram className="h-6 w-6 text-white" />
        </Button>
        <Button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
