import React from 'react';
import { Award, Heart, Users, Leaf } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since 1999, Dosa Express has been London's destination for authentic South Indian and Sri Lankan vegetarian cuisine.
            Our journey began with a simple vision: to bring the authentic flavors of home to the heart of London.
          </p>
        </div>

        {/* Story Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1731846569848-f435e8e4a36b"
            alt="Dosa Express Kitchen"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Award,
              title: 'Quality First',
              desc: 'Only the finest ingredients make it to your plate. We source premium quality produce to ensure authentic taste.'
            },
            {
              icon: Heart,
              title: 'Made with Love',
              desc: 'Every dish is prepared with passion and care, following traditional recipes passed down through generations.'
            },
            {
              icon: Users,
              title: 'Community Focus',
              desc: 'We\'re proud to serve the Wembley, Harrow, and Kingsbury communities, becoming a part of your family celebrations.'
            },
            {
              icon: Leaf,
              title: '100% Vegetarian',
              desc: 'Committed to serving delicious plant-based cuisine with plenty of vegan options for conscious diners.'
            }
          ].map((value, idx) => (
            <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1725483990070-509319bc6ecc"
              alt="Dosa preparation"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Art of Dosa Making</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The dosa is more than just a dish – it's an art form that requires skill, precision, and patience.
                Our chefs have mastered this craft, creating the perfect balance of crispy exterior and soft interior.
              </p>
              <p>
                We start with premium quality rice and lentils, fermented to perfection using traditional methods.
                The batter is then spread thin on a hot griddle, creating that signature golden-brown crispy texture
                that dosa lovers crave.
              </p>
              <p>
                Each dosa is made fresh to order, ensuring you experience the authentic taste and texture that has
                made us a favorite among London's South Indian food enthusiasts for over two decades.
              </p>
            </div>
          </div>
        </div>

        {/* Heritage Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Heritage</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1999, Dosa Express was born from a passion to share the rich culinary traditions of
                  South India and Sri Lanka with London. What started as a small family venture has grown into a
                  beloved local institution.
                </p>
                <p>
                  Our recipes come from generations of home cooking, refined and perfected over decades. We believe
                  in preserving authenticity while embracing innovation – that's why you'll find both traditional
                  classics and creative fusion dishes on our menu.
                </p>
                <p>
                  Today, with locations in Wembley and Kingsbury (and South Harrow coming soon), we continue to serve
                  the community with the same dedication to quality and authenticity that defined us from day one.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1725483990122-802996d84699"
                alt="Traditional cooking"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
