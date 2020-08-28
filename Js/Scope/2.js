function foo(){
    function bar(a){
        i = 3;
        console.log(a + i);
    }

    for(var i = 0;i < 10;i ++){
        console.log(i);
        bar(i * 2)
    }
}
foo();