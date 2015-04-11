var obj1 = {
    myVal: "B",
    slowMethod: function () {
        var self = this;        <!-----

        console.log(self.myVal);

        setTimeout(function () {
            console.log(self.myVal);
        }, 2000);
    }
};

obj1.slowMethod();