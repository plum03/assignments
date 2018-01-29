const foodschema = new mongoose.Schema({
    // By default, none of these are required
    // if you want to require it, must specify
    
    // Required values:
    // name is not a subdocument, only required (see "type" & "required" keys)
    name: {
        type: String,
        required: true
    },

    // Setting a default value
    isVegan: {
        type:  Boolean,
        default: false
    },
   
    ingredients: [String],
    // Nutrition info is a subDocument
    nutritionInfo: {
        calories: Number,
        satFats: Number,
        isOrganic: Boolean
    } 
});

module.exports = mongoose.model("Food", foodschema);