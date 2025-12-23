"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function DiengRestaurant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    {
      category: "Signature Dishes",
      items: [
        {
          name: "Nasi Goreng Dieng",
          desc: "Traditional fried rice with local spices and vegetables",
          price: "Rp 35,000",
        },
        { name: "Sate Ayam Special", desc: "Grilled chicken skewers with peanut sauce", price: "Rp 40,000" },
        { name: "Gado-Gado Dieng", desc: "Mixed vegetables with rich peanut dressing", price: "Rp 30,000" },
        { name: "Rendang Sapi", desc: "Slow-cooked beef in coconut and spices", price: "Rp 55,000" },
      ],
    },
    {
      category: "Rice Box Specials",
      items: [
        { name: "Rice Box Ayam Bakar", desc: "Grilled chicken with sambal and vegetables", price: "Rp 25,000" },
        { name: "Rice Box Ikan Goreng", desc: "Fried fish with traditional condiments", price: "Rp 28,000" },
        { name: "Rice Box Vegetarian", desc: "Mixed vegetables and tofu tempeh", price: "Rp 22,000" },
        { name: "Rice Box Beef Teriyaki", desc: "Tender beef with teriyaki glaze", price: "Rp 32,000" },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <h1
                className={`text-2xl font-bold transition-colors ${scrolled ? "text-primary" : "text-primary-foreground drop-shadow-lg"}`}
              >
                Dieng Best Food
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className={`transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-primary-foreground drop-shadow-lg"}`}
              >
                Home
              </a>
              <a
                href="#menu"
                className={`transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-primary-foreground drop-shadow-lg"}`}
              >
                Menu
              </a>
              <a
                href="#services"
                className={`transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-primary-foreground drop-shadow-lg"}`}
              >
                Services
              </a>
              <a
                href="#about"
                className={`transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-primary-foreground drop-shadow-lg"}`}
              >
                About
              </a>
              <a
                href="#contact"
                className={`transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-primary-foreground drop-shadow-lg"}`}
              >
                Contact
              </a>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Order Now</Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a
                href="#home"
                className="block py-2 text-foreground hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#menu"
                className="block py-2 text-foreground hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="#services"
                className="block py-2 text-foreground hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="block py-2 text-foreground hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block py-2 text-foreground hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground">Order Now</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `url('/indonesian-restaurant-traditional-food-warm-atmosp.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 drop-shadow-2xl text-balance">
            Authentic Indonesian Flavors from the Heart of Dieng
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 drop-shadow-lg text-pretty">
            Experience the best local cuisine, catering services, and convenient rice boxes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
              View Our Menu
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/90 hover:bg-primary-foreground text-primary text-lg px-8 border-0"
            >
              Order Catering
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-8 w-8 text-primary-foreground rotate-90" />
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Our Services</h2>
            <p className="text-xl text-muted-foreground text-pretty">Bringing authentic flavors to every occasion</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Dine In</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enjoy our cozy atmosphere and authentic Indonesian cuisine in our beautifully designed dining space
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Catering Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Professional catering for weddings, corporate events, and special occasions with customizable menus
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Rice Box</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Convenient and delicious rice box meals perfect for lunch, meetings, or quick dining on the go
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section id="menu" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Our Menu</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Carefully crafted dishes using traditional recipes and fresh ingredients
            </p>
          </div>

          <div className="space-y-12">
            {menuItems.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-3xl font-bold text-primary mb-8 text-center">{section.category}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item, itemIdx) => (
                    <Card key={itemIdx} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-bold text-foreground">{item.name}</h4>
                          <span className="text-lg font-bold text-accent">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Download Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">About Dieng Best Food</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in the heart of Dieng, we've been serving authentic Indonesian cuisine for over a decade. Our
                passion is bringing traditional flavors to modern dining experiences.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every dish is prepared with love, using recipes passed down through generations and the freshest local
                ingredients. From our family to yours, we invite you to taste the difference.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">Authentic Traditional Recipes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">Fresh Local Ingredients</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">Award-Winning Service</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/indonesian-chef-cooking-traditional-food-kitchen.jpg"
                alt="Our Kitchen"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h2>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              We'd love to hear from you and serve you soon
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Jalan Dieng Raya No. 123
                    <br />
                    Dieng, Central Java, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    +62 812-3456-7890
                    <br />
                    +62 878-9012-3456
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    info@diengbestfood.com
                    <br />
                    catering@diengbestfood.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Monday - Sunday
                    <br />
                    10:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-background/95 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 text-primary-foreground py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dieng Best Food</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Authentic Indonesian cuisine served with passion and tradition since 2010.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#home" className="hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-accent transition-colors">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-accent transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Dine In</li>
                <li>Catering</li>
                <li>Rice Box</li>
                <li>Delivery</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/80 transition-colors"
                >
                  <svg className="w-5 h-5 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/80 transition-colors"
                >
                  <svg className="w-5 h-5 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/80 transition-colors"
                >
                  <svg className="w-5 h-5 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2025 Dieng Best Food. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
