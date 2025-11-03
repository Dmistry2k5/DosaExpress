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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: 'Since 1999', desc: '25+ years of excellence' },
              { icon: Leaf, title: '100% Vegetarian', desc: 'Vegan options available' },
              { icon: Award, title: 'Award Winning', desc: 'Loved by locals' },
              { icon: Clock, title: 'Quick Service', desc: 'Dine-in & takeaway' }
            ].map((feature, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dosas Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Signature Dosas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handcrafted with authentic recipes passed down through generations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDosas.map((dosa) => (
              <Card key={dosa.id} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dosa.image}
                    alt={dosa.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    {dosa.vegan && (
                      <Badge className="bg-green-500 text-white border-none">
                        <Leaf className="w-3 h-3 mr-1" />
                        Vegan
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dosa.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{dosa.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">£{dosa.price.toFixed(2)}</span>
                    <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-white">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button size="lg" variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                View Full Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-xl text-gray-300">Loved by locals since 1999</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gray-800 border-gray-700 hover:border-amber-500 transition-colors">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-4">"{testimonial.comment}"</p>
                  <p className="text-amber-500 font-semibold text-sm">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Authentic Dosas?</h2>
          <p className="text-xl mb-8 text-amber-100">
            Visit us today or order online for delivery to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/branches">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Find Your Nearest Branch
              </Button>
            </Link>
            <Link to="/menu">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-6 text-lg">
                Browse Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
