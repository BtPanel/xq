import { _ } from "assets://js/lib/cat.js";
let key = '音乐鉴赏';
let homeName = '音乐合集';
let HOST = 'https://api.bilibili.com';
let siteKey = '';
let siteType = 0;
let searchable= 0;//searchable=1 启用搜索
const PC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.361";
let cookie = "https://mirror.ghproxy.com/https://raw.githubusercontent.com/HiTang123/xyz/master/cat/main/cookie.txt";
async function request(reqUrl) {
  const res = await req(reqUrl, {
      headers: getMb(),
  });
  return res.content;
}

async function init(cfg) {
  siteKey = cfg.skey;
  siteType = cfg.stype;
  if (cookie.startsWith('http')) cookie = await request(cookie);
  // console.debug('我的哔哩 cookie =====>' + cookie); // js_debug.log
}

async function home(filter) {
  let classes = [

    {
      "type_name": "演唱会",
      "type_id": "演唱会"
    },
    {
      "type_name": "粤语",
      "type_id": "粤语歌曲"
    },
    {
      "type_name": "热榜",
      "type_id": "热门歌曲"
    },
    {
      "type_name": "KTV热门",
      "type_id": "KTV热门歌曲"
    },
	{
      "type_name": "经典老歌",
      "type_id": "经典老歌"
    },
	{
      "type_name": "古风歌曲",
      "type_id": "古风歌曲"
    },
    {
      "type_name": "滚石经典",
      "type_id": "滚石歌曲"
    },    
    {
      "type_name": "闽南语歌曲",
      "type_id": "闽南语歌曲"
    },
    {
      "type_name": "印度歌舞",
      "type_id": "印度歌舞"
    },
    {
      "type_name": "DJ",
      "type_id": "DJ歌曲"
    },
    {
      "type_name": "网红翻唱",
      "type_id": "网红翻唱歌曲"
    },
    {
      "type_name": "韩国女团",
      "type_id": "韩国女团演唱会"
    },
    {
      "type_name": "A阿黛尔",
      "type_id": "阿黛尔演唱会"
    },
    
    {
      "type_name": "Blackpink",
      "type_id": "blackpink演唱会"
    },
    {
      "type_name": "Beyond",
      "type_id": "beyond演唱会"
    },
    {
      "type_name": "B坂井泉水",
      "type_id": "坂井泉水演唱会"
    },
    {
      "type_name": "B宝丽金",
      "type_id": "宝丽金演唱会"
    },
    {
      "type_name": "B布兰妮",
      "type_id": "布兰妮演唱会"
    },
    {
      "type_name": "C陈瑞",
      "type_id": "陈瑞歌曲"
    },
    {
      "type_name": "C崔健",
      "type_id": "崔健演唱会"
    },
    {
      "type_name": "C陈意文",
      "type_id": "陈意文歌曲"
    },
    {
      "type_name": "C蔡依林",
      "type_id": "蔡依林演唱会"
    },
    {
      "type_name": "C草蜢",
      "type_id": "草蜢演唱会"
    },
    {
      "type_name": "Coldplay",
      "type_id": "coldplay演唱会"
    },
    {
      "type_name": "C陈慧娴",
      "type_id": "陈慧娴演唱会"
    },
    {
      "type_name": "C陈百强",
      "type_id": "陈百强演唱会"
    },
    {
      "type_name": "C陈淑桦",
      "type_id": "陈淑桦演唱会"
    },
    
    {
      "type_name": "C陈慧琳",
      "type_id": "陈慧琳演唱会"
    },
    {
      "type_name": "D邓丽君",
      "type_id": "邓丽君演唱会"
    },
    {
      "type_name": "D邓紫棋",
      "type_id": "邓紫棋演唱会"
    },
     {
      "type_name": "D刀郎",
      "type_id": "刀郎演唱会"
    },
    {
      "type_name": "D达明一派",
      "type_id": "刘以达歌曲"
    },
    {
      "type_name": "F费玉清",
      "type_id": "费玉清演唱会"
    },
    {
      "type_name": "F飞图",
      "type_id": "飞图演唱会"
    },
    {
      "type_name": "G谷村新司",
      "type_id": "谷村新司演唱会"
    },
    {
      "type_name": "G郭富城",
      "type_id": "郭富城演唱会"
    },
    {
      "type_name": "G高胜美",
      "type_id": "高胜美演唱会"
    },
    {
      "type_name": "G关淑怡",
      "type_id": "关淑怡演唱会"
    },
    {
      "type_name": "H黄凯芹",
      "type_id": "黄凯芹演唱会"
    },
    {
      "type_name": "J降央卓玛",
      "type_id": "降央卓玛演唱会"
    },
    
    {
      "type_name": "J江慧",
      "type_id": "江慧歌曲"
    },
    {
      "type_name": "J吉永小百合",
      "type_id": "吉永小百合歌曲"
    },
    {
      "type_name": "J金庸",
      "type_id": "金庸影视歌曲"
    },
    {
      "type_name": "K柯以敏",
      "type_id": "柯以敏演唱会"
    },
    {
      "type_name": "K邝美云",
      "type_id": "邝美云歌曲"
    },
    {
      "type_name": "L刘德华",
      "type_id": "刘德华演唱会"
    },
    {
      "type_name": "L李贞贤",
      "type_id": "李贞贤演唱会"
    },
    {
      "type_name": "L李秀英",
      "type_id": "李秀英演唱会"
    },
    {
      "type_name": "L李志",
      "type_id": "李志歌曲"
    },
    {
      "type_name": "Lady Gaga",
      "type_id": "Lady Gaga演唱会"
    },
    {
      "type_name": "L龙飘飘",
      "type_id": "龙飘飘演唱会"
    },
    {
      "type_name": "L罗大佑",
      "type_id": "罗大佑演唱会"
    },
    {
      "type_name": "L林志炫",
      "type_id": "林志炫演唱会"
    },
    {
      "type_name": "L林忆莲",
      "type_id": "林忆莲演唱会"
    },
    {
      "type_name": "L李知恩",
      "type_id": "李知恩演唱会"
    },
    {
      "type_name": "L梁静茹",
      "type_id": "梁静茹演唱会"
    },
    {
      "type_name": "L冷漠",
      "type_id": "冷漠演唱会"
    },
    {
      "type_name": "L李克勤",
      "type_id": "李克勤演唱会"
    },
    {
      "type_name": "L林子祥",
      "type_id": "林子祥演唱会"
    },
    {
      "type_name": "L黎明",
      "type_id": "黎明演唱会"
    },
    {
      "type_name": "L刘若英",
      "type_id": "刘若英演唱会"
    },
    {
      "type_name": "M莫文蔚",
      "type_id": "莫文蔚演唱会"
    },
    {
      "type_name": "M孟庭苇",
      "type_id": "孟庭苇演唱会"
    },
    {
      "type_name": "M麦当娜",
      "type_id": "麦当娜演唱会"
    },

    {
      "type_name": "M迈克杰克逊",
      "type_id": "迈克杰克逊演唱会"
    },
    {
      "type_name": "N雅尼紫禁城",
      "type_id": "雅尼紫禁城演唱会"
    },
    {
      "type_name": "P潘越云",
      "type_id": "潘越云演唱会"
    },
    {
      "type_name": "P潘美辰",
      "type_id": "潘美辰演唱会"
    },
    {
      "type_name": "Q齐秦",
      "type_id": "齐秦演唱会"
    },
    
    {
      "type_name": "R任贤齐",
      "type_id": "任贤齐演唱会"
    },
    {
      "type_name": "S苏慧伦",
      "type_id": "苏慧伦演唱会"
    },
    {
      "type_name": "T童安格",
      "type_id": "童安格演唱会"
    },
    {
      "type_name": "TFBOYS",
      "type_id": "TFBOYS演唱会"
    },
    {
      "type_name": "T太极乐队",
      "type_id": "太极乐队演唱会"
    },
    {
      "type_name": "T唐朝摇滚",
      "type_id": "唐朝摇滚演唱会"
    },
    
    {
      "type_name": "T谭咏麟",
      "type_id": "谭咏麟演唱会"
    },
    
    {
      "type_name": "W王琪",
      "type_id": "王琪歌曲"
    },
     {
      "type_name": "W伍珂玥",
      "type_id": "伍珂玥演唱会"
    },
    {
      "type_name": "W王杰",
      "type_id": "王杰演唱会"
    },
    {
      "type_name": "W伍佰",
      "type_id": "伍佰演唱会"
    },
    {
      "type_name": "W温兆伦",
      "type_id": "温兆伦演唱会"
    },
    {
      "type_name": "W王菲",
      "type_id": "王菲演唱会"
    },
    {
      "type_name": "X徐小凤",
      "type_id": "徐小凤演唱会"
    },
    {
      "type_name": "X席琳迪翁",
      "type_id": "席琳迪翁演唱会"
    },
    {
      "type_name": "X许嵩",
      "type_id": "黄许嵩演唱会"
    },
    {
      "type_name": "X许美静",
      "type_id": "许美静演唱会"
    },
    {
      "type_name": "X许冠杰",
      "type_id": "许冠杰演唱会"
    },
    {
      "type_name": "X小虎队",
      "type_id": "小虎队演唱会"
    },
    {
      "type_name": "X熊天平",
      "type_id": "熊天平演唱会"
    },
    {
      "type_name": "X许巍",
      "type_id": "许巍演唱会"
    },
    {
      "type_name": "Y叶启田",
      "type_id": "叶启田演唱会"
    },
    {
      "type_name": "Y杨钰莹",
      "type_id": "杨钰莹演唱会"
    },
    {
      "type_name": "Y叶玉卿",
      "type_id": "叶玉卿演唱会"
    },
    {
      "type_name": "Y杨千嬅",
      "type_id": "杨千嬅演唱会"
    },
    {
      "type_name": "Y怡正宵",
      "type_id": "怡正宵演唱会"
    },
    {
      "type_name": "Z左麟右李",
      "type_id": "左麟右李演唱会"
    },
    {
      "type_name": "Z张楚",
      "type_id": "张楚演唱会"
    },
    {
      "type_name": "Z张真",
      "type_id": "张真歌曲"
    },
    {
      "type_name": "Z张震岳",
      "type_id": "张震岳演唱会"
    },
    {
      "type_name": "Z赵传",
      "type_id": "赵传演唱会"
    },
    {
      "type_name": "Z周华健",
      "type_id": "周华健演唱会"
    },
    {
      "type_name": "Z周启生",
      "type_id": "周启生演唱会"
    },
    {
      "type_name": "Z张信哲",
      "type_id": "张信哲演唱会"
    },
    {
      "type_name": "Z张也",
      "type_id": "张也歌曲"
    },
    
    {
      "type_name": "Z周慧敏",
      "type_id": "周慧敏演唱会"
    },
   
    {
      "type_name": "Z张碧晨",
      "type_id": "张碧晨演唱会"
    },
    {
      "type_name": "Z中岛美雪",
      "type_id": "中岛美雪演唱会"
    },
    {
      "type_name": "Z张学友",
      "type_id": "张学友演唱会"
    },
    {
      "type_name": "Z张卫健",
      "type_id": "张卫健歌曲"
    },
    {
      "type_name": "Z猪哥亮",
      "type_id": "猪哥亮歌曲"
    },
    {
      "type_name": "Z周杰伦",
      "type_id": "周杰伦演唱会"
    },
    {
      "type_name": "Z周深",
      "type_id": "周深演唱会"
    },
    {
      "type_name": "Z张蔷",
      "type_id": "张蔷演唱会"
    },
    {
      "type_name": "Z张帝",
      "type_id": "张帝演唱会"
    },
    {
      "type_name": "Z张琳",
      "type_id": "张琳，灰太狼"
    },
    {
      "type_name": "Z张国荣",
      "type_id": "张国荣演唱会"
    },
    {
      "type_name": "Z周传雄",
      "type_id": "周传雄演唱会"
    },
    {
      "type_name": "公众号“吾爱有三日月与卿”和“吾爱评测”整理",
      "type_id": "吾爱评测"
    }
];
  let filterObj = {
	  "演唱会": [
 {"key": "order","name": "排序","value": [
{"n": "综合排序","v": "0"},
{"n": "最多点击","v": "click"},
{"n": "最新发布","v": "pubdate"},
{"n": "最多弹幕","v": "dm"},
{"n": "最多收藏","v": "stow"}
]
},
{
        "key": "tid",
        "name": "分类",
        "value": [
{"n":"全部","v":"演唱会4K"},
{"n":"A阿杜","v":"阿杜演唱会4K"},
{"n":"A阿黛尔","v":"阿黛尔演唱会4K"},
{"n":"BBeyond","v":"Beyond演唱会4K"},
{"n":"BBy2","v":"By2演唱会4K"},
{"n":"BBIGBANG","v":"BIGBANG演唱会4K"},
{"n":"B布兰妮","v":"布兰妮演唱会4K"},
{"n":"C程响","v":"程响演唱会4K"},
{"n":"C陈奕迅","v":"陈奕迅演唱会4K"},
{"n":"C蔡依林","v":"蔡依林演唱会4K"},
{"n":"C初音未来","v":"初音未来演唱会4K"},
{"n":"C蔡健雅","v":"蔡健雅演唱会4K"},
{"n":"C陈小春","v":"陈小春演唱会4K"},
{"n":"C草蜢","v":"草蜢演唱会4K"},
{"n":"C陈慧娴","v":"陈慧娴演唱会4K"},
{"n":"C崔健","v":"崔健演唱会4K"},
{"n":"C仓木麻衣","v":"仓木麻衣演唱会4K"},
{"n":"D戴荃","v":"戴荃演唱会4K"},
{"n":"D动力火车","v":"动力火车演唱会4K"},
{"n":"D邓丽君","v":"邓丽君演唱会4K"},
{"n":"D丁当","v":"丁当演唱会4K"},
{"n":"D刀郎","v":"刀郎演唱会4K"},
{"n":"D邓紫棋","v":"邓紫棋演唱会4K"},
{"n":"D戴佩妮","v":"戴佩妮演唱会4K"},
{"n":"D邓丽君","v":"邓丽君演唱会4K"},
{"n":"F飞儿乐队","v":"飞儿乐队演唱会4K"},
{"n":"F费玉清","v":"费玉清演唱会4K"},
{"n":"F费翔","v":"费翔演唱会4K"},
{"n":"F方大同","v":"方大同演唱会4K"},
{"n":"F房东的猫","v":"房东的猫演唱会4K"},
{"n":"F凤飞飞","v":"凤飞飞演唱会4K"},
{"n":"F凤凰传奇","v":"凤凰传奇演唱会4K"},
{"n":"G郭采洁","v":"郭采洁MV4K"},
{"n":"G光良","v":"光良演唱会4K"},
{"n":"G郭静","v":"郭静演唱会4K"},
{"n":"G郭富城","v":"郭富城演唱会4K"},
{"n":"H胡彦斌","v":"胡彦斌演唱会4K"},
{"n":"H胡夏","v":"胡夏演唱会4K"},
{"n":"H韩红","v":"韩红演唱会4K"},
{"n":"H黄品源","v":"黄品源演唱会4K"},
{"n":"H黄小琥","v":"黄小琥演唱会4K"},
{"n":"H花儿乐队","v":"花儿乐队演唱会4K"},
{"n":"H黄家强","v":"黄家强演唱会4K"},
{"n":"H后街男孩","v":"后街男孩演唱会4K"},
{"n":"J经典老歌","v":"经典老歌4K"},
{"n":"J贾斯丁比伯","v":"贾斯丁比伯演唱会4K"},
{"n":"J金池","v":"金池演唱会4K"},
{"n":"J金志文","v":"金志文演唱会4K"},
{"n":"J焦迈奇","v":"焦迈奇演唱会4K"},
{"n":"K筷子兄弟","v":"筷子兄弟演唱会4K"},
{"n":"L李玟","v":"李玟演唱会4K"},
{"n":"L林忆莲","v":"林忆莲演唱会4K"},
{"n":"L李克勤","v":"李克勤演唱会4K"},
{"n":"L刘宪华","v":"刘宪华演唱会4K"},
{"n":"L李圣杰","v":"李圣杰演唱会4K"},
{"n":"L林宥嘉","v":"林宥嘉演唱会4K"},
{"n":"L梁静茹","v":"梁静茹演唱会4K"},
{"n":"L李健","v":"李健演唱会4K"},
{"n":"L林俊杰","v":"林俊杰演唱会4K"},
{"n":"L李玉刚","v":"李玉刚演唱会4K"},
{"n":"L林志炫","v":"林志炫演唱会4K"},
{"n":"L李荣浩","v":"李荣浩演唱会4K"},
{"n":"L李宇春","v":"李宇春演唱会4K"},
{"n":"L洛天依","v":"洛天依演唱会4K"},
{"n":"L林子祥","v":"林子祥演唱会4K"},
{"n":"L李宗盛","v":"李宗盛演唱会4K"},
{"n":"L黎明","v":"黎明演唱会4K"},
{"n":"L刘德华","v":"刘德华演唱会4K"},
{"n":"L罗大佑","v":"罗大佑演唱会4K"},
{"n":"L林肯公园","v":"林肯公园演唱会4K"},
{"n":"LLadyGaga","v":"LadyGaga演唱会4K"},
{"n":"L旅行团乐队","v":"旅行团乐队演唱会4K"},
{"n":"M莫文蔚","v":"莫文蔚演唱会4K"},
{"n":"M毛不易","v":"毛不易演唱会4K"},
{"n":"M梅艳芳","v":"梅艳芳演唱会4K"},
{"n":"M迈克尔杰克逊","v":"迈克尔杰克逊演唱会4K"},
{"n":"N南拳妈妈","v":"南拳妈妈演唱会4K"},
{"n":"P朴树","v":"朴树演唱会4K"},
{"n":"Q齐秦","v":"齐秦演唱会4K"},
{"n":"Q青鸟飞鱼","v":"青鸟飞鱼演唱会4K"},
{"n":"R容祖儿","v":"容祖儿演唱会4K"},
{"n":"R热歌","v":"热歌MV4K"},
{"n":"R任贤齐","v":"任贤齐演唱会4K"},
{"n":"S水木年华","v":"水木年华演唱会4K"},
{"n":"S孙燕姿","v":"孙燕姿演唱会4K"},
{"n":"S苏打绿","v":"苏打绿演唱会4K"},
{"n":"SSHE","v":"SHE演唱会4K"},
{"n":"S孙楠","v":"孙楠演唱会4K"},
{"n":"T陶喆","v":"陶喆演唱会4K"},
{"n":"T谭咏麟","v":"谭咏麟演唱会4K"},
{"n":"T田馥甄","v":"田馥甄演唱会4K"},
{"n":"T谭维维","v":"谭维维演唱会4K"},
{"n":"T逃跑计划","v":"逃跑计划演唱会4K"},
{"n":"T田震","v":"田震演唱会4K"},
{"n":"T谭晶","v":"谭晶演唱会4K"},
{"n":"T屠洪刚","v":"屠洪刚演唱会4K"},
{"n":"T泰勒·斯威夫特","v":"泰勒·斯威夫特演唱会4K"},
{"n":"W王力宏","v":"王力宏演唱会4K"},
{"n":"W王杰","v":"王杰演唱会4K"},
{"n":"W吴克群","v":"吴克群演唱会4K"},
{"n":"W王心凌","v":"王心凌演唱会4K"},
{"n":"W汪峰","v":"汪峰演唱会4K"},
{"n":"W伍佰","v":"伍佰演唱会4K"},
{"n":"W王菲","v":"王菲演唱会4K"},
{"n":"W五月天","v":"五月天演唱会4K"},
{"n":"W汪苏泷","v":"汪苏泷演唱会4K"},
{"n":"X徐佳莹","v":"徐佳莹演唱会4K"},
{"n":"X弦子","v":"弦子演唱会4K"},
{"n":"X萧亚轩","v":"萧亚轩演唱会4K"},
{"n":"X许巍","v":"许巍演唱会4K"},
{"n":"X薛之谦","v":"薛之谦演唱会4K"},
{"n":"X许嵩","v":"许嵩演唱会4K"},
{"n":"X小虎队","v":"小虎队演唱会4K"},
{"n":"X萧敬腾","v":"萧敬腾演唱会4K"},
{"n":"X谢霆锋","v":"谢霆锋演唱会4K"},
{"n":"X徐小凤","v":"徐小凤演唱会4K"},
{"n":"X信乐队","v":"信乐队演唱会4K"},
{"n":"Y夜愿乐队","v":"夜愿乐队演唱会4K"},
{"n":"Y原创音乐","v":"原创音乐演唱会4K"},
{"n":"Y羽泉","v":"羽泉演唱会4K"},
{"n":"Y粤语","v":"粤语MV4K"},
{"n":"Y郁可唯","v":"郁可唯演唱会4K"},
{"n":"Y叶倩文","v":"叶倩文演唱会4K"},
{"n":"Y杨坤","v":"杨坤演唱会4K"},
{"n":"Y庾澄庆","v":"庾澄庆演唱会4K"},
{"n":"Y尤长靖","v":"尤长靖演唱会4K"},
{"n":"Y易烊千玺","v":"易烊千玺演唱会4K"},
{"n":"Y袁娅维","v":"袁娅维演唱会4K"},
{"n":"Y杨丞琳","v":"杨丞琳演唱会4K"},
{"n":"Y杨千嬅","v":"杨千嬅演唱会4K"},
{"n":"Y杨宗纬","v":"杨宗纬演唱会4K"},
{"n":"Z周杰伦","v":"周杰伦演唱会4K"},
{"n":"Z张学友","v":"张学友演唱会4K"},
{"n":"Z张信哲","v":"张信哲演唱会4K"},
{"n":"Z张宇","v":"张宇演唱会4K"},
{"n":"Z周华健","v":"周华健演唱会4K"},
{"n":"Z张韶涵","v":"张韶涵演唱会4K"},
{"n":"Z周深","v":"周深演唱会4K"},
{"n":"Z纵贯线","v":"纵贯线演唱会4K"},
{"n":"Z赵雷","v":"赵雷演唱会4K"},
{"n":"Z周传雄","v":"周传雄演唱会4K"},
{"n":"Z张国荣","v":"张国荣演唱会4K"},
{"n":"Z周慧敏","v":"周慧敏演唱会4K"},
{"n":"Z张惠妹","v":"张惠妹演唱会4K"},
{"n":"Z周笔畅","v":"周笔畅演唱会4K"},
{"n":"Z郑中基","v":"郑中基演唱会4K"},
{"n":"Z张艺兴","v":"张艺兴演唱会4K"},
{"n":"Z张震岳","v":"张震岳演唱会4K"},
{"n":"Z张雨生","v":"张雨生演唱会4K"},
{"n":"Z郑智化","v":"郑智化演唱会4K"},
{"n":"Z卓依婷","v":"卓依婷演唱会4K"},
{"n":"Z中岛美雪","v":"中岛美雪演唱会4K"}
 ]},
{"key": "duration","name": "时长","value": [
{"n": "全部时长","v": "0"},
{"n": "60分钟以上","v": "4"},
{"n": "30~60分钟","v": "3"},
{"n": "10~30分钟","v": "2"},
{"n": "10分钟以下","v": "1"}
]}],

"粤语歌曲": [
      {
        "key": "duration",
        "name": "时长",
        "value": [
          {
            "n": "全部",
            "v": "0"
          },
          {
            "n": "60分钟以上",
            "v": "4"
          },
          {
            "n": "30~60分钟",
            "v": "3"
          },
          {
            "n": "10~30分钟",
            "v": "2"
          },
          {
            "n": "10分钟以下",
            "v": "1"
          }
        ]
      }
    ],
    "热门歌曲": [
      {
        "key": "duration",
        "name": "时长",
        "value": [
          {
            "n": "全部",
            "v": "0"
          },
          {
            "n": "60分钟以上",
            "v": "4"
          },
          {
            "n": "30~60分钟",
            "v": "3"
          },
          {
            "n": "10~30分钟",
            "v": "2"
          },
          {
            "n": "10分钟以下",
            "v": "1"
          }
        ]
      }
    ],
    "KTV热门歌曲": [
      {
        "key": "duration",
        "name": "时长",
        "value": [
          {
            "n": "全部",
            "v": "0"
          },
          {
            "n": "60分钟以上",
            "v": "4"
          },
          {
            "n": "30~60分钟",
            "v": "3"
          },
          {
            "n": "10~30分钟",
            "v": "2"
          },
          {
            "n": "10分钟以下",
            "v": "1"
          }
        ]
      }
    ],
    "滚石歌曲": [
      {
        "key": "duration",
        "name": "时长",
        "value": [
          {
            "n": "全部",
            "v": "0"
          },
          {
            "n": "60分钟以上",
            "v": "4"
          },
          {
            "n": "30~60分钟",
            "v": "3"
          },
          {
            "n": "10~30分钟",
            "v": "2"
          },
          {
            "n": "10分钟以下",
            "v": "1"
          }
        ]
      }
    ],
    "经典老歌": [
      {
        "key": "duration",
        "name": "时长",
        "value": [
          {
            "n": "全部",
            "v": "0"
          },
          {
            "n": "60分钟以上",
            "v": "4"
          },
          {
            "n": "30~60分钟",
            "v": "3"
          },
          {
            "n": "10~30分钟",
            "v": "2"
          },
          {
            "n": "10分钟以下",
            "v": "1"
          }
        ]
      }
    ],
    "古风歌曲": [
      {
        "key": "duration",
        "name": "时长",
        "value": [
          {
            "n": "全部",
            "v": "0"
          },
          {
            "n": "60分钟以上",
            "v": "4"
          },
          {
            "n": "30~60分钟",
            "v": "3"
          },
          {
            "n": "10~30分钟",
            "v": "2"
          },
          {
            "n": "10分钟以下",
            "v": "1"
          }
        ]
      }
    ],
    "闽南语歌曲": [
      {
        "key": "duration",
        "name": "时长",
        "value": [
          {
            "n": "全部",
            "v": "0"
          },
          {
            "n": "60分钟以上",
            "v": "4"
          },
          {
            "n": "30~60分钟",
            "v": "3"
          },
          {
            "n": "10~30分钟",
            "v": "2"
          },
          {
            "n": "10分钟以下",
            "v": "1"
          }
        ]
      }
    ],
    "印度歌舞": [
      {
        "key": "duration",
        "name": "时长",
        "value": [
          {
            "n": "全部",
            "v": "0"
          },
          {
            "n": "60分钟以上",
            "v": "4"
          },
          {
            "n": "30~60分钟",
            "v": "3"
          },
          {
            "n": "10~30分钟",
            "v": "2"
          },
          {
            "n": "10分钟以下",
            "v": "1"
          }
        ]
      }
    ],
    
        "网红翻唱歌曲": [
      {
        "key": "duration",
        "name": "时长",
        "value": [
          {
            "n": "全部",
            "v": "0"
          },
          {
            "n": "60分钟以上",
            "v": "4"
          },
          {
            "n": "30~60分钟",
            "v": "3"
          },
          {
            "n": "10~30分钟",
            "v": "2"
          },
          {
            "n": "10分钟以下",
            "v": "1"
          }
        ]
      }
    ],
    
         "DJ歌曲": [
      {
        "key": "duration",
        "name": "时长",
        "value": [
          {
            "n": "全部",
            "v": "0"
          },
          {
            "n": "60分钟以上",
            "v": "4"
          },
          {
            "n": "30~60分钟",
            "v": "3"
          },
          {
            "n": "10~30分钟",
            "v": "2"
          },
          {
            "n": "10分钟以下",
            "v": "1"
          }
        ]
      }
    ],
    
        "韩国女团演唱会": [
      {
        "key": "duration",
        "name": "时长",
        "value": [
          {
            "n": "全部",
            "v": "0"
          },
          {
            "n": "60分钟以上",
            "v": "4"
          },
          {
            "n": "30~60分钟",
            "v": "3"
          },
          {
            "n": "10~30分钟",
            "v": "2"
          },
          {
            "n": "10分钟以下",
            "v": "1"
          }
        ]
      }
    ]

};
  return JSON.stringify({
      class: classes,
      filters: filterObj,
  });
}

