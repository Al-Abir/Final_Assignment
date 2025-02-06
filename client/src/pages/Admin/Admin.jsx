import { Tabs } from 'antd';  // Import Tabs component
import AdminHeader from './AdminHeader';
import AdminIntro from './AdminIntro';

const { TabPane } = Tabs;

const Admin = () => {
  const onChange = (activeKey) => {
    console.log('activeKey changed to: ', activeKey);

  };

  const tabLabelStyle = {
    fontSize: '18px',  
    color: 'white', 
  };

  return (
    <div className="container mx-auto">
      <AdminHeader />
      <div className="mt-5 p-5">
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab={<span style={tabLabelStyle}>Intro</span>} key="1">
           <AdminIntro></AdminIntro>
          </TabPane>
          <TabPane tab={<span style={tabLabelStyle}>About</span>} key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab={<span style={tabLabelStyle}>Blog</span>} key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab={<span style={tabLabelStyle}>Team</span>} key="4">
            Content of Tab Pane 4
          </TabPane>
          <TabPane tab={<span style={tabLabelStyle}>Service</span>} key="5">
            Content of Tab Pane 5
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;