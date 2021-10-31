import App from './App.svelte';

import 'material-icons/iconfont/material-icons.css';

const app = new App({
	target: document.body,
	props: {
		name: 'sveltyu'
	}
});

export default app;