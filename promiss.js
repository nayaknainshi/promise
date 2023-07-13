const posts={
    {title: 'Post One', body: 'this is post one'}
    {title: 'Post Two', body: 'this is post two'}
};

function getPosts(){
    setTimeout(()=> {
        let output = '';
        posts.forEach((post, index) =>{
            output +='<li>${post.title}</li>';
        });
        document.body,innerHTML = output;
    }, 1000);
}
function createPost(post) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push(post);

            const error = true;
            if (!error) {
                resolve();
            } else{
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

//createPost({title: 'Post three', body: 'This is post three'})
//    .then(getPosts)
//    .catch(err => console.log(err));
// Promise.all
const promise1 = Promise.resolve('Hello World');
const Promise2 = 10;
const promise3 = new Promise((resolve, reject)=>
    setTimeout(resolve, 2000, 'Goodbye')
);
const Promise4 = fetch
("https://jsonplaceholder.typicode.com/users")

Promise.all([promise1, Promise2, promise3]).then(values 
=> console.log(values));
