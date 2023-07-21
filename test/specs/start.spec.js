describe('Primeiro test', () => {

    it.only('acessar o menu forms', async () => {
        await $('~Forms').click()
        await $('android=new UiSelector().text("Input field:")').waitForExist({timeout: 20000})
        await $('~text-input').setValue('teste')
        expect(await $('~text-input')).toBeDisplayed()
    });

});