import { Col, Row, Space, Typography } from "antd";
import { UserOutlined, UserAddOutlined } from "@ant-design/icons";

const Signin = () => {
  return (
    <Row gutter={16} align="middle">
      <Col span={12} style={{ display: "flex", justifyContent: "center" }}>
        <Typography.Text style={{ fontSize: 20, fontWeight: 600 }}>
          Mern auth
        </Typography.Text>
      </Col>
      <Col span={12}>
        <Row gutter={16} style={{ justifyContent: "center" }}>
          <Col>
            <Space style={{ cursor: "pointer" }}>
              <UserOutlined style={{ fontSize: 18 }} />
              <Typography.Text type="secondary">Sign In</Typography.Text>
            </Space>
          </Col>
          <Col>
            <Space style={{ cursor: "pointer" }}>
              <UserAddOutlined style={{ fontSize: 18 }} />
              <Typography.Text type="secondary">Register</Typography.Text>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Signin;
