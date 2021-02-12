import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import classnames from "classnames";

import PreviewType from "../../component/Sidebar/PreviewType";
import Wechat from "../../component/Sidebar/Wechat";
import Zhihu from "../../component/Sidebar/Zhihu";
import Juejin from "../../component/Sidebar/Juejin";
// eslint-disable-next-line import/no-unresolved
import "./Index.css";

// @inject("userInfo")
@inject("view")
@observer
class Index extends Component {
  render() {
    const {isImmersiveEditing} = this.props.view;
    const niceSidebarClass = classnames({
      "nice-sidebar": true,
      "nice-sidebar-hide": isImmersiveEditing,
    });
    return (
      <div className={niceSidebarClass}>
        <Wechat />
        <Zhihu />
        <Juejin />
        <PreviewType />
      </div>
    );
  }
}

export default Index;
