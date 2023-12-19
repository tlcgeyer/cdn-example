const {createApp} = Vue 
createApp ({   //create a main component
    data() {         //specifying the variable we want to display in our property
        return {
            firstName: 'Tamlin',
             //Helo --should be displayed like that
        }
    }
}).mount('#app') //allows the variables to be displayed
let greeting = text.slice(0,2)