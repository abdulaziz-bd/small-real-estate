import teamImage01 from "../../assets/images/team/team-01.png";
import TeamCard from "./TeamCard";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      image: teamImage01,
      name: "Melissa Tatcher",
      designation: "Marketing Expert",
      social: {
        facebookUrl: "https://www.facebook.com",
        TwitterUrl: "https://www.twitter.com",
        InstaUrl: "https://www.instagram.com",
      },
    },
    {
      id: 2,
      image:
        "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-02.png",
      name: "Stuard Ferrel",
      designation: "Digital Marketer",
      social: {
        facebookUrl: "https://www.facebook.com",
        TwitterUrl: "https://www.twitter.com",
        InstaUrl: "https://www.instagram.com",
      },
    },
    {
      id: 3,
      image:
        "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-03.png",
      name: "Eva Hudson",
      designation: "Creative Designer",
      social: {
        facebookUrl: "https://www.facebook.com",
        TwitterUrl: "https://www.twitter.com",
        InstaUrl: "https://www.instagram.com",
      },
    },
    {
      id: 4,
      image:
        "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-04.png",
      name: "Jackie Sanders",
      designation: "Founder of Facebook",
      social: {
        facebookUrl: "https://www.facebook.com",
        TwitterUrl: "https://www.twitter.com",
        InstaUrl: "https://www.instagram.com",
      },
    },
  ];

  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team Members
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Clients
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
