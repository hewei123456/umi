const provinces = [
  {
    id: 0,
    name: '北京',
    num: 11000,
    lonlat: [116.40, 39.90],
  }, {
    id: 1,
    name: '天津',
    num: 8000,
    lonlat: [117.20, 39.12],
  }, {
    id: 2,
    name: '上海',
    num: 10000,
    lonlat: [121.47, 31.23],
  }, {
    id: 3,
    name: '河北',
    num: 10000,
    lonlat: [114.52, 38.05],
  }, {
    id: 4,
    name: '山西',
    num: 10000,
    lonlat: [112.55, 37.87],
  }, {
    id: 5,
    name: '内蒙古',
    num: 10000,
    lonlat: [111.73, 40.83],
  }, {
    id: 6,
    name: '辽宁',
    num: 10000,
    lonlat: [123.43, 41.80],
  }, {
    id: 7,
    name: '吉林',
    num: 10000,
    lonlat: [125.32, 43.90],
  }, {
    id: 8,
    name: '黑龙江',
    num: 10000,
    lonlat: [126.53, 45.80],
  }, {
    id: 9,
    name: '江苏',
    num: 10000,
    lonlat: [118.78, 32.07],
  }, {
    id: 10,
    name: '浙江',
    num: 10000,
    lonlat: [120.15, 30.28],
  }, {
    id: 11,
    name: '安徽',
    num: 10000,
    lonlat: [117.25, 31.83],
  }, {
    id: 12,
    name: '福建',
    num: 10000,
    lonlat: [119.30, 26.08],
  }, {
    id: 13,
    name: '江西',
    num: 10000,
    lonlat: [115.85, 28.68],
  }, {
    id: 14,
    name: '山东',
    num: 10000,
    lonlat: [116.98, 36.67],
  }, {
    id: 15,
    name: '河南',
    num: 10000,
    lonlat: [113.62, 34.75],
  }, {
    id: 16,
    name: '湖北',
    num: 11000,
    lonlat: [114.30, 30.60],
  }, {
    id: 17,
    name: '湖南',
    num: 8000,
    lonlat: [112.93, 28.23],
  }, {
    id: 18,
    name: '广东',
    num: 10000,
    lonlat: [113.27, 23, 13],
  }, {
    id: 19,
    name: '广西',
    num: 10000,
    lonlat: [108.37, 22.82],
  }, {
    id: 20,
    name: '海南',
    num: 10000,
    lonlat: [110.32, 20.03],
  }, {
    id: 21,
    name: '内蒙古',
    num: 10000,
    lonlat: [111.73, 40.83],
  }, {
    id: 22,
    name: '重庆',
    num: 10000,
    lonlat: [106.55, 29.57],
  }, {
    id: 23,
    name: '四川',
    num: 10000,
    lonlat: [104.07, 30.67],
  }, {
    id: 24,
    name: '贵州',
    num: 10000,
    lonlat: [106.63, 26.65],
  }, {
    id: 25,
    name: '云南',
    num: 10000,
    lonlat: [102.72, 25.05],
  }, {
    id: 26,
    name: '西藏',
    num: 10000,
    lonlat: [91.13, 29.65],
  }, {
    id: 27,
    name: '陕西',
    num: 10000,
    lonlat: [108.93, 34.27],
  }, {
    id: 28,
    name: '甘肃',
    num: 10000,
    lonlat: [103.82, 36.07],
  }, {
    id: 29,
    name: '青海',
    num: 10000,
    lonlat: [101.78, 36.62],
  }, {
    id: 30,
    name: '宁夏',
    num: 10000,
    lonlat: [106.28, 38.47],
  }, {
    id: 31,
    name: '新疆',
    num: 10000,
    lonlat: [87.62, 43.82],
  }, {
    id: 32,
    name: '香港',
    num: 10000,
    lonlat: [114.08, 22.20],
  }, {
    id: 33,
    name: '澳门',
    num: 10000,
    lonlat: [113.33, 22.13],
  }, {
    id: 34,
    name: '台湾',
    num: 10000,
    lonlat: [121.50, 25.03],
  },
];

export default {
  'GET /api/statistic/provinces': { provinces },
};
