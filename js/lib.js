//工具类函数
var util = {
	   ajax:function(url,type,data,callback){ // 请求数据
		   	mui.ajax(url,{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:type,//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；	              
			success:function(res){
				typeof callback == 'function' && callback(res);
			}
		});
	   },
	   formatDate:function(date, fmt){ // 时间格式化
		   	if (/(y+)/.test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
			}
			var o = {
				'M+': date.getMonth() + 1,
				'd+': date.getDate(),
				'h+': date.getHours(),
				'm+': date.getMinutes(),
				's+': date.getSeconds()
			};
			for (var k in o) {
				if (new RegExp(`(${k})`).test(fmt)) {
					let str = o[k] + '';
					fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
				}
			}
			return fmt;
	   },
	   padLeftZero:function (str) {
		  return ('00' + str).substr(str.length);
	  }  
}