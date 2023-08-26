import hospitals from "../../apis/hospital";

// initial state
// shape: [{ id, quantity }]
const state = () => ({
	hospitals: [],
	registerStatus: null,
	updateStatus: null,
	deleteStatus: null,
	loading: false,
});

// getters
const getters = {
	hospitals: (state, getters) => {
		return state.hospitals;
	},
	activeHospitals: (state, getters) => {
		return getters.hospital.filter((hospital) => hospital.state === "1");
	},
};

// actions
const actions = {
	async register({ state, commit }, hospital) {
		commit("setLoading", true);
		commit("setRegisterStatus", null);
		try {
			await hospitals.register(hospital);
			commit("setRegisterStatus", "successful");
			commit("setLoading", false);
		} catch (e) {
			console.error(e);
			commit("setRegisterStatus", "failed");
			// rollback to the cart saved before sending the request
			commit("setCartItems", { items: savedCartItems });
		}
	},

	addProductToCart({ state, commit }, product) {
		commit("setCheckoutStatus", null);
		if (product.inventory > 0) {
			const cartItem = state.items.find((item) => item.id === product.id);
			if (!cartItem) {
				commit("pushProductToCart", { id: product.id });
			} else {
				commit("incrementItemQuantity", cartItem);
			}
			// remove 1 item from stock
			commit("products/decrementProductInventory", { id: product.id }, { root: true });
		}
	},
};

// mutations
const mutations = {
	pushProductToCart(state, { id }) {
		state.items.push({
			id,
			quantity: 1,
		});
	},

	incrementItemQuantity(state, { id }) {
		const cartItem = state.items.find((item) => item.id === id);
		cartItem.quantity++;
	},

	setCartItems(state, { items }) {
		state.items = items;
	},

	setCheckoutStatus(state, status) {
		state.checkoutStatus = status;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
