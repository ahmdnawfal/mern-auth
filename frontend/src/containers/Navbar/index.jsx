import { Col, Row, Space, Typography } from "antd";

const Navbar = () => {
  return (
    <Row gutter={16}>
      <Col span={12}></Col>
      <Col span={12} style={{ display: "flex", justifyContent: "flex-end" }}>
        <Space>
          <Typography.Text>Login</Typography.Text>
        </Space>
      </Col>
    </Row>
  );
};

export default Navbar;
