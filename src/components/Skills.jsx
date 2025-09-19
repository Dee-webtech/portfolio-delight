import React from "react";
import { Code, Smartphone, Globe } from "lucide-react";

export default function Skills() {
  const frontend = [
    { name: "HTML5", level: 95 }, { name: "CSS3", level: 92 }, { name: "JavaScript", level: 85 }, { name: "React", level: 80 }
  ];
  const cms = [{ name: "WordPress", level: 90 }, { name: "Elementor", level: 88 }];

  const Bar = ({ level }) => (
    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
      <div style={{ width: `${level}%` }} className="h-2 rounded-full bg-accent transition-all"></div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Skills</h2>
          <p className="mt-3 text-gray-600">Technical skills and CMS experience.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-soft-lg">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-accent" />
              <h3 className="font-semibold text-primary">Frontend</h3>
            </div>
            <div className="space-y-4">
              {frontend.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm font-medium">{s.name}</div>
                    <div className="text-sm text-gray-500">{s.level}%</div>
                  </div>
                  <Bar level={s.level} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-soft-lg">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-accent" />
              <h3 className="font-semibold text-primary">CMS / Tools</h3>
            </div>
            <div className="space-y-4">
              {cms.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm font-medium">{s.name}</div>
                    <div className="text-sm text-gray-500">{s.level}%</div>
                  </div>
                  <Bar level={s.level} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
