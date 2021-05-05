describe('countAllFromTown', function () {
    it('return all the registration numbers in the string that is for that town', function () {
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'),  [ 'CL 124', 'CL 345', 'CL 341' ] );
    });
    it('return all the registration numbers in the string that is for that town', function () {
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CY'),  [ 'CY 567' ])
    });
    it('return all the registration numbers in the string that is for that town', function () {
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ'),  [ 'CJ 456' ])
    });
    it('return all the registration numbers in the string that is for that town', function () {
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF'),  [])
    });

});