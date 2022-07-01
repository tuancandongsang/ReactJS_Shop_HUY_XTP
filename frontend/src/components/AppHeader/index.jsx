import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Image, Menu, Icon, Avatar } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useHistory } from "react-router-dom";
import "./styles.scss";

AppHeader.propTypes = {};

const items = [
  {
    key: "home",
    icon: <img src={process.env.PUBLIC_URL + "images/logo.png"} />,
  },
  { key: "home", label: "Trang chủ" },
  { key: "top", label: "Áo" },
  { key: "bottom", label: "Quần" },
  { key: "accessories", label: "Phụ kiện" },
  {
    key: "user",
    icon: <UserOutlined style={{ fontSize: "23px" }} />,
    children: [
      { label: "Thông tin", key: "infoUser", icon: <UserOutlined /> },
      {
        label: "Đổi mật khẩu",
        key: "chagePassword",
        icon: <SettingOutlined />,
      },
      {
        label: "Đăng xuất",
        key: "logout",
        icon: <LogoutOutlined />,
      },
    ],
  },
  { key: "cart", icon: <ShoppingCartOutlined style={{ fontSize: "23px" }} /> },
];
function AppHeader(props) {
  let history = useHistory();
  const handleClick = (val) => {
    history.push(val.key);
  };
  return (
    <Header>
      <Menu
        theme="light"
        mode="horizontal"
        style={{
          borderBottom: "none",
          backgroundColor: "#dfdfdf",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
        defaultSelectedKeys={["home"]}
        items={items}
        onClick={handleClick}
      />
    </Header>
  );
}

export default AppHeader;
