
describe('Primeiro test', () => {

    it.only('acessar o menu forms', async () => {
        await $('~Forms').click() 
        await $('~text-input').setValue('Michael QA')
        await $('~switch').click()
        const button = await $('~Dropdown')
        await button.click()
        await $('android.widget.CheckedTextView').click()

        await $('~button-Active').click()



        expect(await $('~text-input')).toBeDisplayed()
    });

});