async function homeVod() {
  let html = HOST + '/x/web-interface/search/type?search_type=video&keyword='+homeName;
  let data = JSON.parse(await request(html)).data.result;
  let videos = [];
  data.forEach(function(it) {
      if(it.bvid!==""){       videos.push({
          vod_id: it.aid,
          vod_name: stripHtmlTag(it.title),
          vod_pic: 'http:'+it.pic,
          vod_remarks: turnDHM(it.duration) || ''})};
  });
  return JSON.stringify({
      list: videos,
  });
}

async function category(tid, pg, filter, extend) {
  let html = HOST + '/x/web-interface/search/type?search_type=video&page=' + pg + '&keyword=' + (extend.tid || tid) + '&duration=' + (extend.duration || '') + '&order=' + (extend.order || '');
  let data = JSON.parse(await request(html)).data;
  let videos = [];
  data.result.forEach(function(it) {
      if(it.bvid!==""){       videos.push({
          vod_id: it.aid,
          vod_name: stripHtmlTag(it.title),
          vod_pic: 'https:' + it.pic,
          vod_remarks: turnDHM(it.duration) || ''})};
  });
  return JSON.stringify({
      page: parseInt(data.page),
      pagecount: data.numPages,
      limit: 20,
      total: data.numResults,
      list: videos,
  });
}

