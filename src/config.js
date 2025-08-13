const config = {
  // 网站元数据配置
  metaData: {
    title: "FateVerse | 我的世界命运宇宙服务器",
    description: "FateVerse是基于《我的世界》的生存插件服务器，融合Fate系列元素，体验从者召唤与圣杯战争的独特玩法",
    keywords: "FateVerse,我的世界,MC服务器,Fate,生存插件,圣杯战争,从者召唤",
    icon: "/img/fateverse-icon.png"
  },

  // 主页展示信息
  avatar: "/img/fateverse-logo.png",
  welcometitle: "Welcome to FateVerse",
  subTitle: "在方块世界中书写属于你的命运传奇",
  signature: "命运的齿轮已经转动，加入我们，共同创造传奇",
  
  // 颜色配置
  color: {
    themecolor: "#1a1a2e",
    welcometitlecolor: "#e6b89c",
    turntablecolor1: "#6a0572",
    turntablecolor2: "#16213e",
    cardcolor: "rgba(30, 30, 50, 0.8)",
    textcolor: "#f0f0f0"
  },

  // 背景配置
  brightness: 70,
  blur: 5,
  background: {
    "pc": {
      "type": "pic",
      "datainfo": {
        "title": "FateVerse服务器全景",
        "preview": "/img/background-preview.webp",
        "url": "/img/fateverse-map.jpg"
      }
    },
    "mobile": {
      "type": "pic",
      "datainfo": {
        "title": "FateVerse移动版背景",
        "preview": "/img/mobile-preview.webp",
        "url": "/img/fateverse-mobile-bg.jpg"
      }
    }
  },

  // 服务器特色标签
  tags: ["Fate主题", "生存插件", "圣杯战争", "从者召唤", "团队协作", "定期活动", "自定义装备"],

  // 打字机效果文本
  typeWriterStrings: [
    "在方块中书写你的命运",
    "召唤专属从者并肩作战",
    "参与圣杯战争赢得奖励",
    "探索命运节点解锁隐藏剧情",
    "FateVerse——不止是生存"
  ],
  typeSpeed: 100,
  backSpeed: 50,

  // 服务器功能模块
  polarChart: {
    skills: ["从者系统", "圣杯战争", "魔术工坊", "命运节点", "副本挑战", "社区互动"],
    skillPoints: [95, 90, 85, 80, 85, 90],
    title: "服务器核心功能"
  },

  // 服务器版本与更新
  projectCards: [
    {
      title: "FateVerse v1.0 正式版",
      description: "包含6种职阶从者、基础圣杯战争模式、5个命运节点地图和魔术工坊系统",
      tags: ["生存", "PVE", "新手友好"],
      imageUrl: "/img/v1.0-update.jpg",
      link: "/updates/v1.0"
    },
    {
      title: "v1.1 版本更新计划",
      description: "新增3个职阶从者、大型团队副本「亚种圣杯战争」和玩家交易系统",
      tags: ["开发中", "PVP", "团队协作"],
      imageUrl: "/img/upcoming-update.jpg",
      link: "/plans"
    },
    {
      title: "服务器规则与指南",
      description: "详细介绍服务器玩法、禁止行为和新手入门指南",
      tags: ["必读", "指南", "规则"],
      imageUrl: "/img/guide.jpg",
      link: "/guide"
    }
  ],

  // 社交与联系方式
  socialPlatformIcons: [
    { icon: "mdi-discord", link: "https://discord.gg/fateverse" },
    { icon: "mdi-github", link: "https://github.com/你的用户名/fateverse" },
    { icon: "mdi-youtube", link: "https://youtube.com/c/FateVerse" },
    { icon: "mdi-twitter", link: "https://twitter.com/fateverse_server" },
    { icon: "mdi-envelope", link: "mailto:admin@fateverse.com" }
  ],

  // 背景音乐配置
  music: {
    enable: true,
    autoplay: false,
    list: [
      {
        name: "Fate Theme",
        artist: "Original Soundtrack",
        url: "/music/fate-theme.mp3",
        cover: "/img/fate-cover.jpg"
      },
      {
        name: "Battle of Heroes",
        artist: "Original Soundtrack",
        url: "/music/battle-of-heroes.mp3",
        cover: "/img/battle-cover.jpg"
      }
    ]
  },

  // 服务器状态展示
  serverStatus: {
    enable: true,
    address: "mc.fateverse.com",
    port: "25565"
  },

  // 加入按钮配置
  joinButton: {
    text: "立即加入服务器",
    link: "minecraft://connect?serverAddress=mc.fateverse.com&serverPort=25565",
    color: "#e6b89c"
  }
};

export default config;
