# Vuejs
Basic projects to learn Vue.js

#### const app = Vue.createApp({ data() {},computed: {},watch: {} methods: {} });
	Basic class syntax

#### app.mount('#selectorName')
	to mount a section of HTML with Vue code

#### v-bind
	can use short form (:)
	to map string value in the nested tags like <p><a v-bind:href="stringName">Link</a></p>
	using short form <p><a :href="stringName">Link</a></p>

#### v-html
	to add html string like <p v-html="htmlStringtoBind"></p>

#### v-on
	You can replace v-on with @
	v-on:click, v-on:keyup, v-on:mouseenter etc
	@click, @keyup, @mouseenter etc

#### v-on:submit.prevent 
	for forms
	It is equal to the event.preventDefault();
	
#### Event modifiers 
	v-on:keyup.enter, v-on:submit.prevent, v-on:click.right etc
	
#### v-once
	used to store the value as a constant of a variable, used to store the initial value.
	
#### v-model
	It is equal to the v-bind:value and v-on:input, It is used for 2 way binding
	
#### Method usage in {{ xyz()}} 		
	We should not call methods (defined in methods section) in String interpolation, as it will get called on any change in the DOM. Even if it is not related to the 
	method. We can use methods defined in computed section as it checks the dependencies or properties used in it and reloads only when one of the properties 
	changes.
	
#### computed methods
	We cannot call the methods defined in the computed object in component. They are like properties so need to just pass their name in HTML
	
#### Watchers
	It is similar to the computed methods, It contains the methods with same name as the properties it depends like if we need to execute a method on change of a 
	property name "fullName" defined in data section then we will create a method name "fullName()" in watch. It will get executed when ever fullName property gets
	updated.
	The problem with watcher is that it covers the dependency of only 1 property like just firstName, for lastName we have to write another watcher.
	
#### Using bind with style 
	We can style HTML elements dynamically using inline style like :style="{borderColor: <condition> ? 'red': '#ccc'}"
	
#### Dynamic CSS classes
	Inline sytle overrides everything that is not a good practice, so alternative is dynamic CSS classes
	Example of dynamic CSS class property :class="<condition> ? 'demo active': 'demo'"	
	Other syntax    :class="{demo: true, active: <condition>}"	
	Other syntax    class="demo" :class="{active: boxASelected}"
	Other syntax    :class="['demo',{active: boxASelected}]"
	Here demo and active are css properties
	
#### v-if, v-else-if and v-else
	condition operator
	
#### v-show
	It is an alternative of v-if, it is standalone, no else condition present.	
	v-if really removes and adds elements to the DOM where as v-show hides and shows the elements.
	
#### v-for
	loop
	syntax  -   	v-for="value in values"	
	To get index	v-for="(value,index) in values"
	Looping object  v-for="(value, key, index) in {name: 'Rohan', age: 27}"
	Looping numbers v-for="value in 10"
	
#### key
	is used with v-for for stopping unwanted behaviour
	syntax  :key="<unique-key"
		
	
	
	
	
	
	
