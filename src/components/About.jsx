import React from "react";
import { Award, Code2, BookOpen, Users } from "lucide-react";

export default function About() {
  const achievements = [
    { icon: <Award className="w-5 h-5" />, title: "ALX Graduate", description: "Completed the ALX Software Engineering program with hands-on frontend projects." },
    { icon: <Code2 className="w-5 h-5" />, title: "Frontend Specialist", description: "React, JavaScript, responsive design and component-driven UI." },
    { icon: <BookOpen className="w-5 h-5" />, title: "WordPress Expert", description: "Elementor & Crocoblock experience for dynamic client sites." },
    { icon: <Users className="w-5 h-5" />, title: "Team Player", description: "Effective collaborator with strong communication & documentation habits." },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">About <span className="text-accent">Me</span></h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            I’m a frontend developer and ALX graduate with a strong background in building client websites using WordPress tools like Elementor and Crocoblock. I concentrate on building polished, accessible user interfaces with React and modern CSS.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-soft-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">My Journey</h3>
              <p className="text-gray-600">
                Started in web development by building WordPress sites for clients, mastering CMS workflows and page-builder tools. In 2024, I explored coding fundamentals, and in 2025, I fully committed to frontend engineering through the ALX Software Engineering program, focusing on React, component-driven architecture and production-ready web apps.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {["Problem Solving", "Team Collaboration", "Continuous Learning", "UX Focus"].map((t) => (
                <div key={t} className="bg-white p-3 rounded-lg text-center text-sm font-medium text-gray-700 shadow-sm">
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((a, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center text-center">
                  <div className="bg-accent/10 text-accent rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    {a.icon}
                  </div>
                  <h4 className="font-semibold text-primary">{a.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{a.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft-lg">
              <h3 className="font-semibold text-primary mb-3">Learning Timeline</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="text-sm font-bold text-white bg-accent px-3 py-1 rounded-full">2025</div>
                  <div>
                    <div className="font-semibold">ALX Software Engineering</div>
                    <div className="text-sm text-gray-600">Immersive frontend-focused training: React, testing, and production workflows.</div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="text-sm font-bold text-white bg-accent px-3 py-1 rounded-full">2024</div>
                  <div>
                    <div className="font-semibold">Coding Foundations</div>
                    <div className="text-sm text-gray-600">Explored JavaScript fundamentals and core web development concepts.</div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="text-sm font-bold text-white bg-accent px-3 py-1 rounded-full">Earlier</div>
                  <div>
                    <div className="font-semibold">WordPress Development</div>
                    <div className="text-sm text-gray-600">Built client websites using WordPress, Elementor, and Crocoblock.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
