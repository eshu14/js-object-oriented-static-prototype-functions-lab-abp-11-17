class IcebreakerResponse{
function IcebreakerResponse(email){
  this.email = email
}
IcebreakerResponse.BatchCreate=function(arrEmails){
  for(let i=0;i<arrEmails.length;i++)
    return new IcebreakerResponse(arrEmails[i]);
}
}
