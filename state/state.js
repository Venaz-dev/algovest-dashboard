import { proxy } from "valtio";

const state = proxy({ algovestContract: {}, text: "hello" });

export default state;
