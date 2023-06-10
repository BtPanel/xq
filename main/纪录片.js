var rule = {
    title:'纪录片',
    host:'https://api.bilibili.com',
    homeUrl:'/x/web-interface/search/type?search_type=video&keyword=4K纪录片&page=1',
    url:'/x/web-interface/search/type?search_type=videofyfilter',
    class_name:'动物&历史&时事&政论&生活&纪录片&人文地理&舞台&专题&传记',
    class_url:'动物&历史&时事&政论&生活&纪录片&人文地理&舞台&专题&传记',
    filterable: 1,
    filter_url: '&keyword={{fl.tid}}&page=fypage&duration={{fl.duration}}&order={{fl.order}}',
    filter_def:{
		动物:{tid:'动物世界'},
		历史:{tid:'历史纪录片'},
		时事:{tid:'时事报道1纪录片'},
		政论:{tid:'政论纪录片'},
		生活:{tid:'生活纪录片'},
		纪录片:{tid:'纪录片超清'},
		人文地理:{tid:'人文地理纪录片'},
		舞台:{tid:'舞台纪录片'},
		专题:{tid:'专题纪录片'},
		传记:{tid:'传记纪录片'}
    },
    filter: {
        "动物世界": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"经典无损音乐合集"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
		"历史纪录片": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"经典无损音乐合集"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
		"时事报道1纪录片": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"经典无损音乐合集"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
		"政论纪录片": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"经典无损音乐合集"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
		"生活纪录片": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"经典无损音乐合集"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
		"纪录片超清": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"经典无损音乐合集"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
		"人文地理纪录片": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"经典无损音乐合集"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
		"舞台纪录片": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"经典无损音乐合集"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
		"专题纪录片": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"经典无损音乐合集"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
		"传记纪录片": [{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"经典无损音乐合集"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}]
	},
    detailUrl:'/x/web-interface/view?aid=fyid',//二级详情拼接链接(json格式用)
    searchUrl:'/x/web-interface/search/type?search_type=video&keyword=**&page=1',
    searchable:2,
    quickSearch:0,
    headers:{
        "User-Agent":"PC_UA",
        "Referer": "https://www.bilibili.com",
        // "Cookie":"$bili_cookie"
        "Cookie":"https://agit.ai/cacifer/xyz/raw/branch/master/main/cookie.txt"
    },
    timeout:5000,
    limit:8,
    play_parse:true,
    lazy:"js:let ids=input.split('_');let result={};let iurl='https://api.bilibili.com:443/x/player/playurl?avid='+ids[0]+'&cid='+ids[1]+'&qn=116';let html=request(iurl);let jRoot=JSON.parse(html);let jo=jRoot['data'];let ja=jo['durl'];let maxSize=-1;let position=-1;ja.forEach(function(tmpJo,i){if(maxSize<Number(tmpJo['size'])){maxSize=Number(tmpJo['size']);position=i}});let purl='';if(ja.length>0){if(position===-1){position=0}purl=ja[position]['url']}result['parse']=0;result['playUrl']='';result['url']=unescape(purl);result['header']={Referer:'https://live.bilibili.com','User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'};result['contentType']='video/x-flv';input=result",
    double:false,
    推荐:'*',
    // 一级:'js:let html=request(input);let msg=JSON.parse(html).message;function title_rep(title){if(/keyword/.test(title)){title=title.replace(\'<em class="keyword">\',"").replace("</em>","").replace("&quot;","\'");log("名称替换👉"+title)};return title}if(msg!=="0"){VODS=[{vod_name:KEY+"➢"+msg,vod_id:"no_data",vod_remarks:"别点,缺少bili_cookie",vod_pic:"https://ghproxy.com/https://raw.githubusercontent.com/hjdhnx/dr_py/main/404.jpg"}]}else{let videos=[];let vodList=JSON.parse(html).data.result;vodList.forEach(function(vod){let aid=vod["aid"];let title=vod["title"].trim();title=title_rep(title);title=title_rep(title);title=title_rep(title);title=title_rep(title);let img="https:"+vod["pic"];let remark=vod["duration"];videos.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})});VODS=videos}',
    一级:'js:let html=request(input);function title_rep(title){if(/keyword/.test(title)){title=title.replace(\'<em class="keyword">\',"").replace("</em>","");log("名称替换👉"+title)};return title}function turnDHM(duration){let min=duration.split(":")[0];let sec=duration.split(":")[1];if(min==0){return sec+"秒"}else if(0<min&&min<60){return min+"分"}else if(60<=min&&min<1440){if(min%60==0){let h=min/60;return h+"小时"}else{let h=min/60;h=(h+"").split(".")[0];let m=min%60;return h+"小时"+m+"分"}}else if(min>=1440){let d=min/60/24;d=(d+"").split(".")[0];let h=min/60%24;h=(h+"").split(".")[0];let m=min%60;let dhm="";if(d>0){dhm=d+"天"}if(h>=1){dhm=dhm+h+"小时"}if(m>0){dhm=dhm+m+"分"}return dhm}return null}let videos=[];let vodList=JSON.parse(html).data.result;vodList.forEach(function(vod){let aid=vod["aid"];let title=vod["title"].trim().replace("&quot;","\'");title=title_rep(title);title=title_rep(title);title=title_rep(title);let img="https:"+vod["pic"];let remark=turnDHM(vod["duration"]);videos.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})});VODS=videos',
    二级:'js:let html=request(input);let jo=JSON.parse(html).data;let aid=jo["aid"];let title=jo["title"].replace(\'<em class="keyword">\',"").replace("</em>","");let pic=jo["pic"];let desc=jo["desc"];let year=jo["pubdate"];let dire=jo["owner"]["name"];let typeName=jo["tname"];let remark=jo["duration"];let vod={vod_id:aid,vod_name:title,vod_pic:pic,type_name:typeName,vod_year:year,vod_area:"bilidanmu",vod_remarks:remark,vod_tags:"mv",vod_director:dire,vod_content:desc};let ja=jo["pages"];let playurls=[];ja.forEach(function(tmpJo){let cid=tmpJo["cid"];let part=tmpJo["part"].replace("#","﹟").replace("$","﹩");playurls.push(part+"$"+aid+"_"+cid)});let playUrl=playurls.join("#");vod["vod_play_from"]="B站";vod["vod_play_url"]=playUrl;VOD=vod;',
    搜索:'*',
    预处理:'if(rule_fetch_params.headers.Cookie.startsWith("http")){rule_fetch_params.headers.Cookie=fetch(rule_fetch_params.headers.Cookie);setItem(RULE_CK,cookie)};log(rule_fetch_params.headers.Cookie)',
}