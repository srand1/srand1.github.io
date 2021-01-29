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

Tile.levels = [0, 1, 3, 7, 16, 32, 48];//, 176];
Tile.prototype.level = function () {
  let ans = 0;
  while (Tile.levels[ans] < this.value) ans++;
  //console.log(this.value, ' L ', ans);
  return ans;
};
Tile.texts = [null,
  "孙芮", "陆婷", "宋昕冉", "沈梦瑶", "林思意", "段艺璇", "苏杉杉", "左婧媛",
  "杨冰怡", "许杨玉琢", "张昕", "袁一琦", "王晓佳", "费沁源", "郑丹妮", "谢蕾蕾",
  "陈珂", "张琼予", "唐莉佳", "李佳恩", "刘增艳", "青钰雯", "蒋芸", "刘力菲",
  "方琪", "王睿琦", "曾艾佳", "朱怡欣", "洪静雯", "孙珍妮", "李慧", "张雨鑫",
  "刘胜男", "杨晔", "龙亦瑞", "王秭歆", "陈倩楠", "冉蔚", "梁婉琳", "周诗雨",
  "柏欣妤", "徐楚雯", "田姝丽", "卢天惠", "金莹玥", "陈琳", "张怡", "由淼",
];
Tile.prototype.text = function () {
  return Tile.texts[this.value] || this.value;
};
Tile.cps = {
 '4,12': '黑喵',
 '6,7': '3d',
 '6,9': '水璇',
 '6,16': '璇蕾',
 '6,22': '青璇',
 '7,14': '心费复苏',
 '7,15': '煤蛋',
 '7,24': '煤炭',
 '7,37': '巨杉',
 '8,19': '左佳',
 '10,11': '昕羊',
 '15,17': '蛋珂',
 '16,18': 'so蕾',
 '27,28': '艾朱',
 '32,47': 'w张',
 '33,44': '肥树',
 '44,45': '肥兔',
};
Tile.getMergeLevel = (x, y) => {
  /*
  Object.keys(Tile.cps).forEach(k => {
    console.log(`<${k}>`);
    const [x, y] = k.split(',').map(s => parseInt(s));
    console.assert(x < y);
    console.log(`${Tile.texts[x]} + ${Tile.texts[y]} = ${Tile.cps[k]}`);
  });
  */

  if (x.value > y.value) {
    [x, y] = [y, x];
  }
  const l = x.level();
  const eq = y.level() === l;
  const cp = Tile.cps[x.value+','+y.value];
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
