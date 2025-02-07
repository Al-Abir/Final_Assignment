import { useState } from "react";
import { useSelector } from "react-redux";
import {Modal} from 'antd'
import {Form  } from 'antd'
const AdminBlog = () => {
    const { portfolioData } = useSelector((state) => state.root);
    if(!portfolioData || !portfolioData.blog){
        return <div>loading.........</div>
    }
    const{blog} = portfolioData;

       const [showAddEditModel,setShowAddEditModel] = useState(false);
        const[seletedItemforEidt,setSeletedItemforEidt] = useState(null);

    return (
        <div className="blog-section  py-12 container mx-auto bg-black">
        <div className="container mx-auto px-4">
        <div className="flex justify-end">
                <button className="bg-slate-500 px-5 py-2 text-white" onClick={()=>{
                    setSeletedItemforEidt(null)
                    setShowAddEditModel(true)
                }}>Add New Blog</button>
        </div>
            <h2 className="text-3xl font-bold text-center text-white mb-8">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blog.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-600 mb-4">{post.description}</p>
                            
                            <div className="flex justify-end gap-5 mt-3">
                                <button className="bg-purple-400 text-white px-5 py-2">Edit</button>
                                <button className="bg-red-700 text-white px-5 py-2">Delete</button>


                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
            visible={showAddEditModel}
            title={seletedItemforEidt ? "Edit Blog": "New Blog"}
            footer={null}
            onCancel={()=> setShowAddEditModel(false)}
            >
                <Form layout="vertical">
                    <Form.Item name='title' label='title'>
                        <input className="input-field" placeholder="title"></input>
                         
                    </Form.Item>
                    <Form.Item name='description' label='desription'>
                        <textarea className="text-area" placeholder="dercription"></textarea>
                         
                    </Form.Item>
                    <Form.Item name='image' label='image'>
                        <input className="input-field" placeholder="image url link"></input>
                         
                    </Form.Item>

                    <div className="flex justify-end">
                        <button className="border-red-500   text-black px-5 py-2" onClick={()=>{
                            setShowAddEditModel(false)
                        }}>cancel</button>
                        <button className="bg-slate-900 text-white px-5 py-2">
                            {
                                seletedItemforEidt ? "update": "add"
                            }

                        </button>

                    </div>

                </Form>

            </Modal>
        </div>
    </div>
        
    );
};

export default AdminBlog;