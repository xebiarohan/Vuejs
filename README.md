# Vuejs
Basic projects to learn Vue.js

#### Basic class syntax
```js
const app = Vue.createApp({ components: {}, props: {}, emits: {}, template:``, data() {},computed: {},watch: {}, provide: {}, methods: {}, <Life cycle hooks> });
```
	

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
	
#### Provide-inject

It is used when we want to pass the data to the grand child component, We can use emit as well but we need to do the same work in parent and grand parent component.
So, We can use this approach where we can provide the data in the grand parent component and can inject in the grand child component.

In grand parent component :
```js
	
	provide: {
	    topics: [
		{
		  id: 'basics',
		  title: 'The Basics',
		  description: 'Core Vue basics you have to know',
		  fullText:
		    'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
		}
	      ],
	  }
```

In grand child component
```js
	
	inject: ['topics']
```
	
Inject only works when we provide data in parent or any other ancestor component.

We can define provide in 2 ways 
```js
	provide: {}
	   OR
	provide() { return {}}
```		
		
We can pass methods as well in the provide section, that will get executed in the component where it get injected

In parent:

```js
	provide() {
	    return {
	      selectTopic: this.activateTopic
	    }
	  },
	  methods: {
	    activateTopic(topicId) {
	      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
	    },
	  },
```
	  
In child:
```js
	inject: ['selectTopic'],
```
	
```js	
	<template>
	  <li>
	    <h3>{{ topicName }}</h3>
	    <p>{{ description }}</p>
	    <button @click="selectTopic(id)">Learn More</button>
	  </li>
	</template>
```
		
#### Global - local component registration
Global component registration happens in main.js, the registered components are available in the whole application
```js
	
		const app = createApp(App);
		app.component('base-badge', BaseBadge);
		app.mount('#app');	
```
		
Local component registration happens in the script tag of a component, registered component is available only in that component
```js
	<script>
		import TheHeader from "./components/TheHeader.vue";
		import BadgeList from "./components/BadgeList.vue";
		import UserInfo from "./components/UserInfo.vue";

		export default {
		  components: {
		    TheHeader,
		    BadgeList,
		    UserInfo
		  },
		  data() {}
		}
	</script>
```
		
#### Scoping styles
	Style defined in <sytle></style> in any component by default is global. So limit their scope to the same component,
	we need to add scoped on the tag like:
```js	
		<style scoped> </style>	
```	
	
	
#### Slots
Slots allow us to receive the HTML content from outside of the component. It is like props just the props are meant for 
the data where as slots are meant for the HTML data.	

Sending HTML code from any component to BaseCard component:
```js	
	<template>
	  <section>
	    <base-card>
	      <h3>{{ fullName }}</h3>
	      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
	      <p>{{ infoText }}</p>
	    </base-card>
	  </section>
	</template>
```	
	
In BaseCard Component

```js
	<template>
	  <div>
	      <slot></slot>
	  </div>
	</template>
```	
		
#### Multiple slots

We can have more than 1 slots in an component, in that case we can use Named slots where we add a name attribute to all the slots and
can leave one as the default slot.

```js
	<template>
	  <section>
	    <base-card>
	      <template v-slot:header>
		<h2>Available Badges</h2>
	      </template>
	      <template v-slot:default> 
		<ul>
		  <li>
		    <base-badge type="admin" caption="ADMIN"></base-badge>
		  </li>
		  <li>
		    <base-badge type="author" caption="AUTHOR"></base-badge>
		  </li>
		</ul>
	      </template>
	    </base-card>
	  </section>
	</template>
```
	
	
	
In BaseCard Component
```js
	<template>
	  <div>
	      <header>
		  <slot name="header"></slot>
	      </header>
	      <slot></slot>
	  </div>
	</template>
```	
	
We can use # in place of v-slot:
```js
	<template #header>
		<h2>Available Badges</h2>
	</template>
```	
	
#### Default value for slots

We can set the default value of slots by adding the value between the slots tags
```js	
	<slot>
		<h2>Default value</h2>
	</slot>
```	
	
#### Accessing Slot values
We can access the slots data using $slots
```js
	this.$slots.<name of slot>	
```	
	
#### Scoped slots
It is used to pass the data from the component where you define the slot to the component where you pass the markup data to the slot component.	

From Slot component (CourseGoals component)
```js
	<template>
	    <ul>
		<li v-for="goal in goals" :key="goal">
		    <slot :item="goal"></slot>
		</li>
	    </ul>
	</template>
```	
	
From calling component (App component)
```js

	<template>
	  <div>
	    <course-goals>
	      <template #default="slotProps">
		<h2>{{slotProps.item}}</h2>
	      </template>
	    </course-goals>
	  </div>
	</template>	
```
	
#### Dynamic component
Adding a component in template based on a condition. We can assign the component tag to a variable (on a condition) and can use that 
variable to add it in template
```js
	<template>
	  <div>
	    <the-header></the-header>
	    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
	    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
	    <component :is="selectedComponent"></component>
	  </div>
	</template>
```
	
Here selectedComponent contains one of 2 values : 'active-goals' or 'manage-goals'

We can use it with <keep-alive> tag to keep the state of the component alive on changing the component

```js
	<keep-alive>
		<component :is="selectedComponent"></component>
	</keep-alive>		
```
	
	
#### Sending HTTP request	

we can send data using the browser method fetch() or using the external dependency like axios.

Example of fetch()

```js
      fetch(
        'https://vue-http-demo-3ece0-default-rtdb.firebaseio.com/survey.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: this.enteredName, rating: this.chosenRating })
        }
      );
```

Axios

```js
import axios from 'axios'; // at the start of your <script> tag, before you "export default ..."


axios.post('https://vue-http-demo-85e9e.firebaseio.com/surveys.json', {
  name: this.enteredName,
  rating: this.chosenRating,
});

```

#### Routing in Vue-js
To install routing in Vuejs

```js
npm install --save vue-router@next
```

Setting up routing in main.js

```js
import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/teams', component: TeamsList},
        {path: '/users', component: UsersList}
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app');

```

history is used for back button functionality.

Router-view is used to mark the area for rendering the different links

```js
<router-view></router-view>
```

Router-link is used to set a link in HTML

```js
<ul>
 <li>
   <router-link to="/teams">Teams</router-link>
 </li>
 <li>
   <router-link to="/users">Users</router-link>
 </li>
</ul>
```

Navigation from program

```js
    confirmInput() {
      this.$router.push('/teams');
    }
```

$router contains many  methods like back(), forward() etc.


Getting the query param

```js
{path: '/teams/:teamId', component: TeamMembers}


In Team members component

created() {
const teamId = this.$route.params.teamId;
}

```


		
	
	
	
	
	
	
