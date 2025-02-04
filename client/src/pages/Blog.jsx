
import Layout from "../Layout/Layout";
const blogPosts = [
    {
        id: 1,
        title: "Introduction to React JS",
        description: "Learn the basics of React and how to build modern web applications.",
        image: "https://picsum.photos/seed/picsum/200/300",
        date: "October 10, 2023",
        link: "/blog/introduction-to-react",
    },
    {
        id: 2,
        title: "Mastering Tailwind CSS",
        description: "A comprehensive guide to using Tailwind CSS for styling your web projects.",
        image: "https://picsum.photos/200/300/?blur",
        date: "October 15, 2023",
        link: "/blog/mastering-tailwind-css",
    },
    {
        id: 3,
        title: "Node.js for Beginners",
        description: "Get started with Node.js and build scalable backend applications.",
        image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
        date: "October 20, 2023",
        link: "/blog/nodejs-for-beginners",
    },
];
const Blog = () => {
    return (
        <Layout>
    <div className="blog-section  py-12 container mx-auto bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-8">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.description}</p>
                                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                                <a
                                    href={post.link}
                                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            
        
        </Layout>
    );
};

export default Blog;