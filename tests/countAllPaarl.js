describe('countAllPaarl' , function(){
    it('returns all the registration numbers in the string for Paarl.' , function(){
        assert.equal(countRegNumber('CJ'),true);
    });
    it('returns all the registration numbers in the string for Paarl.' , function(){
        assert.equal(countRegNumber('CY'),true);
    });

});