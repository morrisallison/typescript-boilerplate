expect = require 'must'
jsdom = require 'jsdom-global'

main = require '../src/main'

describe 'main', !->
    describe '#hello()', (,) !->
        it 'must return "Hello World!"', !->
            expect main.hello() .to.equal 'Hello World!'

    describe '#insertDiv()', (,) !->
        beforeEach !->
            this.timeout 3000
            jsdom()

        afterEach !->
            document.destroy()

        it 'must insert a div element in the body', !->
            main.insertDiv()

            document.body.childElementCount.must.equal 1
            document.body.children[0].tagName.must.equal 'DIV'
