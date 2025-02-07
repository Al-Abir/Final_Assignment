import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Modal} from 'antd'
import {Form  } from 'antd'

const AdminTeam = () => {
    const { portfolioData } = useSelector((state) => state.root);
    
       // Ensure data exists before rendering
       if (!portfolioData || !portfolioData.team) {
        return <div>Loading...</div>;
    }
    const {team} = portfolioData;

    const [showAddEditModel,setShowAddEditModel] = useState(false);
    const[seletedItemforEidt,setSeletedItemforEidt] = useState(null);
   
    
    return (
        <section className="py-12 text-white">
        <div className="container mx-auto text-center">
        <div className="flex justify-end">
                <button className="bg-slate-500 px-5 py-2 text-white" onClick={()=>{
                    setSeletedItemforEidt(null)
                    setShowAddEditModel(true)
                }}>Add team Member</button>

            </div>
            <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
            
            <div className="grid px-5 md:grid-cols-3 gap-8">
                {team.length > 0 ? (
                    team.map((member, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                            <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-400">{member.role}</p>

                            <div className="flex justify-end gap-5 mt-3">
                                <button className="bg-purple-400 text-white px-5 py-2">Edit</button>
                                <button className="bg-red-700 text-white px-5 py-2">Delete</button>


                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No team members available.</p>
                )}
            </div>

            <Modal
            visible={showAddEditModel}
            title={seletedItemforEidt ? "Edit Team Member": "Add Team Member"}
            footer={null}
            onCancel={()=> setShowAddEditModel(false)}
            >
                <Form layout="vertical">
                    <Form.Item name='name' label='name'>
                        <input className="input-field" placeholder="name"></input>
                         
                    </Form.Item>
                    <Form.Item name='role' label='role'>
                        <input className="input-field" placeholder="role"></input>
                         
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
    </section>
    );
};

export default AdminTeam;