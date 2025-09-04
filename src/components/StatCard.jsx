import React from "react";

const StatCard = ({ icon: Icon, number, label, delay }) => (
  <div
    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:rotate-1"
    style={{ animationDelay: `${delay}ms` }}
  >
    <Icon className="w-8 h-8 text-purple-400 mb-4" />
    <h3 className="text-3xl font-bold text-white mb-2">{number}</h3>
    <p className="text-gray-300">{label}</p>
  </div>
);

export default StatCard;
