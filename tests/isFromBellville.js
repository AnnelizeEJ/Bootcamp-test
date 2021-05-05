describe('isFromBellville' , function(){
    it('should return true if reg number is from Bellville' , function(){
        assert.equal(isFromBellville('CY 321 654'),true);
    });
    it('should return false if reg number is not from Bellville' , function(){
        assert.equal(isFromBellville('CJ 321 654'),false);
    });

});