const TUTORIALS = [
  {
    title: "第1关：标题",
    content: `
  # 一级标题
  
  ## 二级标题
      
  ### 三级标题`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-9/1599653309621-1.1标题.png",
  },
  {
    title: "第2关：无序列表",
    content: `
  - 无序列表 1
  - 无序列表 2
    - 无序列表 2.1
    - 无序列表 2.2`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-9/1599653309622-1.2无序列表.png",
  },
  {
    title: "第3关：有序列表",
    content: `
  1. 有序列表 1
  2. 有序列表 2
  3. 有序列表 3`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-9/1599653309623-1.3有序列表.png",
  },
  {
    title: "第4关：引用",
    content: `
  一级引用如下：
  
  > ### 一级引用示例
  > 
  > 读一本好书。 **——歌德**
      
  二级引用如下：
  
  >> ### 二级引用示例
  >>
  >> 读一本好书。 **——歌德**
  
  三级引用如下：
  
  >>> ### 三级引用示例
  >>>
  >>> 读一本好书。**——歌德**`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-25/1601015511898-image.png",
  },
  {
    title: "第5关：粗体和斜体",
    content: `
  **这个是粗体**
  
  *这个是斜体*
      
  ***这个是粗体加斜体***`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-9/1599653309625-1.5粗体和斜体.png",
  },
  {
    title: "第6关：链接",
    content: `
  [Markdown Nice最全功能介绍](https://mp.weixin.qq.com/s/lM808MxUu6tp8zU8SBu3sg)
  
  图片还可以和链接嵌套使用，能够实现推荐卡片的效果，用法如下：
  
  [![Markdown Nice 最全功能介绍](https://my-wechat.mdnice.com/dance.gif)](https://mp.weixin.qq.com/s/lM808MxUu6tp8zU8SBu3sg)`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-25/1601015877358-image.png",
  },
  {
    title: "第7关：分割线",
    content: `
  ---`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-9/1599653309626-1.7分割线.png",
  },
  {
    title: "第8关：删除线",
    content: `
  ~~这是要被删除的内容。~~`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-9/1599653309627-1.8删除线.png",
  },
  {
    title: "第9关：表格",
    content: `
  | 姓名       | 年龄 |         工作 |
  | :--------- | :--: | -----------: |
  | 小可爱     |  18  |     吃可爱多 |
  | 小小勇敢   |  20  |   爬棵勇敢树 |
  | 小小小机智 |  22  | 看一本机智书 |`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-9/1599653309628-1.9表格.png",
  },
  {
    title: "第10关：图片",
    content: `
  ![这里写图片描述](https://my-wechat.mdnice.com/wechat.jpg)
  
  ![同时设置宽度和高度](https://my-wechat.mdnice.com/logo.png =150x150)
      
  ![只设置宽度，推荐使用百分比](https://my-wechat.mdnice.com/logo.png =40%x)`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-9/1599653309629-1.10图片.png",
  },
  {
    title: "第11关：脚注",
    content: `
  [全栈工程师](是指掌握多种技能，并能利用多种技能独立完成产品的人。 "什么是全栈工程师")`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-9/1599653309632-2.1脚注.png",
  },
  {
    title: "第12关：代码块",
    content: `
  \`\`\`java
  // FileName: HelloWorld.java
  public class HelloWorld {
    // Java 入口程序，程序从此入口
    public static void main(String[] args) {
      System.out.println("Hello,World!"); // 向控制台打印一条语句
    }
  }
  \`\`\`
  
  支持以下语言种类：
  
  \`\`\`
  bash
  clojure，cpp，cs，css
  dart，dockerfile, diff
  erlang
  go，gradle，groovy
  haskell
  java，javascript，json，julia
  kotlin
  lisp，lua
  makefile，markdown，matlab
  objectivec
  perl，php，python
  r，ruby，rust
  scala，shell，sql，swift
  tex，typescript
  verilog，vhdl
  xml
  yaml
  \`\`\`
  
  diff 效果：
  
  \`\`\`diff
  + 新增项
  - 删除项
  \`\`\``,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-25/1601015700784-image.png",
  },
  {
    title: "第13关：数学公式",
    content: `
  行内公式：$\\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}$
  
  块公式：$$H(D_2) = -\\left(\\frac{2}{4}\\log_2 \\frac{2}{4} + \\frac{2}{4}\\log_2 \\frac{2}{4}\\right) = 1$$`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-9/1599653309648-2.3数学公式.png",
  },
  {
    title: "第14关：TOC",
    content: `
  [TOC]
  
  ## 二级标题
      
  ### 三级标题`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-9/1599653309650-2.4TOC.png",
  },
  {
    title: "第15关：注音符号",
    content: `
  Markdown Nice 这么好用，简直是{喜大普奔|hē hē hē hē}呀！`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-9/1599653309651-2.5注音符号.png",
  },
  {
    title: "第16关：横屏滑动幻灯片",
    content: `
  <![蓝1](https://my-wechat.mdnice.com/blue.jpg),![绿2](https://my-wechat.mdnice.com/green.jpg),![红3](https://my-wechat.mdnice.com/red.jpg)>`,
    picture: "https://gitee.com/guanpengchn/picture/raw/master/2020-9-9/1599653309652-2.6横屏滑动幻灯片.png",
  },
];

export default TUTORIALS;
