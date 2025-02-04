import Layout from "../Layout/Layout";
import BioData from "../components/BioData";

const About = () => {
    const aboutData = {
        title: "About Me",
        description: `
          Hi, I am Washeikh Al Abir. I am a Computer Science and Engineering graduate. I connect with inspiring individuals, learn from them, and share their insights to help others. I love programming, solving real-world problems, and researching new technologies. The process of learning makes it fun and exciting for me.
        Some of the skills I have worked with include: Data Structures and Algorithms (Java) Web Development (Bootstrap, Tailwind, React JS, JavaScript, MySQL, Node.js, Express.js, MongoDB) Linux OS What I might lack in skills, I make up for with my determination to learn. Outside of tech, I am a food lover. I enjoy cricket and chess, and I have spent time at the movie theater with friends.
        `, // Description as a multi-line string

    };

    const teamMembers = [
        {
            id: 1,
            name: "Rifat",
            role: "Full Stack Developer",
            image: "https://i.ibb.co.com/x8cYjJbd/475352844-1301505631178789-8147960464594723514-n.jpg", // Replace with real image URL
        },
        {
            id: 2,
            name: "Nahian",
            role: "Frontend Developer",
            image: "https://i.ibb.co.com/q3YdvQWD/402928235-1519205871992121-843251453097138135-n.jpg",
        },
        {
            id: 3,
            name: "Tosher",
            role: "Frontend Developer",
            image: "https://i.ibb.co.com/svCsshQw/452922628-1894630937677337-4871837281337586891-n.jpg",
        },
    ];




    return (
        <Layout>
            <div className="container mx-auto py-10">
                <div className="flex flex-col xl:flex-row gap-10">
                    {/* Left Section - BioData */}
                    <div className="w-full xl:w-1/4 flex justify-center">
                        <div className="w-[370px] h-[736px] bg-[#1D1C22] rounded-lg shadow-xl p-4">
                            <BioData />
                        </div>
                    </div>

                    {/* Right Section - About Content */}
                    <div className="xl:w-3/4 p-10 md:p-1  text-white rounded-lg shadow-xl mx-auto">

                        <div className="bg-[#1D1C22] md:w-[850px] p-10 md:p-5 rounded-lg ">
                            <h2 className="text-2xl font-semibold">{aboutData.title}</h2>

                            {/* Dynamic About Description */}
                            <div className="mt-4 space-y-2">
                                <p className="text-gray-300">{aboutData.description}</p> {/* Render the description */}
                            </div>
                        </div>


                        {/* Dynamic Stats Section */}

                        <div className="mt-5 flex md:flex-row">
                            <div>

                            </div>

                        </div>

                    </div>
                </div>


         <section className="py-12 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
                <div className="grid px-5 md:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                            <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-400">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
            </div>
        </Layout>
    );
};

export default About;