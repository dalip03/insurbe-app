import Image from "next/image";

const teamMembers = [
  {
    name: "John Smith",
    image: "/about/team1.png",
  },
  {
    name: "David Lee",
    image: "/about/team2.png",
  },
  {
    name: "Lisa Adams",
    image: "/about/team3.png",
  },
  {
    name: "Sophie Wang",
    image: "/about/team4.png",
  },
];

export default function MeetTheTeamSection() {
  return (
    <section className="py-20 px-4 sm:px-10 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        We&apos;re a passionate team of innovators, problem-solvers, and customer
        advocates.
      </p>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 justify-items-center ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-64 h-90 rounded-2xl overflow-hidden shadow-md bg-[#5e2b9c] "
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
