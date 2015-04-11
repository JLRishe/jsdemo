var obj1 = {
    myVal: "B",
    slowMethod: function () {
        console.log(this.myVal);

        setTimeout(function () {
            console.log(this.myVal);
        }.bind(this), 2000);         <!------
    }
};

obj1.slowMethod();