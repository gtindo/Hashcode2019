let fs = require('fs');

class Photo{
    constructor(id, orientation, tags){
        this.id = id;
        this.orientation = orientation;
        this.tags = tags;
    }
}

let main = fs.readFile('b_lovely_landscapes.txt', 'utf8', (err, data) => {
    let lines = data.split('\n');
    let N = lines[0];
    var photos = [];
    for (let i = 1 ; i <= N; i++){
        let rows = lines[i].split(' ');
        let photo = new Photo(i-1, rows[0], rows.slice(2));
        photos.push(photo);
    }
    console.log(photos);

    let h_photos = photos.filter(photo => photo.orientation === 'H');
    let v_photos = photos.filter(photo => photo.orientation === 'V');
    
    let s1 = [];
    h_photos.forEach((photo) => {
        s1.push(photo.id);
    })

    let s2 = [];
    for(let i = 0; i < v_photos.length; i+=2){
        s2.push([v_photos[i].id, v_photos[i+1].id]);
    }

    let slides = s1.concat(s2);
    
    var solution = slides.length+"\n";
    
    slides.forEach((value) => {
        if(value.length == 2) solution += (value[0] + " "+value[1]+"\n");
        else solution += (value + "\n");
    });

    console.log(solution);

    fs.writeFile("solution_lovely.txt", solution, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    }); 

});


