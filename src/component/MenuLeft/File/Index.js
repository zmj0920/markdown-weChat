import React, {Component} from "react";
import {Menu, Dropdown} from "antd";

import ExportMarkdown from "./ExportMarkdown";
import ExportPdf from "./ExportPdf";
import ImportFile from "./ImportFile";
import "../common.css";

const menu = (
  <Menu>
    <Menu.Item>
      <ExportMarkdown />
    </Menu.Item>
    <Menu.Item>
      <ExportPdf />
    </Menu.Item>
    <Menu.Item>
      <ImportFile />
    </Menu.Item>
  </Menu>
);

class Index extends Component {
  render() {
    return (
      <Dropdown overlay={menu} trigger={["click"]} overlayClassName="nice-overlay">
        <a id="nice-menu-file" className="nice-menu-link" href="#">
          文件
        </a>
      </Dropdown>
    );
  }
}

export default Index;
