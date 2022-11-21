function printstuff(stuff){
    console.log(stuff);
}
function mainfunction(anotherfun,value)
{
    anotherfun(value);
}
mainfunction(printstuff,"hello");