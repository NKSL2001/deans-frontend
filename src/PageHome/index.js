import React from "react";
import { Layout, Button } from "antd";

import NavBar from "src/components/NavBar";
import _Footer from "src/components/Footer";

const { Header, Content, Footer } = Layout;

// eslint-ignore-next-line
class PageHome extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Header>
          {/* <div style={{ display: "inline", width: "3rem" }}>Logo</div> */}
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Report</Menu.Item>
          </Menu> */}
          <NavBar />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div
            style={{
              fontWeight: "bold",
              marginTop: "2rem",
              fontSize: "1.5rem"
            }}
          >
            Real-time Status
          </div>
          <div style={{ textAlign: "left", marginTop: "2rem" }}>
            <iframe
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/view?zoom=10&center=1.3554,103.8677&key=AIzaSyA4Z60Vt8Bq84x2X32NQ286a_2_hADWzqI"
            />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Button type="primary">Customize</Button>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <_Footer />
        </Footer>
      </Layout>
    );
  }
}

export default PageHome;
