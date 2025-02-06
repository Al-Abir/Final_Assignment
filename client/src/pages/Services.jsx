import Layout from "../Layout/Layout";
const ServicesPosts = [
    {
        id: 1,
        title: "Node js",
        description: "Learn the basics of React and how to build modern web applications.",
        image: "https://picsum.photos/seed/picsum/200/300",
       
    },
    {
        id: 2,
        title: "UI Design",
        description: "A comprehensive guide to using Tailwind CSS for styling your web projects.",
        image: "https://picsum.photos/200/300/?blur",
      
    },
    {
        id: 3,
        title: "SDLC",
        description: "Get started with Node.js and build scalable backend applications.",
        image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
      
    },
];
const Services = () => {
    return (
        <Layout>
            <div className="blog-section  py-12 container mx-auto bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-8">Latest Service </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ServicesPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-48 h-48 p-5 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.description}</p>
                                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            
            
        </Layout>
    );
};

export default Services;