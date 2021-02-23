/* eslint-disable import/no-unresolved */
import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import classnames from "classnames";
import File from "../../component/MenuLeft/File/Index";
import Tutorial from "../../component/MenuLeft/Tutorial";
import Pattern from "../../component/MenuLeft/Pattern/Index";
import Function from "../../component/MenuLeft/Function/Index";
import Theme from "../../component/MenuLeft/Theme/Index";
import CodeTheme from "../../component/MenuLeft/CodeTheme/Index";
import Setting from "../../component/MenuLeft/Setting/Index";
import View from "../../component/MenuLeft/View/Index";
import SvgIcon from "../../icon";
import {Tooltip} from "antd";
import "./Index.css";

@inject("view")
@observer
class Index extends Component {
  render() {
    const {title, token} = this.props;
    const {isImmersiveEditing} = this.props.view;
    const niceNavbarClass = classnames({
      "nice-navbar": true,
      "nice-navbar-hide": isImmersiveEditing,
    });
    return (
      <div className={niceNavbarClass}>
        <div className="nice-left-nav">
          <Tooltip placement="top" title="文章列表">
            <button className="ant-btn nice-btn-article" type="button">
              <SvgIcon name="note" className="nice-btn-note-icon" />
            </button>
          </Tooltip>
          {title === "" ? null : (
            <section id="nice-title" className="nice-title">
              {title}
            </section>
          )}
          <File />
          <Pattern />
          <Function />
          <View />
          <Theme token={token} />
          <CodeTheme />
          <Setting />
          <Tutorial />
        </div>
        <div className="nice-right-nav" />
      </div>
    );
  }
}

export default Index;
