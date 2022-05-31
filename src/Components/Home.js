import React, { useState, useEffect } from "react";
import {
  PageHeader,
  Image,
  Avatar,
  Input,
  Divider,
  Menu,
  Carousel,
  Button,
  Row,
  Col,
  Badge,
  Typography,
} from "antd";
import {
  StyledDivider,
  StyledTitle,
  StyledMenu,
  StyledImage,
  StyledContent,
  StyledDiv,
  StyledPara,
  StyledRow,
} from "./StyledComponents";
import { mockData } from "./Mockdata";
import myImage from "./images/myImage.jpg";
import { Space } from "antd";
import {
  createFromIconfontCN,
  LeftCircleOutlined,
  RightCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Content, Footer } from "antd/lib/layout/layout";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import myimage2 from "./images/myimage2.jpg";
import { Anchor } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Title from "antd/lib/skeleton/Title";
// import { ViewButton } from "../../../FoodRecipe/foodresipie/src/Components/StyledComponents";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
const { Title } = Typography;
const items = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];

const menuItem = (
  <Menu>
    <Menu.Item>Apple</Menu.Item>
  </Menu>
);
const Home = () => {
    const [current, setCurrent] = useState("mail");
    const [chicken, setChicken] = useState(null);
    const [rice, setRice] = useState(null);
  const [diet, setDiet] = useState(null);
  const [loading, setLoading] = useState(false);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  useEffect(() => {
  console.log('FacetTreeView: useEffect entered');

  return () => {
  }
}, [])

  useEffect( ()=>{
 }, []);

  useEffect(() => {
    if (mockData) {
      // setLoading(true);
      const riceData = mockData.filter((data) => data.recipe.type === "Rice");
      console.log(riceData)
      setRice(riceData);
      const chickenData = mockData.filter(
        (data) => data.recipe.type === "Chicken"
      );
      setChicken(chickenData);
      const dietData = mockData.filter((data) => data.recipe.type === "Diet");
      setDiet(dietData);
      // setLoading(false);
    }
  }, [mockData]);




  const RightArrow = () => {
    return <Button icon={<RightCircleOutlined />} size="middle" />;
  };
console.log(mockData,chicken)
  const LeftArrow = () => {
    return <Button icon={<LeftCircleOutlined />} size="middle" />;
  };

  return (
<>
    <StyledTitle
    className="site-page-header"
    title={
      <>
        <img src={myImage} alt="logo" />
        "Recipe Search"
      </>
    }
    extra={
      <>
        <Space>
          <IconFont type="icon-tuichu" />
          <IconFont type="icon-facebook" />
          <IconFont type="icon-twitter" />
        </Space>
        <Input
          placeholder="Search..."
          prefix={
            <>
              <SearchOutlined />
            </>
          }
        />
      </>
    }
  />
  <StyledDivider />

  <StyledMenu mode="horizontal" defaultSelectedKeys={["mail"]}>
    <Menu.SubMenu key="SubMenu" title="Recipes">
      <Menu.Item key="1">Surprise Me!</Menu.Item>
      <Menu.Item key="2">Breakfast</Menu.Item>
      <Menu.Item key="3">Pasta</Menu.Item>
      <Menu.Item key="4">Slow Cooker</Menu.Item>
      <Menu.Item key="5">Soup</Menu.Item>
      <Menu.Item key="6">Vegetarian</Menu.Item>
      <Menu.Item key="7">Vegan</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item key="meal">
    <a href="#chickenID">Chicken</a>

    </Menu.Item>
    <Menu.Item key="Rice">
      <a href="#riceID"> Rice</a>
    </Menu.Item>
    <Menu.Item key="Contact">
    <Link to="/contact">
      <a id="contactID" name="contactID"> Contact</a>
    </Link>
    </Menu.Item>

    <Menu.Item key="Shop">
      <a id="shopID" name="shopID">
        {" "}
        Shop
      </a>
    </Menu.Item>
    <Menu.Item key="About">
    <Link to='/about'>
      <a id="aboutID" name="aboutID">
        {" "}
        About
      </a>
    </Link>
    </Menu.Item>
  </StyledMenu>

  <br />
  <StyledDivider />

  <StyledContent>
    <Row>
      <Col span={14}>
        <Image src={myimage2} width={"100%"} height={"100%"} />
      </Col>
      <Col
        span={9}
        style={{ background: "black", maxWidth: "38.90% !important" }}
      >
        <StyledDiv>
          <Badge
            className="site-badge-count-109"
            count={"LATEST & GREATEST"}
            style={{
              backgroundColor: "#fbc41b",
              color: "white",
              borderRadius: "0px",
              margin: "92px 0px 0px 40px",
            }}
          />
          <Badge
            className="site-badge-count-109"
            count={<Title level={2}>HOMEMADE CHICKEN RECIPIE</Title>}
            style={{
              color: "white",
              borderRadius: "0px",
              margin: "150px 0px -17px -127px",
            }}
          />

          <Badge
            className="cost"
            count={"$3.8 Recipe / 0.48 EACH"}
            style={{
              color: "white",
              borderRadius: "0px",
              margin: "196px 1px -34px -413px",
              background: "transparent",
            }}
          />
          <StyledPara>
            These homemade blueberry muffins are fluffy and moist with a
            deliciously crunchy crumble topping. They're freezer-friendly,
            too!
          </StyledPara>
        </StyledDiv>
      </Col>
    </Row>

    <div id="chickenID">
   
        <Title style={{ textAlign: "center", marginTop: "40px" }}>
          Chicken
        </Title>
        <p style={{ textAlign: "center" }}>
          <StyledDivider />
          Like A Hug, But Chicken: The Most Comforting Chicken Breast
          Recipes.
        </p>
        <StyledRow
        // className="recipe-box"
        //       style={{
        //         display: "grid",
        //         gridTemplateColumns: "  300px 300px 300px 300px ",
        //         justifyContent: "space-around",
        //         borderRadius: "17px",
        //         rowGap: "40px",

        //       }}
        >
          
          {chicken && chicken.map((data) => {
            return (
              <Col span={6}>
                <div>
                  <Image
                    // style={{width: '20%'}}
                    src={data["recipe"].image}
                  />
                          </div>
              </Col>
            );
          })}
          {rice && rice.map((data) => {
            return (
              <Col span={6}>
                <div>
                  <Image
                    // style={{width: '20%'}}
                    src={data["recipe"].image}
                  />
                          </div>
              </Col>
            );
          })}
          {diet && diet.map((data) => {
            return (
              <Col span={6}>
                <div>
                  <Image
                    // style={{width: '20%'}}
                    src={data["recipe"].image}
                  />
                          </div>
              </Col>
            );
          })}
                  {/* <ViewButton
                 type="primary"
                 
                 >
                 View Recipe
                </ViewButton> */}
{/* 
                  <Button type="primary"></Button>
                  <Title level={3}>{data["recipe"]["label"]}</Title>
                  <Title level={5}>{data["recipe"]["source"]}</Title>
                  <Title level={5}>{data["recipe"]["dietLabels"]}</Title> */}
        
        </StyledRow>
    </div>
  </StyledContent>


    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
</>
);
};


export default Home;