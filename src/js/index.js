import store from "../js/store/index";
import { addArticle } from "../js/actions/index";

store.subscribe(() => console.log('Look ma, Redux!!'))

store.dispatch( addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }) );

window.store = store;
window.addArticle = addArticle;