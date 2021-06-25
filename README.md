# Vuejs
Basic projects to learn Vue.js

#### const app = Vue.createApp({ data() {}, methods: {} });
	Basic class syntax

#### app.mount('#selectorName')
	to mount a section of HTML with Vue code

#### v-bind
	to map string value in the nested tags like <p><a v-bind:href="stringName">Link</a></p>

#### v-html
	to add html string like <p v-html="htmlStringtoBind"></p>

#### v-on
	v-on:click, v-on:keyup, v-on:mouseenter etc

#### v-on:submit.prevent 
	for forms
	It is equal to the event.preventDefault();
	
#### Event modifiers 
	v-on:keyup.enter, v-on:submit.prevent, v-on:click.right etc
	
#### v-once
	used to store the value as a constant of a variable, used to store the initial value.
