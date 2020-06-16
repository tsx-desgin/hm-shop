<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {font-family: "iconfont";
	  src: url('~@/static/font/iconfont.eot?t=1592283576757'); /* IE9 */
	  src: url('~@/static/font/iconfont.eot?t=1592283576757#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAXoAAsAAAAACwQAAAWaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqJGIcoATYCJAMUCwwABCAFhG0HURs9CVGULk6b7IckCeKtnhEIYAaAMXVCoIAEHFAABwjEw9e0vb+7ybWOA1WqxHfNoBASVZpmPAopMZ7xOYoRuXf6O8ZKYQtzz/8tv2JvNZP20qYreen1D8twGmVAoUE4hvDSy5ul8Cg5Mx35rJx2AoIJuDo0ThsPWN10i0srl1qKBTAU4IC28r3SizWgZ36kX8SzzS5UmPLx9MUE+rY0TFztn97CvIIpg1bcm1jCfMaoVBBDV1Mje8sUWmNGN32kLwA+7c/HP+gFg6TK2KVu7vYi2Gzm1sIMt7CH/OZ1e3aMDpFxDBTiFXXem/KKY4v62O9NOwP6upLU0BtJY70Wti1RdkbqPke2gdJ2/3g1hoaUcJYqNHTJJdNIuASNNZfEWih5YlAFi/vYAvEIEN9j9dJ+Zqwvy5M8pbCP6vUHwzmTOZUKqWT1dG2p+vnLZDoZWT8grdTCkgpNMUldL9BowCyslQr1eojepJvGgtiQrC9gA1HOp/AmAhmC2OBWUYwpBGkFZaIQFk+WaSRAu1wO6RS6XqlSq5XrZeplZIYC7pOrm3QKDSBPhlQ6XTGKKtCbyr2YZQcRTtxW4XhD/1DT8HIEHqx0ty1WaAZZnGX9MlXzsHP1AKJWKTSafp1crdf3aSWS7ZQaNCyFTgO2XT9TuBwxJe3Dk/q9/SlcsQONoLYMFy47d2hb0/bD59nLz7oiW+EtLoNnJgp2XDm7NVcDhbuvW9Pbr80kMCUmbr3zqCUwbHBA0Yw9aIJh0KF336aOzbsd+0wJIp5Q97uVvs5xNYGrWtGQE2jCjiOWXVjkLrdDuN9gQP8hM6hlszNBqAv05vqlCCwXU5rjuApFaweGnVuPBOzAvfocT86dS4vD+Rf4B/f4P9OZ6dRBhWBb3bttJcYLnW/ZIHjbaWsCx1+or6v3r2f6Oj/IN/rVXagzGPJYo/I8FW2U11F1na0De9lrWFdZUvlSe4JCE8ycOiiTYtYzn72n1lJkz9mxpvIXVNUxzy6WZB9lckwXW7LXnKR9GUL69GM6IEK2snu8l4dnvX9P5cs9P6MTIQgfzZ3x1AdxQZw5y5AZ8DG68P3N41fa/7ZAnoplFlpwMMcSuhYJGvokaSzxOpNXfhuZlpfNyWw3Ma1SWWs32b1ivuDHTKY6/Bdxpuq1AzDnH9UgWUqqCR8VbpvIXXokk7u3M72UMqK42NuTvORpg1VAYmJQYlKAlZlDlT3813ZVDuuHmmPinYIdE2JaYgIowVR/IHlckue0lZrlke3duF5cKN4CtTKXlnDSc+a8ulfvUFOxWxLnGycfX+r/5k8CbXrYh7AtkbKjWpxUOObjD/m+sMrjcER2o13GuLIx4tEcE7/WwNErxH1X44scl/oeU0bsTvkyTVQ3rbvEGynZPN4qeVxtqjxf1u30Kz7eoRCIZm/tnkNfQNm9ccY76i76hEeuhhRHun76TOACAADgP5zPk2GbnpMPk+d/xefBQzXyspwf8ZURvLYTt3kT9oD//xyl5aIZgu+pSmPxF7qrnAO0bbkYS5mpKnOxVF1bUQNq5d2yO/Hd7fkae+f+tqNeNRb/X9SrCEnHJmRd25hCOIbKwAnUuk6h78jB4YEFb0qUHg59EAhTn5CMfUE29Y0phF+obPiH2jTI0HcbGycc2I1GseNJMkWoxmhCW2phYeEqrymuc+nTUku6J1+ZCHZbnXzmgEry29hQDeIes0btbYH75HKU5xadtymF3EqYXb/d1tg7tUJbgHDJIxIjEaSMISNklbQez0Th+6+RWC0n+YqBC957xKuY6VFXS6cB5gCVjQYeS31lINbDENeQHpVbBbQPdpLzpIUcPitFQqwl6RB3+towSjdFrf2ri8dY/HMayk5dRYocJaqo1W+JcaacCxNpQ/0s187IMshV48gMbUElAAAA') format('woff2'),
	  url('~@/static/font/iconfont.woff?t=1592283576757') format('woff'),
	  url('~@/static/font/iconfont.ttf?t=1592283576757') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('~@/static/font/iconfont.svg?t=1592283576757#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.icon {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.iconshipin:before {
	  content: "\e614";
	}
	
	.iconchaoshi:before {
	  content: "\e61f";
	}
	
	.icontupian:before {
	  content: "\e607";
	}
	
	.iconlianxiwomen:before {
	  content: "\e711";
	}
	
	
</style>
