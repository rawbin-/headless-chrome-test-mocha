/**
 * --------------------------------------------------------------------------- *
 *
 * @Project: headless-chrome-test-mocha
 * @FileName: test
 * @Dependence: --
 * @Description: --
 * @CreatedBy: liao.zhang
 * @CreateDate: 2017/7/9 23:06
 * @LastModifiedBy: liao.zhang
 * @LastModifiedDate: 2017/7/9 23:06
 *
 * --------------------------------------------------------------------------- *
 */


var assert = require("assert");
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
});