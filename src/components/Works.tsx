import { motion } from 'motion/react';
import { useState } from 'react';
import { projects } from '../data';
import type { Category } from '../types';

const categories: Category[] = ['交互设计 Interactive', '空间设计 Spatial', '平面设计 Graphic'];

export default function Works() {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <section id="works" className="py-20 px-6 md:px-0 border-t border-[#E5E5E5]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#999] font-medium mb-4">
            Selected Works // 作品
          </h2>
          <h3 className="text-[24px] md:text-[32px] font-semibold tracking-[-0.03em] text-[#1A1A1A]">
            Recent Projects
          </h3>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-6 text-[12px] uppercase tracking-[0.1em] font-medium">
          <button
            onClick={() => setActiveFilter('All')}
            className={`transition-colors ${activeFilter === 'All' ? 'text-[#1A1A1A]' : 'text-[#999] hover:text-[#1A1A1A]'}`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`transition-colors ${activeFilter === cat ? 'text-[#1A1A1A]' : 'text-[#999] hover:text-[#1A1A1A]'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i % 2 === 0 ? 0 : 0.2 }}
            className="group cursor-pointer bg-white border border-[#EEE] hover:border-[#1A1A1A] p-6 transition-colors duration-300 flex flex-col"
          >
            <div className="overflow-hidden bg-[#F4F4F4] aspect-[4/3] mb-6 relative w-full flex items-center justify-center">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="mt-auto">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#999] mb-2">
                {project.category}
              </div>
              <div className="flex justify-between items-center">
                <h4 className="text-[18px] font-medium text-[#1A1A1A]">
                  {project.title}
                </h4>
                <span className="text-[11px] text-[#BBB] uppercase tracking-[0.1em]">
                  {project.year}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
