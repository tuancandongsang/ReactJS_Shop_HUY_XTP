import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import Home from "../../modules/Home";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import "./styles.scss";
import ListProduct from "../../modules/ListProductPage/ListProduct";
import ProductDetails from "../../modules/ProductDetailsPage/ProductDetails";
import Login from "../../modules/Auth/Login";
const { Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/logout" />
        <Route exact path="/">
          <AppHeader />
          <Content style={{}}>
            <div className="site-layout-content" style={{ minHeight: "72vh" }}>
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>

                <Route path="/men">
                  <ListProduct gender="men" />
                </Route>

                <Route path="/women">
                  <ListProduct gender="women" />
                </Route>

                <Route
                  path="/product/:id"
                  render={({ match }) => (
                    <ProductDetails id={match.params.id} />
                  )}
                />

                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Content>
          <AppFooter />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
