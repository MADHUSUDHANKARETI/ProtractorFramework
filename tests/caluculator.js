describe('demo caluculator tests',function(){
    it('addition test',function() {
        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('2');

        element(by.model('second')).sendKeys('6');

        element(by.css('[ng-click="doAddition()"]')).click();

        let result = element(by.cssContainingText('.ng-binding','8'));
        expect(result.getText()).toEqual('8');

        browser.sleep(3000)

    });
    it('subtraction test',function() {
        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('6');

        element(by.model('second')).sendKeys('2');

        element(by.css('[ng-click="doSubtraction()"]')).click();

        let result = element(by.cssContainingText('.ng-binding','4'));
        expect(result.getText()).toEqual('4');

        browser.sleep(3000)

    });
    
});
