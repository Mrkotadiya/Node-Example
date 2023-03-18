const os =require("os");

console.log(os.platform(),os.homedir());

const fs=require("fs");

// directories
if (!fs.existsSync('./_A/assets'))
    fs.mkdir('./assets', (err) => {
    if (err) {
    console.log(err);
    }
    console.log( 'folder created');
    }); 
//  else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//             console. log ('folder deleted')
//         }
//     }
//  )};   
