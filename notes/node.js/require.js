
// BE CAREFUL!!!! If done incorrectly, can damage system!
// Do not use w/ a for-loop
// This function will create a new folder in the specified location of the system

var fs = require("fs");


// Make new directory
fs.mkdir("./test-folder", function(err) {
    if(err) throw err;
});
    
// Delete existing directory
fs.rmdir("./test-folder", function(err) {
    if(err) throw err;
});

// Rename existing directory
fs.rename("./oldfile.name", "newfile.name", function(err) {
    if(err) throw err;
});

