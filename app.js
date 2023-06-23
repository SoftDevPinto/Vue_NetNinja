const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>' 
    data() {
        return {
            showBooks: true,
            url: 'http://www.thenetninja.co.uk',
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss'},
                { title: 'the way of kings', author: 'brandon sanderson'},
                { title: 'the final empire', author: 'brandon sanderson'},
            ],
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'Words of Radiance'
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks // toggle the value true or false
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }

}) // create a new Vue instance



app.mount('#app') // mount it to the DOM
