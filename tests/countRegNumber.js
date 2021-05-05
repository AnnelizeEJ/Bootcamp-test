describe('countRegNumber' , function(){
    it('number of registration numbers in the string' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it('number of registration numbers in the string' , function(){
        assert.equal(countRegNumber("ca 9089") ,1);
    });

});