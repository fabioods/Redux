import { createStore } from "redux";

import rootReduces from "./reduces";

const store = createStore(rootReduces);

export default store;
