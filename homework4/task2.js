'use strict'
//es5

function Post (author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text){
    this.text = text;
}

const post1 = new Post('Ira', 'have a nice day', new Date());
console.log(post1);
post1.edit('lorem ipsum');
console.log(post1);

function AttachedPost (author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

const attachedpost1 = new AttachedPost('Lera', 'see you', new Date());
console.log(attachedpost1);
attachedpost1.makeTextHighlighted();
attachedpost1.edit('lorem1 ipsum1');
console.log(attachedpost1);


//es6

class Post {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text){
        this.text = text;
    }
}
const post1 = new Post('Ira', 'have a nice day', new Date());
console.log(post1);
post1.edit('lorem ipsum');
console.log(post1);

class AttachedPost {
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted(){
        this.highlighted = true;
    }
}

const attachedpost1 = new AttachedPost('Lera', 'see you', new Date());
console.log(attachedpost1);
attachedpost1.makeTextHighlighted();
attachedpost1.edit('lorem1 ipsum1');
console.log(attachedpost1);