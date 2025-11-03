import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Leaf, Award, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { menuItems, testimonials } from '../mockData';

const Home = () => {
  const featuredDosas = menuItems.filter(item => item.category === 'popular').slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Elegant Indian Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
              alt="Authentic Dosa"
              className="w-full h-full object-cover"
            />
            {/* Elegant overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/75"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-orange-900/30"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Pure Vegetarian Badge */}
          <div className="mb-8 flex justify-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_south-indian-bites-1/artifacts/3eeq62pn_image.png" 
              alt="Pure Vegetarian" 
              className="h-24 w-auto drop-shadow-2xl animate-pulse"
            />
          </div>
          
          <Badge className="mb-6 bg-white/90 backdrop-blur-sm text-gray-900 border-none px-6 py-2.5 text-base font-semibold shadow-xl">
            Since 1999 • London's Finest Vegetarian Cuisine
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            Authentic South Indian
            <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent mt-3">
              Dosa Experience
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Savour the authentic flavours of South India & Sri Lanka, crafted with tradition and served with love since 1999
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/menu">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-7 text-lg font-bold shadow-2xl transition-all transform hover:scale-105">
                View Our Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/branches">
              <Button size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-7 text-lg font-bold shadow-2xl transition-all transform hover:scale-105">
                Order Online
              </Button>
            </Link>
          </div>
        </div>

        {/* Elegant scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 animate-bounce">
            <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section - Elegant & Refined */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Dosa Express</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: 'Since 1999', desc: 'Over 25 years of culinary excellence', color: 'text-amber-600' },
              { icon: Leaf, title: '100% Vegetarian', desc: 'Pure vegetarian with vegan options', color: 'text-green-600' },
              { icon: Award, title: 'Award Winning', desc: 'Recognized for authentic flavours', color: 'text-red-600' },
              { icon: Clock, title: 'Fresh Daily', desc: 'Made fresh to order, every time', color: 'text-orange-600' }
            ].map((feature, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dosas Section - Elegant Presentation */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523" 
            alt="Taj Mahal" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Signature Creations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handcrafted with authentic recipes, passed down through generations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredDosas.map((dosa) => (
              <Card key={dosa.id} className="overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 group bg-white">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={dosa.image}
                    alt={dosa.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    {dosa.vegan && (
                      <Badge className="bg-green-600 text-white border-none shadow-lg">
                        <Leaf className="w-3 h-3 mr-1" />
                        Vegan
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-7">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{dosa.name}</h3>
                  <p className="text-gray-600 text-base mb-5 leading-relaxed">{dosa.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-red-600">
                      £{dosa.price.toFixed(2)}
                    </span>
                    <Button size="sm" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold px-6 py-5">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/menu">
              <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold text-lg px-10 py-6 transition-all">
                Explore Full Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Refined Design */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bada" 
            alt="India" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Guests Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Trusted by London's food lovers since 1999</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-orange-400/50 transition-all duration-500 shadow-xl">
                <CardContent className="p-7">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-100 text-base mb-6 leading-relaxed italic">"{testimonial.comment}"</p>
                  <p className="text-orange-400 font-semibold text-base">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Elegant & Sophisticated */}
      <section className="py-28 bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Visit Us Today
          </h2>
          <p className="text-2xl mb-12 text-red-100 font-light">
            Experience authentic South Indian cuisine at our Wembley and Kingsbury locations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/branches">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-12 py-7 text-xl font-bold shadow-2xl transition-all transform hover:scale-105">
                Find Our Locations
              </Button>
            </Link>
            <Link to="/menu">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-12 py-7 text-xl font-bold shadow-2xl transition-all transform hover:scale-105">
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
