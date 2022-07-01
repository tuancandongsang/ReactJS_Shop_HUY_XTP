import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import Home from "../../modules/Home";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import "./styles.scss";
const { Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <AppHeader />
      <Content style={{}}>
        <div className="site-layout-content" style={{ minHeight: "72vh" }}>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/employee">
              <h2>Nhan vien</h2>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default App;
