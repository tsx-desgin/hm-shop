const BASE_URL = 'http://api.4yue.top/index.php/'
export const myRequest = (options)=>{
	if(Reflect.has(options,'header')&&!Reflect.has('options.header','appkey')){
		options.header.appkey = 'f68bSYqte0m6EibwhARrzTcYDPoV0FobCi06uDfM3eF4QGQQKSywmd71ytM'
	}
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.method||'get',
			data:options.data||{},
			header:options.header||{appkey:'f68bSYqte0m6EibwhARrzTcYDPoV0FobCi06uDfM3eF4QGQQKSywmd71ytM'},
			success: (res) => {
				if(res.data.error_code !==0){
					uni.showToast({
						title:'获取数据失败',
						icon:none,
					})
					return
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:'请求接口失败',
					icon:none,
				})
				reject(err)
			}
		})
	})
}


