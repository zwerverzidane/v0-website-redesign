"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function DiengRestaurant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentBgIndex, setCurrentBgIndex] = useState(0)
  const backgroundImages = [
    "/indonesian-restaurant-traditional-food-warm-atmosp.jpg",
    "/indonesian-chef-cooking-traditional-food-kitchen.jpg",
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const menuItems = [
    {
      category: "Menu Sarapan Pagi",
      items: [
        {
          name: "Nasi Megono khas Wonosobo",
          desc: "Nasi megono, Ayam, tempe kemul, kerupuk, buah, teh",
          price: "30K",
        },
        {
          name: "Soto Ayam",
          desc: "Nasi, ayam, telur, tempe kemul, sambal, buah, teh",
          price: "25K",
        },
        {
          name: "Nasi Uduk",
          desc: "Nasi uduk, Ayam, Tempe orek, mie goreng, tempekemul, kerupuk, sambal, buah, teh",
          price: "30K",
        },
        {
          name: "Nasi Goreng",
          desc: "Nasi Goreng, Telor ceplok, kerupuk, buah, Aqua/teh",
          price: "25K",
        },
      ],
    },
    {
      category: "Menu Makan Siang/Malam",
      items: [
        {
          name: "Ayam Goreng",
          desc: "Nasi, Ayam goreng, elor bebek/dadar, sayur 2 macam, sambal, kerupuk buah, teh",
          price: "30K",
        },
        {
          name: "Pepes Ayam",
          desc: "Nasi, pepes Ayam, telor bebek/dadar, sayur lodeh, sambal, kerupuk, buah, teh",
          price: "30K",
        },
        {
          name: "Sate Ayam",
          desc: "Nasi, Sate Ayam, sayur 2 macam, sambal, kerupuk, buah, teh",
          price: "30K",
        },
        {
          name: "Sate Kambing",
          desc: "Nasi, Sate Kambing, sayur 2 macam, sambal, kerupuk, buah, teh",
          price: "40K",
        },
        {
          name: "Ikan Goreng",
          desc: "Nasi, Ayam goreng, telor bebek/dadar, sayur 2 macam, sambal, kerupuk, buah, teh",
          price: "30K",
        },
        {
          name: "Ikan Fillet Asam Manis",
          desc: "Nasi, Ikan Fillet, telor bebek/dadar, sayur 2 macam, sambal, kerupuk, buah, teh",
          price: "35K",
        },
        {
          name: "Daging Sapi (Rendang, Semur, Lada Hitam/Yakiniku)",
          desc: "Nasi, Daging Sapi, sayur 2 macam, sambal, kerupuk, buah, teh",
          price: "35K",
        },
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

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className={`transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-primary-foreground drop-shadow-lg"}`}
              >
                Beranda
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
                Layanan
              </a>
              <a
                href="#about"
                className={`transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-primary-foreground drop-shadow-lg"}`}
              >
                Tentang
              </a>
              <a
                href="#contact"
                className={`transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-primary-foreground drop-shadow-lg"}`}
              >
                Kontak
              </a>
              <a
                href="https://wa.me/qr/D4UKXWRM6VCSF1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Pesan Sekarang
              </a>
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

        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a
                href="#home"
                className="block py-2 text-foreground hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
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
                Layanan
              </a>
              <a
                href="#about"
                className="block py-2 text-foreground hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </a>
              <a
                href="#contact"
                className="block py-2 text-foreground hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </a>
              <a
                href="https://wa.me/qr/D4UKXWRM6VCSF1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors w-full mt-2"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${backgroundImages[currentBgIndex]}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 drop-shadow-2xl text-balance">
            Cita Rasa Indonesia Autentik dari Hati Dieng
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 drop-shadow-lg text-pretty">
            Rasakan masakan lokal terbaik, layanan katering, dan nasi box yang praktis
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/qr/D4UKXWRM6VCSF1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary-foreground text-primary text-lg px-10 py-4 inline-flex items-center gap-2 transition-all hover:scale-105 rounded-3xl bg-popover"
            >
              Pesan Katering
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-8 w-8 text-primary-foreground rotate-90" />
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Layanan Kami</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Menghadirkan cita rasa autentik untuk setiap acara
            </p>
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
                <h3 className="text-2xl font-bold text-foreground mb-3">Makan di Tempat</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nikmati suasana nyaman dan masakan Indonesia autentik di ruang makan kami yang dirancang dengan indah
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-lg flex mb-6 text-center justify-center flex-row items-center shadow">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Layanan Katering</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Katering profesional untuk pernikahan, acara perusahaan, dan acara spesial dengan menu yang dapat
                  disesuaikan
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
                  Paket nasi praktis dan lezat yang sempurna untuk makan siang, rapat, atau makan cepat saat bepergian
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Menu Kami</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Hidangan yang dibuat dengan hati-hati menggunakan resep tradisional dan bahan-bahan segar
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
              Unduh Menu Lengkap
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Tentang Dieng Best Food</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Didirikan di jantung Dieng, kami telah menyajikan masakan Indonesia autentik selama lebih dari satu
                dekade. Gairah kami adalah membawa cita rasa tradisional ke pengalaman bersantap modern.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Setiap hidangan disiapkan dengan penuh cinta, menggunakan resep yang diwariskan turun-temurun dan
                bahan-bahan lokal yang paling segar. Dari keluarga kami untuk Anda, kami mengundang Anda untuk merasakan
                perbedaannya.
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
                  <span className="text-foreground font-medium">Resep Tradisional Autentik</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 003.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051 1.265.304 1.691.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">Bahan Lokal yang Segar</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">Pelayanan Pemenang Penghargaan</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/indonesian-chef-cooking-traditional-food-kitchen.jpg"
                alt="Dapur Kami"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Hubungi Kami</h2>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Kami ingin mendengar dari Anda dan melayani Anda segera
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Kunjungi Kami</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Jalan Dieng Raya No. 123
                    <br />
                    Dieng, Jawa Tengah, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hubungi Kami</h3>
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
                  <h3 className="text-xl font-bold mb-2">Email Kami</h3>
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
                  <h3 className="text-xl font-bold mb-2">Jam Buka</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Senin - Jumat: 10:00 - 22:00
                    <br />
                    Sabtu - Minggu: 09:00 - 23:00
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Nama Anda"
                      className="w-full px-4 py-3 rounded-lg bg-primary-foreground/90 text-primary placeholder:text-primary/60 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Anda"
                      className="w-full px-4 py-3 rounded-lg bg-primary-foreground/90 text-primary placeholder:text-primary/60 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Nomor Telepon"
                      className="w-full px-4 py-3 rounded-lg bg-primary-foreground/90 text-primary placeholder:text-primary/60 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Pesan Anda"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-primary-foreground/90 text-primary placeholder:text-primary/60 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    />
                  </div>
                  <a
                    href="https://wa.me/qr/D4UKXWRM6VCSF1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button type="button" className="w-full">
                      Kirim Pesan
                    </Button>
                  </a>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-background border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Dieng Best Food</h3>
              <p className="text-muted-foreground leading-relaxed">
                Menyajikan cita rasa Indonesia autentik dengan cinta dan dedikasi sejak 2010.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Tautan Cepat</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#menu" className="text-muted-foreground hover:text-accent transition-colors">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                    Layanan
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                    Tentang
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Layanan</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Makan di Tempat</li>
                <li className="text-muted-foreground">Katering</li>
                <li className="text-muted-foreground">Rice Box</li>
                <li className="text-muted-foreground">Pemesanan Online</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.881 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Dieng Best Food. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
