describe('greet test' , function(){
    it('it should greet Annelize' , function(){
        assert.equal(greet('Annelize'),'Hello, Annelize');
    });
    it('it should greet Peggy' , function(){
        assert.equal(greet('Peggy'),'Hello, Peggy');
    });
    
});