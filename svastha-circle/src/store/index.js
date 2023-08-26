import { createStore, createLogger } from "vuex";
import hospitals from "./modules/hospitals";
// import products from "./modules/products";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
	modules: {
		hospitals,
		// doctors,
	},
	strict: debug,
	plugins: debug ? [createLogger()] : [],
});
