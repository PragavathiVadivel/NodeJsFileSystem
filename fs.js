
// Importing the module 
const readline = require("readline-sync"); 
const fs=require('fs');
const quote="This is an awesome Text File";
  
// Enter the number 
console.log("Please enter number of files you need :")
let a = Number(readline.question()); 
let filenames = []; 
for (let i = 0; i < a; i++) { 
  console.log("Please Enter the filename : ")
  f=(readline.question());  
        let fileContent= fs.readFileSync("./backup/fileList.txt", "utf8");
        // We want full words, so we use full word boundary in regex.
        const regex = new RegExp('\\b' + f + '\\b');
        if (regex.test(fileContent)) {
            console.log(`filename already exists!. Please Enter different filename`);
        }
        else{            
            filenames.push(f);
            fs.writeFile(`./backup/${f}.txt`,quote,()=>{
            });          
            fs.appendFile("./backup/fileList.txt", f+'\r\n' , (err) => { 
                if (err) { 
                  console.log(err); 
                } 
                console.log("The content of the file\n" + fs.readFileSync("./backup/fileList.txt", "utf8"));
            });
        }
} 
console.log("The Array contains\n "+ filenames); 

