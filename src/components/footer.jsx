"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  CalendarDays,
  MapPin,
  Download,
  ExternalLink,
  Cloud,
  HeartPulse,
  Twitter,
  Linkedin,
  Facebook,
  Globe,
  Mail,
  Phone,
  Clock,
  BookOpen,
  School,
  FileText,
  Home,
  Users,
  Library,
  AlertCircle,
  CalendarCheck,
  FileSearch,
  Thermometer,
  Droplets,
  Wind,
  Gauge,
  Eye,
  Compass
} from 'lucide-react';

const Footer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [pollutionData, setPollutionData] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=25.5941&lon=85.1376&appid=da63ce5f202fc08ca2f84ddf36e4c303`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchPollutionData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=25.5941&lon=85.1376&appid=da63ce5f202fc08ca2f84ddf36e4c303`
      );
      const data = await response.json();
      setPollutionData(data);
    } catch (error) {
      console.error("Error fetching air pollution data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
    fetchPollutionData();
    const interval = setInterval(() => {
      fetchWeatherData();
      fetchPollutionData();
      setCurrentDateTime(new Date());
    }, 120000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleString("en-US", {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <footer className="bg-gradient-to-b from-[#1a0404] to-[#0d0202] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Institute Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-center md:justify-start">
                <img
                  src="https://i.postimg.cc/k5CYZwwS/logo.png"
                  alt="NIT Patna Logo"
                  className="w-20 h-20"
                />
              </div>
              <p className="text-center md:text-left text-gray-300 text-lg leading-relaxed">
                National Institute of Technology Patna is one of India's premier technical institutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-white transition-colors">
                  <MapPin className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span>Ashok Rajpath, Patna, Bihar 800005</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span>+91 612 237 1715</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span>info@nitp.ac.in</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-white transition-colors">
                  <Globe className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span>www.nitp.ac.in</span>
                </div>
              </div>
              <div className="flex justify-center md:justify-start space-x-5 pt-2">
                <a href="https://twitter.com/NITPatna1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/company/nit-patna" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/NITPatna" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://goo.gl/maps/srZ6whpfDGqg85sp6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                  <MapPin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-red-800 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-red-400" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Departments', url: '/Department', icon: <School className="h-5 w-5 text-red-400" /> },
                { name: 'NIRF', url: '/Others/NIRF', icon: <FileSearch className="h-5 w-5 text-red-400" /> },
                { name: 'RTI', url: '/Others/RTI', icon: <AlertCircle className="h-5 w-5 text-red-400" /> },
                { name: 'Magazine', url: '/Institute/Magazine', icon: <Library className="h-5 w-5 text-red-400" /> },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                    {link.icon}
                    <span className="group-hover:underline">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-red-800 flex items-center">
              <Compass className="h-5 w-5 mr-2 text-red-400" />
              Explore
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Campus', url: '/Institute?tab=campus', icon: <MapPin className="h-5 w-5 text-red-400" /> },
                { name: 'BOG/FC/BWC Minutes', url: '/Others/BOG', icon: <FileText className="h-5 w-5 text-red-400" /> },
                { name: 'Senate Minutes', url: '/Others/Senate', icon: <Users className="h-5 w-5 text-red-400" /> },
                { name: 'SC/ST Grievance Cell', url: '/Facilities/SCST', icon: <AlertCircle className="h-5 w-5 text-red-400" /> },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                    {link.icon}
                    <span className="group-hover:underline">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Weather & Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-red-800 flex items-center">
              <Cloud className="h-5 w-5 mr-2 text-red-400" />
              Patna Weather
            </h3>
            <div className="bg-gradient-to-br from-[#2a0a0a] to-[#1a0404] p-5 rounded-xl border border-red-900/50 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-300 mb-3">{formatDate(currentDateTime)}</p>
                  {weatherData?.list?.[0] && (
                    <div className="space-y-3">
                      <p className="flex items-center space-x-3 text-base">
                        <Thermometer className="h-5 w-5 text-red-400" />
                        <span>{(weatherData.list[0].main.temp - 273.15).toFixed(1)}°C</span>
                      </p>
                      <p className="flex items-center space-x-3 text-base">
                        <Droplets className="h-5 w-5 text-blue-400" />
                        <span>{weatherData.list[0].main.humidity}% humidity</span>
                      </p>
                      <p className="flex items-center space-x-3 text-base">
                        <Wind className="h-5 w-5 text-gray-400" />
                        <span>{weatherData.list[0].wind.speed} km/h wind</span>
                      </p>
                    </div>
                  )}
                </div>
                {weatherData?.list?.[0]?.weather?.[0] && (
                  <div className="text-center">
                    <div className="text-4xl mb-1">
                      {weatherData.list[0].weather[0].main === 'Clouds' && '☁️'}
                      {weatherData.list[0].weather[0].main === 'Rain' && '🌧️'}
                      {weatherData.list[0].weather[0].main === 'Clear' && '☀️'}
                      {weatherData.list[0].weather[0].main === 'Thunderstorm' && '⛈️'}
                    </div>
                    <p className="text-sm capitalize">
                      {weatherData.list[0].weather[0].description}
                    </p>
                  </div>
                )}
              </div>

              {pollutionData?.list?.[0] && (
                <div className="mt-5 p-4 bg-[#2a0a0a] rounded-lg border border-red-900/30">
                  <p className="flex items-center space-x-3 text-base">
                    <Gauge className="h-5 w-5 text-green-400" />
                    <span>Air Quality: {pollutionData.list[0].components.pm2_5} µg/m³</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-2 flex items-center">
                    <HeartPulse className="h-4 w-4 mr-2" />
                    Source: OpenWeather
                  </p>
                </div>
              )}

              <div className="mt-6">
                <p className="text-sm flex items-center space-x-2 mb-3">
                  <Eye className="h-5 w-5 text-red-400" />
                  <span>Visitors:</span>
                </p>
                <div className="flex space-x-2">
                  {[1, 4, 0, 0, 7, 1].map((num, idx) => (
                    <div 
                      key={idx} 
                      className="w-10 h-10 flex items-center justify-center bg-[#1a0404] border border-red-900/50 rounded-lg text-lg font-mono font-bold"
                    >
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-red-900/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} National Institute of Technology Patna. All Rights Reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <Link href="/Webteam" className="text-sm text-gray-400 hover:text-red-400 transition-colors flex items-center">
                <span>Developed by WDC NIT Patna</span>
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
              <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-red-400 transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;