"use client";
import React, { useState, useEffect } from 'react';
import { Scissors, Clock, Award, MapPin, Phone, Mail, Sun, Moon, Instagram, Facebook, Menu, X, Star, Users, Sparkles, MessageCircle, ChevronUp, Play, Quote, CheckCircle, Calendar, Zap, TrendingUp, MapPinned } from 'lucide-react';

export default function MrXHairSaloon() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

  const toggleTheme = () => setIsDark(!isDark);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / height) * 100);
      setShowBackToTop(scrolled > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counters
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment1 = 1000 / steps;
    const increment2 = 15 / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      setClientCount(Math.floor(increment1 * current));
      setExperienceCount(Math.floor(increment2 * current));
      if (current >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { 
      icon: Scissors, 
      title: 'Expert Hair Styling', 
      description: 'Precision cuts, trendy styles, and classic looks by certified professionals',
      features: ['Mens Cuts', 'Womens Styling', 'Kids Haircuts'],
      duration: '30-60 mins'
    },
    { 
      icon: Sparkles, 
      title: 'Keratin Treatments', 
      description: 'Premium Brazilian keratin for smooth, frizz-free, and manageable hair',
      features: ['Brazilian Keratin', 'Smoothing', 'Protein Treatment'],
      duration: '2-3 hours'
    },
    { 
      icon: Award, 
      title: 'Color & Highlights', 
      description: 'Professional coloring services using top-quality products',
      features: ['Full Color', 'Highlights', 'Balayage'],
      duration: '1-2 hours'
    },
  ];

  const testimonials = [
    { 
      name: 'Ahmed Khan', 
      rating: 5, 
      text: 'Best keratin treatment in the city! My hair has never looked this good.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    { 
      name: 'Bilal Hassan', 
      rating: 5, 
      text: 'The stylists really know their craft. Been coming here for 2 years now.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop'
    },
    { 
      name: 'Usman Ali', 
      rating: 5, 
      text: 'Professional service and great ambiance. Highly recommended for everyone!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
  ];

  const teamMembers = [
    { name: 'Fazi Butt', role: 'Lead Stylist', experience: '12 years', specialty: 'Keratin Expert' },
    { name: 'Usman Khan', role: 'Senior Stylist', experience: '8 years', specialty: 'Color Specialist' },
    { name: 'Rizwan Ahmed', role: 'Hair Artist', experience: '6 years', specialty: 'Modern Cuts' },
  ];

  const faqs = [
    { q: 'How long does keratin treatment last?', a: 'Our keratin treatments typically last 3-6 months with proper care and maintenance.' },
    { q: 'Do you take walk-ins?', a: 'Yes, we welcome walk-ins! However, appointments are recommended to avoid waiting time.' },
    { q: 'What products do you use?', a: 'We use only premium, professional-grade products from trusted international brands.' },
    { q: 'Is consultation free?', a: 'Absolutely! We offer free consultations to discuss your hair goals and recommend the best treatments.' },
  ];

  const whyChooseUs = [
    { icon: Award, text: 'Certified Professional Stylists', color: 'from-amber-500 to-orange-500' },
    { icon: Star, text: '1000+ Satisfied Clients', color: 'from-amber-500 to-orange-500' },
    { icon: Sparkles, text: 'Premium Quality Products', color: 'from-amber-500 to-orange-500' },
    { icon: Users, text: 'Personalized Consultations', color: 'from-amber-500 to-orange-500' },
  ];

  const openingHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 6:00 PM' },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I would like to book an appointment at Mr X Hair Saloon.');
    window.open(`https://wa.me/923234031647?text=${message}`, '_blank');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'}`}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-neutral-200 dark:bg-neutral-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Fixed WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center animate-pulse"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" fill="currentColor" />
      </button>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-24 right-6 z-50 p-3 rounded-full shadow-lg transition-all hover:scale-110 ${isDark ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-white hover:bg-neutral-100'}`}
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Special Offer Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 text-center">
        <p className="font-semibold flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" />
          First-time client? Special welcome discount available!
          <Zap className="w-4 h-4" />
        </p>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 w-full z-40 transition-colors duration-300 ${isDark ? 'bg-neutral-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Mr X Saloon
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-amber-500 transition-colors">Home</a>
              <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
              <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
              <a href="#testimonials" className="hover:text-amber-500 transition-colors">Reviews</a>
              <a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-neutral-100 hover:bg-neutral-200'}`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-neutral-100 hover:bg-neutral-200'}`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-white'}`}>
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block py-2 hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#services" className="block py-2 hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="block py-2 hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#testimonials" className="block py-2 hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
              <a href="#gallery" className="block py-2 hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
              <a href="#contact" className="block py-2 hover:text-amber-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full">
              <span className="text-amber-600 dark:text-amber-400 font-semibold">Premium Hair Care Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your Style at{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Mr X Saloon
              </span>
            </h1>
            <p className={`text-lg sm:text-xl mb-8 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Expert haircuts, premium keratin treatments, and professional styling. Your trusted destination for hair excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                Book Your Visit
              </a>
              <button
                onClick={handleWhatsAppClick}
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 ${isDark ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-neutral-100 hover:bg-neutral-200'}`}
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                WhatsApp Us
              </button>
            </div>
          </div>

          {/* Hero Image/Video Placeholder */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-96 relative">
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=600&fit=crop" 
                alt="Modern Hair Salon Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <p className="text-lg font-semibold">Experience luxury hair care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-neutral-800/50' : 'bg-amber-50/50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold text-amber-500">{clientCount}+</p>
              <p className={`text-sm font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold text-amber-500">{experienceCount}+</p>
              <p className={`text-sm font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>Years Experience</p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold text-amber-500">5.0</p>
              <p className={`text-sm font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>Rating</p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold text-amber-500">100%</p>
              <p className={`text-sm font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
            <p className={`text-lg ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Professional hair care solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl transition-all hover:scale-105 hover:-translate-y-2 border ${
                  isDark 
                    ? 'bg-neutral-800 border-neutral-700 hover:border-amber-500/50' 
                    : 'bg-white border-neutral-200 hover:border-amber-500/50 hover:shadow-2xl'
                }`}
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className={`mb-4 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {service.description}
                </p>
                <div className={`flex items-center gap-2 mb-4 text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-500" />
                      <span className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleWhatsAppClick}
                  className={`w-full mt-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${isDark ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-neutral-100 hover:bg-neutral-200'}`}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Mr X Hair Saloon</span>
              </h2>
              <p className={`text-lg mb-6 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                Mr X Hair Saloon is your premier destination for professional hair care services. With years of experience and a team of certified stylists, we specialize in transforming your look with precision and style.
              </p>
              <p className={`text-lg mb-6 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                We are proud to offer authentic Brazilian Keratin treatments using premium quality products. Our keratin specialists are trained in advanced smoothing techniques that deliver long-lasting, salon-perfect results.
              </p>
              <div className={`p-6 rounded-lg mb-6 border-l-4 border-amber-500 ${isDark ? 'bg-neutral-800' : 'bg-white'}`}>
                <h3 className="font-semibold text-lg mb-2 text-amber-500">Keratin Treatment Specialist</h3>
                <p className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>
                  We stock and use only authentic, professional-grade keratin products. Our treatments reduce frizz by up to 95%, add incredible shine, and make your hair more manageable for 3-6 months.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isDark ? 'bg-neutral-700' : 'bg-white border border-neutral-200'}`}>
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Certified Stylists</span>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isDark ? 'bg-neutral-700' : 'bg-white border border-neutral-200'}`}>
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span>Premium Products</span>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isDark ? 'bg-neutral-700' : 'bg-white border border-neutral-200'}`}>
                  <Star className="w-5 h-5 text-amber-500" />
                  <span>Expert Keratin</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-64 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop" 
                  alt="Professional Hair Salon"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-48 rounded-xl overflow-hidden">
                <img 
                  src="/Process.jpeg" 
                  alt="Keratin Treatment Process"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Meet Our Experts</h2>
            <p className={`text-lg ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Certified professionals dedicated to your perfect look
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl text-center transition-all hover:scale-105 ${
                  isDark ? 'bg-neutral-800' : 'bg-white shadow-lg'
                }`}
              >
                <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500`}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-amber-500 font-medium mb-2">{member.role}</p>
                <p className={`text-sm mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {member.experience} experience
                </p>
                <div className={`inline-block px-3 py-1 rounded-full text-sm ${isDark ? 'bg-neutral-700' : 'bg-amber-50 text-amber-700'}`}>
                  {member.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className={`text-lg ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Real experiences from our valued customers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl transition-all hover:scale-105 ${
                  isDark ? 'bg-neutral-800' : 'bg-white shadow-lg'
                }`}
              >
                <Quote className="w-10 h-10 text-amber-500 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className={`mb-6 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>Verified Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Transformations</h2>
            <p className={`text-lg ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Browse through our work and salon space
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Before & After: Keratin', icon: TrendingUp, img: '/Before & After: Keratin.jpg' },
              { title: 'Modern Hair Styling', icon: Scissors, img: '/Modern Hair Styling.jpeg' },
              { title: 'Color Transformation', icon: Sparkles, img: '/Color Transformation.jpeg' },
              { title: 'Professional Salon Space', icon: MapPinned, img: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=400&fit=crop' },
              { title: 'Client Transformation', icon: Award, img: '/Transformation.jpeg' },
              { title: 'Styling Station', icon: Star, img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop' }
            ].map((item, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden group relative"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 group-hover:from-black/90 transition-all">
                  <div className="text-white">
                    <item.icon className="w-8 h-8 mb-2" />
                    <p className="font-semibold">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-50'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className={`text-lg ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Everything you need to know about our services
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${isDark ? 'bg-neutral-800' : 'bg-white shadow-md'}`}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-start gap-2">
                  <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  {faq.q}
                </h3>
                <p className={`ml-8 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Clock className="w-12 h-12 mx-auto mb-4 text-amber-500" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Opening Hours</h2>
            <p className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>
              We're here to serve you every day of the week
            </p>
          </div>
          <div className="space-y-4">
            {openingHours.map((schedule, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-6 rounded-lg transition-all hover:scale-105 ${
                  isDark ? 'bg-neutral-800' : 'bg-white shadow-md'
                }`}
              >
                <span className="font-semibold text-lg">{schedule.day}</span>
                <span className={`text-lg ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>{schedule.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className={`text-lg ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Visit us or send us a message for inquiries
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className={`p-8 rounded-xl transition-all hover:scale-105 ${
                isDark ? 'bg-neutral-800' : 'bg-white shadow-lg'
              }`}>
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>
                  Sooter Mills Rd<br />Lahore, Punjab<br />Pakistan
                </p>
                <a 
                  href="https://www.google.com/maps/@31.5923629,74.4529218,21z" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-amber-500 hover:text-amber-600 font-medium"
                >
                  Get Directions →
                </a>
              </div>

              <div className={`p-8 rounded-xl transition-all hover:scale-105 ${
                isDark ? 'bg-neutral-800' : 'bg-white shadow-lg'
              }`}>
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a href="tel:+923234031647" className={`block mb-2 hover:text-amber-500 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  +92 323 4031647
                </a>
                <p className="text-sm text-amber-500">Available for calls & WhatsApp</p>
              </div>

              {/* <div className={`p-8 rounded-xl transition-all hover:scale-105 ${
                isDark ? 'bg-neutral-800' : 'bg-white shadow-lg'
              }`}>
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:info@mrxhairsaloon.com" className={`block hover:text-amber-500 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  info@mrxhairsaloon.com
                </a>
              </div> */}
            </div>

            {/* Contact Form */}
            <div className={`p-8 rounded-xl ${isDark ? 'bg-neutral-800' : 'bg-white shadow-lg'}`}>
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className={`block mb-2 font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-neutral-700 border-neutral-600 focus:border-amber-500 text-white' 
                        : 'bg-white border-neutral-300 focus:border-amber-500'
                    } outline-none`}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-neutral-700 border-neutral-600 focus:border-amber-500 text-white' 
                        : 'bg-white border-neutral-300 focus:border-amber-500'
                    } outline-none`}
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    Service Interested In
                  </label>
                  <select
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-neutral-700 border-neutral-600 focus:border-amber-500 text-white' 
                        : 'bg-white border-neutral-300 focus:border-amber-500'
                    } outline-none`}
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Hair Styling</option>
                    <option value="keratin">Keratin Treatment</option>
                    <option value="color">Color & Highlights</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-neutral-700 border-neutral-600 focus:border-amber-500 text-white' 
                        : 'bg-white border-neutral-300 focus:border-amber-500'
                    } outline-none resize-none`}
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full py-4 rounded-lg font-semibold transition-all hover:scale-105 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425.9846268836965!2d74.45270682599485!3d31.59236289999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM1JzMyLjUiTiA3NMKwMjcnMTAuNSJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mr X Hair Saloon Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 sm:px-6 lg:px-8 border-t ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-neutral-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg">
                  <Scissors className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Mr X Hair Saloon</span>
              </div>
              <p className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>
                Your trusted destination for premium hair care and styling excellence.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className={`hover:text-amber-500 transition-colors ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>Home</a></li>
                <li><a href="#services" className={`hover:text-amber-500 transition-colors ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>Services</a></li>
                <li><a href="#about" className={`hover:text-amber-500 transition-colors ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>About</a></li>
                <li><a href="#contact" className={`hover:text-amber-500 transition-colors ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>Hair Styling</li>
                <li className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>Keratin Treatment</li>
                <li className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>Color & Highlights</li>
                <li className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>Consultations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {/* <a href="#" className="hover:text-amber-500 transition-colors" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-amber-500 transition-colors" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a> */}
                <a 
                  href="https://wa.me/923234031647" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-green-500 transition-colors" 
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className={`pt-8 border-t ${isDark ? 'border-neutral-800' : 'border-neutral-200'} text-center`}>
            <p className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>
              © 2024 Mr X Saloon. All rights reserved. | Designed with excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}