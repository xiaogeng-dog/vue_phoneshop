const getters = {
	cartLength (state) {
		return state.cartList.length
	},
	cartList (state) {
		return state.cartList
	},
	checkCartLength (state) {
		return state.cartList.filter(res => {
			return res.checked
		}).reduce((prev, cur) => {
			return prev + cur.count
		}, 0)
	}
}

export default getters
