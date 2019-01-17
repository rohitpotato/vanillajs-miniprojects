const easy = new easyHttp;

//GET RESOURCE

/*
easy.get('http://api.icndb.com/jokes/random/3').
    then((res) => {
        console.log(res);
    }).catch((e) => {
        console.log(e);
    });
*/

//POST RESOURCE

/*var jsob = {
    title: 'Some',
    body: "Also"
}

jsob = JSON.stringify(jsob);

easy.post('http://jsonplaceholder.typicode.com/posts', jsob).then((res) => {
    console.log(res);
}).catch((e) => {
   console.log(e); 
});*/

//PUT RESOURCE

/*

var putData = {
    title: 'Some',
    body: "Also"
}

putData = JSON.stringify(putData);

easy.put('http://jsonplaceholder.typicode.com/posts', putData).then((res) => {
    console.log(res);
}).catch((e) => {
   console.log(e); 
});
*/


//DELETE RESOURCE

/*
easy.delete('http://jsonplaceholder.typicode.com/posts/1').then((res) => {
    console.log(res);
}).catch((e) => {
   console.log(e); 
});
*/




