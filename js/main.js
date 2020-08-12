//User clicked on button 
// if the item ha value, then add it to the todo list 
document.getElementById('add').addEventListener('click',function(){
    var value1=document.getElementById('item').value;
    if(value1){
        console.log(value1);
    }
});