import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Leaf, Award, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { menuItems, testimonials } from '../mockData';

const Home = () => {
  const featuredDosas = menuItems.filter(item => item.category === 'signature').slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-orange-600/20 animate-pulse"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-red-500 to-orange-500 text-white border-none px-6 py-2 text-base font-semibold shadow-2xl hover:shadow-red-500/50 transition-all animate-bounce">
            ✨ Since 1999 • Authentic Vegetarian Cuisine
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Experience The Art of
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent mt-3 animate-pulse">
              South Indian Dosas
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-100 mb-10 max-w-3xl mx-auto font-medium drop-shadow-lg">
            Authentic South Indian & Sri Lankan vegetarian cuisine crafted with passion in the heart of London
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/menu">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 group">
                Explore Menu
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            <Link to="/branches">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-10 py-7 text-xl font-bold shadow-2xl backdrop-blur-sm bg-white/10 transition-all transform hover:scale-105">
                Order Online
              </Button>
            </Link>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-3 border-white/70 rounded-full flex items-start justify-center p-2">
            <div className="w-2 h-4 bg-white/70 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-200/30 to-orange-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-red-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: 'Since 1999', desc: '25+ years of excellence', color: 'from-yellow-400 to-orange-500' },
              { icon: Leaf, title: '100% Vegetarian', desc: 'Vegan options available', color: 'from-green-400 to-emerald-500' },
              { icon: Award, title: 'Award Winning', desc: 'Loved by locals', color: 'from-red-500 to-pink-500' },
              { icon: Clock, title: 'Quick Service', desc: 'Dine-in & takeaway', color: 'from-blue-500 to-cyan-500' }
            ].map((feature, idx) => (
              <Card key={idx} className="border-none shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-white overflow-hidden group">
                <CardContent className="p-8 text-center relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:rotate-12 transition-transform duration-500`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-base font-medium">{feature.desc}</p>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent group-hover:from-orange-50/50 transition-colors duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dosas Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-red-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-yellow-300/20 to-red-300/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6">
              Our Signature Dosas
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Handcrafted with authentic recipes passed down through generations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredDosas.map((dosa) => (
              <Card key={dosa.id} className="overflow-hidden border-none shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 group bg-white">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={dosa.image}
                    alt={dosa.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-colors duration-500"></div>
                  <div className="absolute top-4 right-4">
                    {dosa.vegan && (
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-none shadow-lg">
                        <Leaf className="w-4 h-4 mr-1" />
                        Vegan
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-7">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{dosa.name}</h3>
                  <p className="text-gray-600 text-base mb-5 leading-relaxed">{dosa.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      £{dosa.price.toFixed(2)}
                    </span>
                    <Button size="sm" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold px-6 py-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/menu">
              <Button size="lg" variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                View Full Menu
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white relative overflow-hidden">
        {/* Animated stars background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-white drop-shadow-2xl">
              What Our Guests Say
            </h2>
            <p className="text-2xl text-orange-300 font-semibold">Loved by locals since 1999</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-orange-500/30 hover:border-orange-500 transition-all duration-500 shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                    ))}
                  </div>
                  <p className="text-gray-200 text-base mb-6 leading-relaxed italic">"{testimonial.comment}"</p>
                  <p className="text-orange-400 font-bold text-base">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 drop-shadow-2xl animate-pulse">
            Ready to Experience Authentic Dosas?
          </h2>
          <p className="text-2xl md:text-3xl mb-12 text-yellow-100 font-semibold drop-shadow-lg">
            Visit us today or order online for delivery to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/branches">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-12 py-8 text-xl font-black shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110">
                Find Your Nearest Branch
              </Button>
            </Link>
            <Link to="/menu">
              <Button size="lg" variant="outline" className="border-3 border-white text-white hover:bg-white hover:text-red-600 px-12 py-8 text-xl font-black shadow-2xl backdrop-blur-sm transition-all transform hover:scale-110">
                Browse Menu
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default Home;
