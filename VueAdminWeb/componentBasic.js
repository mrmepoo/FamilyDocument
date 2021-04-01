Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{count}} times</button>'
});


Vue.component('blog-spot', {
    props: ['post'],
    template: '<div class="blog-post">' +
        '<h3>{{post.name}}</h3>' +
        '<button v-on:click="$emit(\'enlarge-text\')">Enlarge text</button>' +
        '</div>'
});

new Vue({
    el: '#app',
    data: {
        posts: [
            {
                id: 1,
                name: 'Post 1',
                content: '<b>1</b>'
            }, {
                id: 2,
                name: 'Post 2',
                content: '<b>2</b>'
            }, {
                id: 3,
                name: 'Post 3',
                content: '<b>3</b>'
            }
        ],
        postFontSize: 1
    }
});