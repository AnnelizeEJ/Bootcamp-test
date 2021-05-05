describe('isWeekday' , function(){
    it('if the parameter passed in is a day of the week' , function(){
        assert.equal(isWeekday('Saturday'),false);
    });
    it('if the parameter passed in is a day of the week' , function(){
        assert.equal(isWeekday('Monday'),true);
    });

});