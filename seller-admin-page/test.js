var obj = {
    age : '25',
    findageArrow: () => {
        console.log(this.age);
    },
    findageNormal:function() {
        console.log(this.age);
    }
}

obj.findageArrow();
obj.findageNormal();