const fs = require("fs")


//1) creating one file 

// const quote = "Nothing to do "
// fs.writeFile("./awesome.html", quote, (err) => {
//     console.log("completed writing");
// });

// const quote2 = "Live More, Worry Less";

//2) creating 10 files

// for (let i=1; i <= 10; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         console.log("completed writing");
//     });
// }

// 3) creating 40 files

// console.log(process.argv);

// const quote2 = "Live More, Worry Less";
// const noOfFiles = process.argv[2];

// for (let i=1; i <= noOfFiles; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         console.log("completed writing", `text-${i}.html`);
//     });
// }

// 4) read a file using method 

fs.readFile('./cool.txt', 'utf-8',(err, data) => {
    if(err) {
        console.log("something went wrong");
    } else {
        console.log(data);
    }
});

// 5) update a file 
const quote3 = "\nhave a nice day";

fs.appendFile('./nice.txt', quote3, (err)=> {
    console.log("updated file");
})


// 6) delete a file 

fs.unlink('./delete.css', (err)=> {
    console.log("file deleted");
})