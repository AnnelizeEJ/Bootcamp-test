describe('regCheck' , function(){
    it('check registration number' , function(){
        assert.equal(regCheck('GP', 'L' , 'EC' , 'MP'),false);
    });
    it('check registration number' , function(){
        assert.equal(regCheck('GP', 'L' , 'EC' , 'CY'),false);
    });
    it('check registration number' , function(){
        assert.equal(regCheck('GP', 'L' , 'EC' , 'CA'),false);
    });

});