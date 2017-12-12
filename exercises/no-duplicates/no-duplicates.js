// Function to remove duplicates from a string and add to a new array; Returns both the duplicates and the unique characters in separate strings.

var removeDups = function(string) {
    var outputs = {
        dups: "",
        unique: ""
    } 
    
    for (i=0; i< string.length; i++) {
        if(string.lastIndexOf(string[i]) === string.indexOf(string[i])){
            outputs.unique += string[i];
        } else outputs.dups += string[i]
    } 
    return outputs;
}   
    console.log(removeDups("mellow"));

    var removeDups = function(string) {
        var outputs = {
            dups: "",
            unique: ""
        }
        
        for (i=0; i< string.length; i++) {
            if(!outputs.unique.includes(string[i])) {
                outputs.unique += string[i]
            } else outputs.dups += string[i]
    
        } return outputs;
    }

    console.log(removeDups("mellow"));