
function combineUsers(...args){
const combinedObject = {
    users: []
};
for (const array of args){
    combinedObject.users.push(...array);
}

combinedObject.merge_date = "7/6/2026";
return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};