function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};

Tile.EXTRA = 3;
Tile.levels = [0, 1].concat([0, 1, 3, 7, 16, 32, 48, 176].map(v => v+Tile.EXTRA));
Tile.prototype.level = function () {
  let ans = 0;
  while (Tile.levels[ans] < this.value) ans++;
  //console.log(this.value, ' L ', ans);
  return ans;
};
Tile.texts = [null,
  "🥟", "鞠婧祎", "李艺彤",
  // 1
  "孙芮", "陆婷", "宋昕冉", "沈梦瑶", "林思意", "段艺璇", "苏杉杉", "左婧媛",
  "杨冰怡", "许杨玉琢", "张昕", "袁一琦", "王晓佳", "费沁源", "郑丹妮", "谢蕾蕾",
  "陈珂", "张琼予", "唐莉佳", "李佳恩", "刘增艳", "青钰雯", "蒋芸", "刘力菲",
  "方琪", "王睿琦", "曾艾佳", "朱怡欣", "洪静雯", "孙珍妮", "李慧", "张雨鑫",
  "刘胜男", "杨晔", "龙亦瑞", "王秭歆", "陈倩楠", "冉蔚", "梁婉琳", "周诗雨",
  "柏欣妤", "徐楚雯", "田姝丽", "卢天惠", "金莹玥", "陈琳", "张怡", "由淼",
  // 49
  "陈雨孜", "刘丽千", "邵雪聪", "王秋茹", "温晶婕", "袁雨桢",
  // 55
  "陈佳莹", "江真仪", "刘洁", "颜沁", "张茜", "张睿婕", "赵佳蕊",
  // 62
  "陈盼", "郭爽", "郝婧怡", "洪珮云", "姜杉", "蒋舒婷", "李玉倩", "林楠", "林舒晴", "宋雨珊", "万丽娜", "王欣颜甜甜", "王奕",
  // 75
  "冯晓菲", "李星羽", "李钊", "吕一", "潘璐瑶", "潘瑛琪", "祁静", "孙歆文", "汪佳翎", "王菲妍", "谢天依", "张嘉予",
  // 87
  "沈小爱", "张怀瑾", "马玉灵", "赵天杨", "黄恩茹", "胡晓慧", "何阳青青", "张笑盈",
  // 95
  "程戈", "吕蕊", "刘姝贤", "宁轲", "曲美霖", "孙晓艳", "闫明筠", "张梦慧",
  // 103
  "程宇璐", "冯思佳", "李娜", "彭嘉敏", "任蔓琳", "王雨兰", "顼凘炀", "熊鑫", "郑一凡", "张智杰",
  // 113
  "金锣赛", "刘闲", "刘一菲", "孙语姗", "唐霖", "周湘",
  // 119
  "王丹妮", "张睿怡",
  // 121
  "陈佳莹", "符冰冰", "黄楚茵", "罗寒月", "梁娇", "林嘉佩", "罗可嘉", "李姗姗", "林芝", "徐慧玲", "阳青颖", "叶舒淇",
  // 133
  "陈楠茜", "卢静", "刘倩倩", "吴羽霏", "谢艾琳", "徐佳音", "冼燊楠", "张润",
  // 141
  "陈桂君", "邓惠恩", "梁乔", "农燕萍", "王翠菲", "王炯义", "王偲越", "谢菲菲", "杨可璐", "杨媛媛",
  // 151
  "刘果", "莫昕", "马昕玥", "石竹君", "吴思琪", "杨若惜", "张书瑀",
  // 158
  "江鑫", "赖俊亦", "雷宇霄", "刘弋菡", "毛译晗", "谯玉珍", "田倩兰", "王嘉瑜", "王梦竹", "魏小燕", "吴学雨", "杨允涵", "周倩玉", "左欣", "张幼柠",
  // 173
  "高蔚然", "高雪逸", "王梓", "杨宇馨",
];
Tile.prototype.text = function () {
  return Tile.texts[this.value] || this.value;
};
Tile.cps = {
 '3,104': '北宋',
 '4,12': '黑喵',
 '6,7': '3d',
 '6,9': '水璇',
 '6,12': '拐璇',
 '6,16': '璇蕾',
 '6,22': '青璇',
 '6,89': '灵璇',
 '6,92': '璇慧',
 '6,97': '段奶',
 '7,14': '心费复苏',
 '7,15': '煤蛋',
 '7,24': '煤炭',
 '7,37': '巨杉',
 '7,89': '灵杉',
 '7,104': '北杉',
 '7,106': '苏有彭',
 '8,19': '左佳',
 '10,11': '昕羊',
 '15,17': '蛋珂',
 '16,18': 'so蕾',
 '24,135': 'w刘',
 '25,136': '比翼琪霏',
 '27,28': '艾朱',
 '32,47': 'w张',
 '33,44': '肥树',
 '33,89': '玉树',
 '33,109': '星树',
 '35,150': '龙媛',
 '36,149': '歆璐',
 '37,89': '哥弟',
 '37,91': '巨茹',
 '40,74': '诗情画奕',
 '41,128': '册白',
 '44,45': '肥兔',
 '48,106': '小彭由',
 '57,94': '盈刘之主',
 '65,70': '多云转晴',
 '70,104': '北京爱晴',
 '78,93': '青吕',
 '87,101': '菌爱',
 '89,103': '马璐',
 '89,104': '马北',
 '89,109': '灵星',
 '90,95': '戈杨',
 '92,97': '奶包',
 '94,106': '彭扣',
 '103,105': '没不',
 '103,106': '彭程万里',
 '104,107': '北蔓',
 '104,109': '北极星',
 '124,125': '月娇',
 '125,143': '大小乔',
 '134,140': 'w门',
 '143,148': '乔菲',
 '173,176': '艾馨',
};
Tile.SWITCH = document.querySelector('#easter');
Tile.DINGDONG = new Audio('img/dingdong.mp3');
Tile.getMergeLevel = (x, y) => {
  /*
  Object.keys(Tile.cps).forEach(k => {
    console.log(`<${k}>`);
    const [x, y] = k.split(',').map(s => parseInt(s));
    console.assert(x < y);
    console.log(`${Tile.texts[x+Tile.EXTRA]} + ${Tile.texts[y+Tile.EXTRA]} = ${Tile.cps[k]}`);
  });
  */

  if (Tile.SWITCH.checked && (x.value-Tile.EXTRA === 88 || y.value-Tile.EXTRA === 88)) {
    return x.value === y.value ? x.level() - 1 : 0;
  }

  if (x.value > y.value) {
    [x, y] = [y, x];
  }
  const l = x.level();
  const eq = y.level() === l;
  const cp = Tile.cps[(x.value-Tile.EXTRA)+','+(y.value-Tile.EXTRA)];
  if (!cp) {
    if (eq) {
      return l-1;
    } else {
      return 0;
    }
  } else {
    console.log(cp + 'ttl');
    if (eq) {
      return l-2;
    } else {
      return l-1;
    }
  }
};
