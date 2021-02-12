import React, {Component} from "react";
import {Menu, Dropdown} from "antd";

import FullScreen from "./FullScreen";
import EditArea from "./EditArea";
import PreviewArea from "./PreviewArea";
import ThemeArea from "./ThemeArea";

import "../common.css";

const menu = (
  <Menu>
    <Menu.Item>
      <FullScreen />
    </Menu.Item>

    <Menu.Divider />

    <Menu.Item>
      <EditArea />
    </Menu.Item>
    <Menu.Item>
      <PreviewArea />
    </Menu.Item>
    <Menu.Item>
      <ThemeArea />
    </Menu.Item>
  </Menu>
);

class Index extends Component {
  render() {
    return (
      <Dropdown overlay={menu} trigger={["click"]} overlayClassName="nice-overlay">
        <a id="nice-menu-view" className="nice-menu-link" href="#">
          查看
        </a>
      </Dropdown>
    );
  }
}

export default Index;
