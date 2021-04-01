Vue.component('my-menu', {
    props: ['menu'],
    template: '<li>{{ menu.name }}</li>'
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var objFreeze = {
    name : 'Ice'
};

Object.freeze(objFreeze);

var rawHtml = '<span color:"red">Red alert!</span>';

var app = new Vue({
    el: '#app',
    data: {
        message: "1234",
        menuList: [{id : 1, name : 'Menu1'}, {id :2 , name: 'Menu2'}],
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ],
        objFreeze: objFreeze,
        rawHtml: rawHtml
    }
});
