// 国内DNS服务器
const domesticNameservers = [
  "https://223.5.5.5/dns-query", // 阿里DoH
  "https://doh.pub/dns-query" // 腾讯DoH
];
// 国外DNS服务器
const foreignNameservers = [
  "https://208.67.222.222/dns-query", // OpenDNS
  "https://77.88.8.8/dns-query", // YandexDNS
  "https://1.1.1.1/dns-query", // CloudflareDNS
  "https://8.8.4.4/dns-query", // GoogleDNS
];
// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": false,
  "prefer-h3": false,
  "respect-rules": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    "+.lan",
    "+.local",
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    "+.in-addr.arpa",
    "+.ip6.arpa",
    "time.*.com",
    "time.*.gov",
    "pool.ntp.org",
    "localhost.work.weixin.qq.com",
    "+.weixin.qq.com",
    "+.wechat.com",
    "+.qpic.cn",
    "+.qq.com",
    "+.tenpay.com"
  ],
  "default-nameserver": ["223.5.5.5", "1.2.4.8"],
  "nameserver": [...foreignNameservers],
  "proxy-server-nameserver": [...domesticNameservers],
  "direct-nameserver": [...domesticNameservers],
  "nameserver-policy": {
    "geosite:private,cn": domesticNameservers
  }
};

// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};

// 规则集配置
const ruleProviders = {
  "reject": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/loyalsoldier/reject.yaml"
  },
  "icloud": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/loyalsoldier/icloud.yaml"
  },
  "apple": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/loyalsoldier/apple.yaml"
  },
  "google": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    "path": "./ruleset/loyalsoldier/google.yaml"
  },
  "proxy": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/loyalsoldier/proxy.yaml"
  },
  "direct": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml"
  },
  "private": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml"
  },
  "gfw": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/loyalsoldier/gfw.yaml"
  },
  "tld-not-cn": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/loyalsoldier/tld-not-cn.yaml"
  },
  "telegramcidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml"
  },
  "cncidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml"
  },
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  },
  "applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  },
  "bahamut": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Bahamut.txt",
    "path": "./ruleset/xiaolin-007/bahamut.yaml"
  },
  "YouTube": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/YouTube.txt",
    "path": "./ruleset/xiaolin-007/YouTube.yaml"
  },
  "Netflix": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Netflix.txt",
    "path": "./ruleset/xiaolin-007/Netflix.yaml"
  },
  "Spotify": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Spotify.txt",
    "path": "./ruleset/xiaolin-007/Spotify.yaml"
  },
  "BilibiliHMT": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/BilibiliHMT.txt",
    "path": "./ruleset/xiaolin-007/BilibiliHMT.yaml"
  },
  "AI": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/AI.txt",
    "path": "./ruleset/xiaolin-007/AI.yaml"
  },
  "TikTok": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/TikTok.txt",
    "path": "./ruleset/xiaolin-007/TikTok.yaml"
  },
};

