describe('Create user', () => {
        it('Should receive the error message if the user already exists', async () => {
            await browser.url(`https://sandbox.affirm-stage.com/`)

            await $('(//div//span[text()="Sign in"])[1]').moveTo();
            await $('a[href="/user/signup"]').click();
            await $('input[type="tel"]').setValue('2257682322');
            await $('button[type="submit"]').click();
            await $('input[data-testid="phone-pin-field"]').setValue('123456');
            await $('[data-testid="first-name-field"]').setValue('Test');
            await $('[data-testid="last-name-field"]').setValue('Profile');
            await $('[data-testid="email-field"]').setValue('testprofile@gmail.com');
            await $('button[type="submit"]').click();
            await $('[data-testid="dob-field"]').setValue('02/12/2000');
            await $('[data-testid="last-four-ssn-field"]').setValue('7890');
            await $('button[type="submit"]').click();

            const signUpError = await $('[data-testid="sign-up-error"]');
            expect(signUpError).toHaveTextContaining('There was an error with your signup. Your phone number may be invalid, or you may already have an account.')
        })
})

