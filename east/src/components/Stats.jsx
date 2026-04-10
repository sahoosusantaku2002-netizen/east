import { useCountUp } from '../hooks/useCountUp';
import { stats } from '../data/siteData';

function StatCard({ value, suffix, label }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center p-4 sm:p-6">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
        {count}
        <span className="text-secondary">{suffix}</span>
      </div>
      <div className="text-sm sm:text-base text-blue-100 font-medium">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-primary-dark via-primary to-primary-light py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
