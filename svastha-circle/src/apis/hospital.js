const HOSPITAL = "http://localhost:3002/HOSPITAL";

export default {
	async register(data) {
		await axios.post(HOSPITAL + "/register", data);
	},
};
