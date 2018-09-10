import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

// eslint-ignore-next-line
class PageHome extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Header>
          {/* <div style={{ display: "inline", width: "3rem" }}>Logo</div> */}
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Report</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <iframe
            width="600"
            height="450"
            frameborder="0"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/view?zoom=10&center=1.3554,103.8677&key=..."
        />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Dean &copy; 2018 | Admin Login
        </Footer>
      </Layout>
    );
  }
}

export default PageHome;
