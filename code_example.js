let fs = require('fs');

class Photo{
    constructor(id, orientation, tags){
        this.id = id;
        this.orientation = orientation;
        this.tags = tags;
    }
}

let main = fs.readFile('a_example.txt', 'utf8', (err, data) => {
    let lines = data.split('\n');
    let N = lines[0];
    var photos = [];
    for (let i = 1 ; i <= N; i++){
        let rows = lines[i].split(' ');
        let photo = new Photo(i, rows[0], rows.slice(2));
        photos.push(photo);
    }
    console.log(photos);
});


