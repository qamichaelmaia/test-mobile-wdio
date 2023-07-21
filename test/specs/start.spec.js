
describe('Primeiro test', () => {

    it('acessar o menu forms', async () => {
        //Forms
        await $('~Forms').click()
        await $('android=new UiSelector().text("Input field:")').waitForExist({timeout: 20000})  
        //Input field:
        await $('~text-input').setValue('Michael QA')
        //Switch:
        await $('~switch').click()
        //Dropdown:
        const button = await $('~Dropdown')
        await button.click()
        await $('android=new UiSelector().text("Appium is awesome")').click()
        //Button Active:
        await $('~button-Active').click()
    

        expect(await $('~text-input')).toBeDisplayed()
    });

});