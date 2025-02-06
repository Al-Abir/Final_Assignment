import { Form, Input, Button } from 'antd'; // Import Input, Button from antd
import { useSelector } from 'react-redux';

const AdminIntro = () => {
    const { portfolioData } = useSelector((state) => state.root);
    if (!portfolioData || !portfolioData.intro) {
        return <div>Loading...</div>; // You can show a loading state here
    }

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div>
            <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData.intro}>
                <Form.Item name="welcomeText" label="Welcome Text">
                    <Input className="input-field" placeholder="Intro" />
                </Form.Item>
                <Form.Item name="title" label="Title">
                    <Input className="input-field" placeholder="Title" />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input.TextArea className="text-area" placeholder="Description" />
                </Form.Item>

                <div className="flex justify-end w-full">
                    <Button type="submit"  className="px-10 py-2 bg-blue-400">
                        Save
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default AdminIntro;
