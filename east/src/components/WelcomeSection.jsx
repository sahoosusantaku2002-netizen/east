export default function WelcomeSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center animate-on-scroll max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Welcome to <span className="text-primary">Eastern Academy of Science & Technology</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            On the beautiful banks of Prachi stands the imposing campus of EAST, eager to
            mould the future of the youth of Odisha. EAST imparts Quality Education, moulds
            Honest Personality, instills Immaculate Integrity, creates Dazzling Dignity, and
            inspires Noble Nationalism — the five qualities that chart the course of a
            student's future.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our campus is fully digital with DELNET access, alert internet connectivity,
            Gyan Darshan — the nodal centre of H.P., well-equipped laboratories, smart
            classrooms, and a vibrant academic environment designed to nurture the next
            generation of engineers and technocrats.
          </p>
        </div>
      </div>
    </section>
  );
}
