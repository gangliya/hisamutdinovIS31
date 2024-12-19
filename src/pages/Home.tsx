import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Banknote, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center">
      {/* Decorative snowflakes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Управляйте задачами
              <span className="block text-red-200">как профессионал</span>
            </h1>
            <p className="text-xl text-red-100">
              Организуйте свои задачи эффективно и достигайте большего каждый день
            </p>
            <div className="flex space-x-4">
              <Link
                to="/register"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-red-50 transition-colors"
              >
                Начать бесплатно
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
              <Car className="w-full h-auto text-white" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Banknote className="w-32 h-32 text-green-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}