class IcebreakerResponse{
function IcebreakerResponse(email){
  this.email = email
}
IcebreakerResponse.BatchCreate=function(arrEmails){
    return new IcebreakerResponse(arrEmails[0]);
}
}
