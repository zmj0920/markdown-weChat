import React, {Component} from "react";
import {Menu, Dropdown} from "antd";

import SyncScroll from "./SyncScroll";
import ContainImgName from "./ContainImgName";

import "../common.css";

const menu = (
  <Menu>
    <Menu.Item>
      <SyncScroll />
    </Menu.Item>
    <Menu.Item>
      <ContainImgName />
    </Menu.Item>
  </Menu>
);

class Index extends Component {
  render() {
    return (
      <Dropdown overlay={menu} trigger={["click"]} overlayClassName="nice-overlay">
        <a id="nice-menu-setting" className="nice-menu-link" href="#">
          设置
        </a>
      </Dropdown>
    );
  }
}

export default Index;
