# Vuejs
Basic projects to learn Vue.js

#### const app = Vue.createApp({ props: {}, emits: {}, template:``, data() {},computed: {},watch: {} methods: {}, <Life cycle hooks> });
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
	syntax  :key="<unique-key>"
	
#### Concept of proxy
	Vue uses concept of proxy to bind the data properties present in data() {}. It makes the properties reactive.
	
#### Multiple Vue app in the same class
	We can map multiple Vue app to the same HTML, we can create multiple Vue apps in the same class using Vue.createApp({})	and can bind to different HTML section.
	
#### Working with Refs
	Used to get access to any HTML element like input, paragraph, h2 etc
	<input type="text" ref="<anyName>">
	<input type="text" ref="userText">	
	we can then use these value in js or ts class using this.$refs.<anyName> 
	example: this.$refs.userText.value;
	
#### Vue uses the concept of Virtual DOM
	used to render the part of the DOMs individually, It has a vitual copy of the real DOM in the memory and when the data changes, it creates the
	new virtual DOM then it compares it with the old virtual DOM and only applies then different of 2 virtual DOMs to the real virtual DOMs.
	
#### Vue instance Lifecycle 	
	beforeCreate()          	Before creating the application
	created()			After creating the application but nothing is visible on UI but has access to data properties
		compile template
	beforeMount() 			Before showing something on UI, starting processing the UI
	mounted()			When UI is displayed
		data changes
	beforeUpdate()			Before updating any property value
	updated()			After updation
	
	beforeUnmount()			Before unmounting the app
	unmounted()			After unmounting (for clean up code)
	
#### Components
	Used to add the reuseability in a Vue application.Vue component is just an another Vue app that is connected to main App.
	syntax
		app.component('<custom-tags>',{data(): {}, methods: {} .... })
	custom tags like friend-contant
	
#### Vue CLI
	Allow us to create and manage bigger Vue applications	
	Installation : 	npm install -g @vue/cli
	creating new project : vue create <project-name>
	running project:  cd <project-name>  then,    npm run serve
	
#### Main.js
	Vue application starts from main.js and it loads a section (#app) present in index.html
	
#### Running .vue class
	Vue application builds the code present in .vue (Single file components)  files to run it on the browsers.
	
#### Parent child component communication (props)
	Props are used to create a communication between parent component and child component.
	
	In parent component props are passed like:
		 <friend-contact name="Manuel Lorenz" phone-number="0123 45678 90" email-address="manuel@localhost.com"></friend-contact>
		 
	In child component props are defined in script like
	
		export default {
			  props: [
			    'name',
			    'phoneNumber',
			    'emailAddress'
			  ],
			  .......
		
		}	
		
	These props can be used in the template directly and in methods using 'this' keyword.

	Props value cannot pe directly changed in the child component (immutable values) but we can assign the prop values to local variable and can change that.

#### Validating props
	Changing prop as an array to an object and then defining all the validations for each prop value.
	  props: {
	    name: {
	      type: String,
	      required: true
	    },
	    phoneNumber: String,
	    emailAddress: String,
	    isFavorite: {
	      type: String,
	      required: false,
	      default: '0',
	      validator: function(value) {
		return value === '1' || value === '0';
	      }
	    }
	  }
	  
#### Passing dara from Child component to Parent component using emit

	We can create a custom event on some action using
		this.$emit('toggle-favorite', this.id);
		
	then in the parent component we can consume this event on the child element
	
	<friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
      ></friend-contact>
      
      Here toggleFavoriteStatus is the method that will get executed when an event is emitted from child component. It takes a
      parameter as emitted by the child component.
      
#### Validating emits of a component     
	Just like props we can define the emits validation
		  emits: {
		    'toggle-favorite' : function(id) {
		      if(id) {
			return true;
		      } else {
			console.warn('Id is missing');
			return false;
		      }
		    }
		  }
	
	If we dont want to add any validation then we can use an array (recommended)
		emits: ['toggle-favorite']
	
	
	
		
		
	
	
	
	
	
	
	
		
	
	
	
	
	
	
