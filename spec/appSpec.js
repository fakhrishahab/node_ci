var index = require('../routes/index');

describe('Index', function(){
	describe('Get Method', function(){
		it('should have a get method', function(){
			expect(index.get('/')).toBeDefined();
		})
	})

	describe('Post Method', function(){
		it('should have a post method', function(){
			expect(index.post('/')).toBeDefined()
		})
	})
})		