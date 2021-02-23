/* eslint-disable react/no-unused-state */
import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Modal, Timeline, Button} from "antd";
import {NEWEST_VERSION} from "../../../utils/constant/index";
import SvgIcon from "../../../icon";

import "./Index.css";

@inject("dialog")
@observer
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      versionNumber: 0,
      versionTimeline: [],
      recommend: null,
      specialInfo: "",
    };
  }

  handleOk = () => {
    this.props.dialog.setVersionOpen(false);
  };

  handleCancel = () => {
    this.props.dialog.setVersionOpen(false);
  };

  handleMore = () => {
    const w = window.open("about:blank");
    w.location.href = "https://github.com/mdnice/markdown-nice/blob/master/CHANGELOG.md";
  };

  handleDocs = () => {
    const w = window.open("about:blank");
    w.location.href = "https://preview.mdnice.com/articles/";
  };

  componentDidMount = async () => {
    try {
      // const {
      //   data: response,
      //   data: {data},
      // } = await axios.get("https://api.mdnice.com/versions/newest");
      const {
        data: response,
        data: {data},
      } = {
        success: true,
        code: 0,
        message: "操作成功！",
        data: {
          versionId: 39,
          versionNumber: "0.0.3",
          versionTimeline: ["2021-02-22 mdnice本地编辑器更新至0.0.3，修复关闭软件后快捷键占用问题，新增社区发布"],
          recommend: {
            link: "https://product.mdnice.com/membership/product",
            mainInfo: "mdnice本地编辑器发布！",
          },
          specialInfo:
            '<div style="display:flex;justify-content:center;align-items:center;"><img style="width:50%;" src="https://cdn.jsdelivr.net/gh/zmj0920/image_store/blog/qrcode_for_gh_52992b8978d4_258.jpg"/></div>',
          feature: {
            windows: "https://files.mdnice.com/desktop/Markdown-Nice-0.0.3.exe",
            mac: "https://files.mdnice.com/desktop/Markdown-Nice-0.0.3.dmg",
          },
          createTime: "2021-02-22T23:55:28.000+0800",
          updateTime: "2021-02-22T23:55:28.000+0800",
        },
      };
      if (!response.success) {
        throw new Error();
      }
      const newestVersion = localStorage.getItem(NEWEST_VERSION);
      if (data.versionNumber !== newestVersion) {
        this.props.dialog.setVersionOpen(true);
        localStorage.setItem(NEWEST_VERSION, data.versionNumber);
      }
      this.setState({
        ...data,
      });
    } catch (err) {
      console.error("读取最新Mdnice版本信息错误");
    }
  };

  render() {
    return (
      <Modal
        title="版本更新"
        visible={this.props.dialog.isVersionOpen}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={this.handleOk}>
            确认{" "}
          </Button>,
        ]}
        destroyOnClose
      >
        <Timeline>
          {" "}
          {this.state.versionTimeline.map((version, index) => {
            if (index === 0) {
              return (
                <Timeline.Item key={index} dot={<SvgIcon name="environment" style={style.svgIcon} />}>
                  {" "}
                  <strong> {version} </strong>{" "}
                </Timeline.Item>
              );
            } else {
              return <Timeline.Item key={index}> {version} </Timeline.Item>;
            }
          })}{" "}
          <Timeline.Item>
            了解更多， 请查看{" "}
            <a
              id="nice-version-dialog-doc"
              style={{
                fontWeight: "bold",
              }}
              alt=""
              href="https://preview.mdnice.com/articles/"
              rel="noopener noreferrer"
              target="_blank"
            >
              用户与开发者文档{" "}
            </a>{" "}
          </Timeline.Item>{" "}
          {this.state.recommend && (
            <Timeline.Item dot={<SvgIcon name="more" style={style.svgIcon} />}>
              {" "}
              <a
                id="nice-version-dialog-recommend"
                style={{
                  fontWeight: "bold",
                  borderBottom: "double",
                }}
                alt=""
                href={this.state.recommend.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {this.state.recommend.mainInfo}{" "}
              </a>{" "}
            </Timeline.Item>
          )}{" "}
        </Timeline>{" "}
        {this.state.specialInfo && (
          <div
            id="nice-version-dialog-special"
            dangerouslySetInnerHTML={{
              __html: this.state.specialInfo,
            }}
            className="specialInfo"
          />
        )}{" "}
      </Modal>
    );
  }
}

const style = {
  svgIcon: {
    width: "16px",
    height: "16px",
  },
};

export default Index;
