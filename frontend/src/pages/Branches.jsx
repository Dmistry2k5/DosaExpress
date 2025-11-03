import React from 'react';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { branches, onlineOrderingPlatforms } from '../mockData';

const Branches = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Locations</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us or order online for delivery to your doorstep
          </p>
        </div>

        {/* Online Ordering Platforms */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-6">Order Online</h2>
          <p className="text-center text-amber-100 mb-8">Get your favorite dosas delivered in minutes</p>
          <div className="flex flex-wrap justify-center gap-4">
            {onlineOrderingPlatforms.map((platform) => (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 shadow-lg"
              >
                <span>{platform.name}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Branches */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <Card
              key={branch.id}
              className={`overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow ${
                branch.status === 'coming-soon' ? 'bg-gradient-to-br from-gray-100 to-gray-200' : ''
              }`}
            >
              <CardHeader className="bg-gradient-to-br from-amber-500 to-orange-600 text-white pb-6">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-2xl">{branch.name}</CardTitle>
                  {branch.status === 'coming-soon' && (
                    <Badge className="bg-white text-amber-600 border-none">Coming Soon</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                    <p className="text-gray-600 text-sm">{branch.address}</p>
                  </div>
                </div>

                {/* Phone */}
                {branch.status !== 'coming-soon' && (
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Phone</p>
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Opening Hours */}
                {branch.status !== 'coming-soon' && (
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-2">Opening Hours</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mon - Sat:</span>
                          <span className="text-gray-900 font-medium">{branch.hours.monday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sunday:</span>
                          <span className="text-gray-900 font-medium">{branch.hours.sunday}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                {branch.status !== 'coming-soon' ? (
                  <div className="space-y-3 pt-4">
                    <a href={`tel:${branch.phone}`}>
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                        Call to Order
                      </Button>
                    </a>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full border-amber-500 text-amber-600 hover:bg-amber-50">
                        Get Directions
                      </Button>
                    </a>
                  </div>
                ) : (
                  <div className="pt-4">
                    <p className="text-center text-gray-600 text-sm italic">Opening Soon! Stay tuned for updates.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branches;