// 规则集
const rules = [
  // ===== 自定义直连配置 (保留用户原始直连地址) =====
  "IP-CIDR,192.168.0.0/16,全局直连,no-resolve",
  "DOMAIN-SUFFIX,wf2016uu.xyz,全局直连,no-resolve",
  "DOMAIN-SUFFIX,wf.wf2016uu.xyz,全局直连,no-resolve",
  "DOMAIN-SUFFIX,www.wf2016uu.xyz,全局直连,no-resolve",
  "DOMAIN-SUFFIX,mp.weixin.qq.com,全局直连,no-resolve",

  // ===== 屏蔽 QUIC (迫使微信、Chrome 等回退到更稳定的 TCP) =====
  "AND,(AND,(DST-PORT,443),(NETWORK,UDP)),(NOT,((GEOIP,CN))),REJECT",

  // ===== 微信及腾讯系图片 CDN 强制直连 =====
  "DOMAIN-KEYWORD,weixin,全局直连",
  "DOMAIN-SUFFIX,qpic.cn,全局直连",
  "DOMAIN-SUFFIX,qlogo.cn,全局直连",
  "DOMAIN-SUFFIX,servicewechat.com,全局直连",
  "DOMAIN-SUFFIX,tenpay.com,全局直连",
  "DOMAIN-SUFFIX,qq.com,全局直连",
  "DOMAIN-SUFFIX,gtimg.cn,全局直连",
  "DOMAIN-SUFFIX,wechat.com,全局直连",
  "DOMAIN-SUFFIX,wechatos.net,全局直连",

  // ===== NotebookLM / Gemini / Google AI Studio (精准强制走 AI 策略组) =====
  "DOMAIN-SUFFIX,notebooklm.google,自动选择",
  "DOMAIN-SUFFIX,notebooklm.google.com,自动选择",
  "DOMAIN-SUFFIX,gemini.google.com,自动选择",
  "DOMAIN-SUFFIX,aistudio.google.com,自动选择",
  "DOMAIN-SUFFIX,generativelanguage.googleapis.com,自动选择", // Gemini API / AI Studio API
  "DOMAIN-SUFFIX,alkalimina-pa.clients6.google.com,自动选择", // Gemini Web API
  "DOMAIN-KEYWORD,notebooklm,自动选择",
  "DOMAIN-KEYWORD,gemini,自动选择",

  // ===== Github & Custom =====
  "DOMAIN-SUFFIX,github.io,自动选择",
  "DOMAIN,v2rayse.com,自动选择",

  // 规则集分流 - 直连与去广告
  "RULE-SET,applications,全局直连",
  "RULE-SET,private,全局直连",
  "RULE-SET,reject,广告过滤",
  
  // 规则集分流 - AI 优先匹配
  "RULE-SET,AI,自动选择",

  // ===== Google 服务 =====
  "DOMAIN-SUFFIX,googleapis.com,自动选择",
  "DOMAIN-SUFFIX,googleusercontent.com,自动选择",
  "DOMAIN-SUFFIX,accounts.google.com,自动选择",
  "DOMAIN-SUFFIX,gstatic.com,自动选择",
  "DOMAIN-SUFFIX,google.com,自动选择",
  "DOMAIN-SUFFIX,googleapis.cn,自动选择",
  "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,自动选择",
  "RULE-SET,google,自动选择",

  // 规则集分流 - 其他流媒体及服务
  "RULE-SET,icloud,自动选择",
  "RULE-SET,apple,自动选择",
  "RULE-SET,YouTube,自动选择",
  "RULE-SET,Netflix,自动选择",
  "RULE-SET,bahamut,自动选择",
  "RULE-SET,Spotify,自动选择",
  "RULE-SET,BilibiliHMT,自动选择",
  "RULE-SET,TikTok,自动选择",

  // 规则集分流 - 核心路由 (注意：direct 必须在 proxy/gfw/tld-not-cn 之前)
  "RULE-SET,direct,全局直连",
  "RULE-SET,proxy,自动选择",
  "RULE-SET,gfw,自动选择",
  "RULE-SET,tld-not-cn,自动选择",
  "RULE-SET,lancidr,全局直连,no-resolve",
  "RULE-SET,cncidr,全局直连,no-resolve",
  "RULE-SET,telegramcidr,自动选择,no-resolve",

  // 兜底规则
  "GEOSITE,CN,全局直连",
  "GEOIP,LAN,全局直连,no-resolve",
  "GEOIP,CN,全局直连,no-resolve",
  "MATCH,漏网之鱼"
];

// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  config["dns"] = dnsConfig;

  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "自动选择",
      "type": "fallback",
      "proxies": ["美国自动", "新加坡自动", "日本自动"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
    },
    {
      ...groupBaseOption,
      "name": "美国自动",
      "type": "url-test",
      "include-all": true,
      "filter": "(?i)美|US|United States",
      "hidden": true
    },
    {
      ...groupBaseOption,
      "name": "新加坡自动",
      "type": "url-test",
      "include-all": true,
      "filter": "(?i)新|SG|Singapore",
      "hidden": true
    },
    {
      ...groupBaseOption,
      "name": "日本自动",
      "type": "url-test",
      "include-all": true,
      "filter": "(?i)日|JP|Japan",
      "hidden": true
    },
    {
      ...groupBaseOption,
      "name": "全局直连",
      "type": "select",
      "proxies": ["DIRECT", "自动选择"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
    },
    {
      ...groupBaseOption,
      "name": "广告过滤",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg"
    },
    {
      ...groupBaseOption,
      "name": "漏网之鱼",
      "type": "select",
      "proxies": ["自动选择", "全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
    }
  ];

  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  if (config["proxies"]) {
    config["proxies"].forEach(proxy => {
      proxy.udp = true;
    });
  }

  if (config["proxy-providers"] && typeof config["proxy-providers"] === "object") {
    Object.values(config["proxy-providers"]).forEach(provider => {
      provider.override = {
        ...provider.override,
        udp: true
      };
    });
  }

  return config;
}