async function detail(id) {
  let data = JSON.parse(await request(HOST + '/x/web-interface/view?aid=' + id)).data;
  let vod = {
      vod_id: data.aid,
      vod_name: stripHtmlTag(data.title),
      vod_pic: data.pic,
      type_name: data.tname,
      vod_year: new Date(data.pubdate*1000).getFullYear(),
      vod_remarks: '',
      vod_director: '[a=cr:' + JSON.stringify({'id':data.owner.name + '_clicklink','name':data.owner.name}) + '/]' + data.owner.name + '[/a]',
      vod_content: stripHtmlTag(data.desc),
  };
  let episodes = data.pages;
  let playurls = [];
  episodes.forEach(function(it) {
    let cid = it.cid;
    let part = it.part.replace('#', '﹟').replace('$', '﹩');
    playurls.push(
        part + '$' + data.aid + '_' + cid
    )
  });
  let playUrl = playurls.join('#');
  vod.vod_play_from = 'B站';
  vod.vod_play_url = playUrl;
  return JSON.stringify({
    list: [vod],
  });
}

async function play(flag, id, flags) {
  let ids = id.split('_');
  let html = HOST + '/x/player/playurl?avid=' + ids[0] + '&cid=' + ids[1] + '&qn=116';
  let data = JSON.parse(await request(html)).data.durl;
  let maxSize = -1;
  let position = -1;  const dan = 'https://api.bilibili.com/x/v1/dm/list.so?oid=' + ids[1];
  data.forEach(function(it, i) {
      if (maxSize < Number(it.size)) {
          maxSize = Number(it.size);
          position = i
      }
  });
  let purl = '';
  if (data.length > 0) {
    if (position === -1) {
        position = 0
    }
    purl = data[position].url
  }
  // console.debug('我的哔哩 purl =====>' + purl); // js_debug.log
  return JSON.stringify({
    parse: 0,
    url: purl,    danmaku: dan,    
    header: getMb(),
  });
}

