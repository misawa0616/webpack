import '../css/sub.css';
var vm = new Vue({ // eslint-disable-line
    delimiters: ['[[', ']]'],
    el: '#app',
    data: {
        email: '',
        after_change_email: '',
        confirm_after_change_email: '',
        password: '',
        todos: []
        },
    methods: {
        updateDB: function(e) {
            e.preventDefault();
        },
    }
})