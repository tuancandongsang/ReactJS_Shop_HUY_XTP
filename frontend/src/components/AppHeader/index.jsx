import {
  LogoutOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Affix, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useHistory } from "react-router-dom";
import "./styles.scss";

AppHeader.propTypes = {};

const items = [
  {
    key: "logo",
    icon: <img src={process.env.PUBLIC_URL + "img/logo.png"} alt="logo" />,
  },
  { key: "home", label: "Trang chủ" },
  { key: "men", label: "Nam" },
  { key: "women", label: "Nữ" },
  { key: "collection", label: "Bộ sưu tập" },
  { key: "sale", label: "Sale" },
  { key: "cart", icon: <ShoppingCartOutlined style={{ fontSize: "23px" }} /> },
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
];
function AppHeader(props) {
  let history = useHistory();
  const handleClick = (val) => {
    if (val.key === "logo") {
      history.push("home");
    } else {
      history.push(val.key);
    }
  };
  return (
    <Affix>
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
            color: "#1e1e1e",
          }}
          defaultSelectedKeys={["home"]}
          items={items}
          onClick={handleClick}
        />
      </Header>
    </Affix>
  );
}

export default AppHeader;