async function search(wd, quick, pg) {
  if(searchable==1){
  if (pg <= 0 || typeof(pg) == 'undefined') pg = 1;
  let html = HOST + '/x/web-interface/search/type?search_type=video&keyword=' + wd + '&page=' + pg;
  let data = JSON.parse(await request(html)).data;
  let videos = [];
  data.result.forEach(function(it) {
    if(it.bvid!==""){       videos.push({
        vod_id: it.aid,
        vod_name: stripHtmlTag(it.title),
        vod_pic: 'https:' + it.pic,
        vod_remarks: turnDHM(it.duration) || '',
    })};
  });
  return JSON.stringify({
      page: parseInt(data.page),
      pagecount: data.numPages,
      limit: 20,
      total: data.numResults,
      list: videos,
  });
  }else{
	  return null;
  }
}

function getHeader(cookie) {
  let header = {};
  header['cookie'] = cookie;
  header['User-Agent'] = PC_UA;
  header['Referer'] = 'https://www.bilibili.com';
  return header;
}

function getMb() {
  return getHeader(cookie);
}

function stripHtmlTag(src) {
  return src
      .replace(/<\/?[^>]+(>|$)/g, '')
      .replace(/&.{1,5};/g, '')
      .replace(/\s{2,}/g, ' ');
}

function turnDHM(duration) {
  let min = duration.split(':')[0];
  let sec = duration.split(':')[1];
  if (min == 0) {
      return sec + '秒';
  } else if (0 < min && min < 60) {
      return min + '分';
  } else if (60 <= min && min < 1440) {
      if (min % 60 == 0) {
          let h = min / 60;
          return h + '小时';
      } else {
          let h = min / 60;
          h = (h + '').split('.')[0];
          let m = min % 60;
          return h + '小时' + m + '分';
      }
  } else if (min >= 1440) {
      let d = min / 60 / 24;
      d = (d + '').split('.')[0];
      let h = min / 60 % 24;
      h = (h + '').split('.')[0];
      let m = min % 60;
      let dhm = '';
      if (d > 0) {
          dhm = d + '天'
      }
      if (h >= 1) {
          dhm = dhm + h + '小时'
      }
      if (m > 0) {
          dhm = dhm + m + '分'
      }
      return dhm;
  }
  return null;
}

export function __jsEvalReturn() {
  return {
      init: init,
      home: home,
      homeVod: homeVod,
      category: category,
      detail: detail,
      play: play,
      search: search,
  };
}
