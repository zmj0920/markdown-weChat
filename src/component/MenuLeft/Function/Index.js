import React, {Component} from "react";
import {Menu, Dropdown} from "antd";

import Reset from "./Reset";
import Search from "./Search";
import History from "./History";
import SitDown from "./SitDown";

import "../common.css";

const menu = (
  <Menu>
    <Menu.Item>
      <Reset />
    </Menu.Item>
    <Menu.Item>
      <Search />
    </Menu.Item>

    <Menu.Divider />

    <Menu.Item>
      <History />
    </Menu.Item>
    <Menu.Item>
      <SitDown />
    </Menu.Item>
  </Menu>
);

class Index extends Component {
  render() {
    return (
      <Dropdown overlay={menu} trigger={["click"]} overlayClassName="nice-overlay">
        <a id="nice-menu-function" className="nice-menu-link" href="#">
          功能
        </a>
      </Dropdown>
    );
  }
}

export default Index;
