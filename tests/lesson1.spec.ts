import test, { expect } from "@playwright/test";

//     test("Open a Browser", async ({ browser })=>{
//         const context = await browser.newContext();

//         const page = await context.newPage();

//         await page.goto("https://example.com");

//         const title = await page.title();
//         console.log("Title", title)
//         const url = await page.url();
//  console.log("Url", url)
//         await expect(page).toHaveTitle("Example Domain");
//         await context.close();

//     })

// //************************TWO PAGES IN ONE CONTEXT
// test('Multiple pages in one browser context', async ({ browser }) => {
//     const context = await browser.newContext();

//     const page1 = await context.newPage();
//     const page2 = await context.newPage();

//     await page1.goto('https://example.com');
//     await page2.goto('https://playwright.dev');

//     console.log('Page 1 URL:', page1.url());
//     console.log('Page 2 URL:', page2.url());

//     await expect(page1).toHaveTitle('Example Domain');
//     await expect(page2).toHaveURL(/playwright\.dev/);

//     await context.close();
// });

// //*****************MULTIPLE BROWSERS */
// test('Separate browser contexts', async ({ browser }) => {
//     const context1 = await browser.newContext();
//     const context2 = await browser.newContext();

//     const page1 = await context1.newPage();
//     const page2 = await context2.newPage();

//     await page1.goto('https://example.com');
//     await page2.goto('https://example.com');

//     await page1.evaluate(() => {
//         localStorage.setItem('user', 'Dispatcher');
//     });

//     const valueInContext1 = await page1.evaluate(() =>
//         localStorage.getItem('user')
//     );

//     const valueInContext2 = await page2.evaluate(() =>
//         localStorage.getItem('user')
//     );

//     console.log('Context 1:', valueInContext1);
//     console.log('Context 2:', valueInContext2);

//     expect(valueInContext1).toBe('Dispatcher');
//     expect(valueInContext2).toBeNull();

//     await context1.close();
//     await context2.close();
// });


//*************************RELOAD, BACK, FORWARD , GOTO */
// test('Practice browser navigation', async ({ page }) => {

//     // Open the first website
//     await page.goto('https://example.com');
//     await expect(page).toHaveTitle('Example Domain');

//     console.log('First URL:', page.url());

//     // Navigate to the second website
//     await page.goto('https://playwright.dev');
//     await expect(page).toHaveURL(/playwright\.dev/);

//     console.log('Second URL:', page.url());

//     // Go back to the previous page
//     await page.goBack();
//     await expect(page).toHaveTitle('Example Domain');

//     console.log('After going back:', page.url());

//     // Go forward again
//     await page.goForward();
//     await expect(page).toHaveURL(/playwright\.dev/);

//     console.log('After going forward:', page.url());

//     // Refresh the current page
//     await page.reload();
//     await expect(page).toHaveURL(/playwright\.dev/);
// });

//***************Locators */
// test('Practice locating and clicking a link', async ({ page }) => {

//     await page.goto('https://playwright.dev');

//     const getStartedLink = page.getByRole('link', {
//         name: 'Get started'
//     });

//     await expect(getStartedLink).toBeVisible();

//     await getStartedLink.click();

//     await expect(page).toHaveURL(/intro/);

//     console.log('Successfully navigated to the introduction page.');
// });

//***************************LOCATORS */
// test('Practice different locator strategies', async ({ page }) => {

//     await page.goto(
//         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
//     );

//     // Locate username using placeholder
//     const username = page.getByPlaceholder('Username');

//     // Locate password using placeholder
//     const password = page.getByPlaceholder('Password');

//     // Locate login button using role
//     const loginButton = page.getByRole('button', {
//         name: 'Login'
//     });

//     await expect(username).toBeVisible();
//     await expect(password).toBeVisible();
//     await expect(loginButton).toBeVisible();

//     await username.fill('Admin');
//     await password.fill('admin123');

//     await loginButton.click();

//     await expect(page).toHaveURL(/dashboard/);

//     console.log('Login successful.');
// });


//***********************hover click */
// test('Practice mouse actions', async ({ page }) => {

//     await page.goto('https://playwright.dev/');

//     // 1. Hover over the navigation link
//     const docsLink = page.getByRole('link', { name: 'Docs' });
//     await docsLink.hover();
//     // 2. Click the navigation link
//     await docsLink.click();

//     await expect(page).toHaveURL(/docs/);

//     // 3. Verify the destination page
//     await expect(
//         page.getByRole('heading', { name: /installation/i }).first()
//     ).toBeVisible();

//     console.log('Mouse hover and click practice passed.');
// });

//*************************DOUBLE CLICK, RIGHT CLICK, SCROLL */
// test("double and right click", async ({ page})=>{
//     await page.goto("https://demoqa.com/buttons");

//      await page.getByRole('button', { name: 'Double Click Me' }).dblclick();

//        await expect(page.locator('#doubleClickMessage'))
//         .toHaveText('You have done a double click');

//          await page.getByRole('button', { name: 'Right Click Me' })
//         .click({button : "right"});

//         await expect(page.locator('#rightClickMessage'))
//         .toHaveText('You have done a right click');
//await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
//})

//*************Drag and Drop */
// test('Practice drag and drop', async ({ page }) => {

//     await page.goto('https://demoqa.com/droppable');

//     const draggable = page.locator('#draggable');
//     const dropTarget = page.locator('#simpleDropContainer #droppable');

//     await expect(draggable).toBeVisible();
//     await expect(dropTarget).toBeVisible();

//     await draggable.dragTo(dropTarget);

//     await expect(dropTarget).toContainText('Dropped!');

//     console.log('Drag-and-drop practice passed.');
// });

//************************ACTIONS */
// test('Practice keyboard actions', async ({ page }) => {

//     await page.goto(
//         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
//     );

//     const username = page.getByPlaceholder('Username');
//     const password = page.getByPlaceholder('Password');

//     // 1. Type into the username field
//     await username.fill('WrongUser');

//     // 2. Select all existing text and replace it
//     await username.press('Control+A');
//     await username.pressSequentially('Admin');

//     await expect(username).toHaveValue('Admin');

//     // 3. Move focus to the next input using Tab
//     await username.press('Tab');
//     await expect(password).toBeFocused();

//     // 4. Enter the password
//     await password.fill('admin123');

//     // 5. Press Enter to submit the form
//     await password.press('Enter');

//     await expect(page).toHaveURL(/dashboard/);

//     console.log('Keyboard actions practice passed.');
// });

//*************************KEYBOARD SHORT CUTS */
// test('Practice keyboard navigation and shortcuts', async ({ page }) => {

//     await page.goto('https://demoqa.com/select-menu');

//     // Locate the searchable dropdown
//     const dropdown = page.locator('#withOptGroup');

//     await dropdown.click();
//     await page.pause();
//     // Type to search for an option
//     await page.keyboard.type('Group 1, option 1');

//     // Press Enter to select the highlighted option
//     await page.keyboard.press('Enter');

//     await expect(
//         page.locator('#withOptGroup .css-1dimb5e-singleValue')
//     ).toContainText('Group 1, option 1');

//     console.log('Keyboard navigation practice passed.');
// });


//****************************SELECTS */
// test('Practice native dropdown', async ({ page }) => {

//     await page.goto('https://demoqa.com/select-menu');

//     const dropdown = page.locator('#oldSelectMenu');

//     await dropdown.selectOption({ label: 'Purple' });

//     await expect(dropdown).toHaveValue('4');

//     console.log('Selected option:', await dropdown.inputValue());
// });

//********************************CUSTOM DROPDOWS */
// test('Practice custom dropdown', async ({ page }) => {

//     await page.goto('https://demoqa.com/select-menu');

//     // Open the custom dropdown
//     await page.locator('#withOptGroup').click();

//     // Locate and select an option
//     await page.getByText('Group 1, option 1', { exact: true }).click();

//     // Verify the selected value
//     await expect(page.locator('#withOptGroup'))
//         .toContainText('Group 1, option 1');

//     console.log('Custom dropdown selection passed.');
// });


//**********CHECKBOXES */
// test('Practice checkboxes and radio buttons', async ({ page }) => {

//     await page.goto('https://demoqa.com/checkbox');

//     // await page.getByRole('treeitem').filter({
//     //     has : page.locator('.rc-tree-switcher.rc-tree-switcher_close')
//     // }).click();

//     //  await expect(
//     //     page.getByRole('treeitem', { name: /Desktop/ })
//     // ).toBeVisible();
//     const homeTreeItem = page.getByRole('treeitem', {
//         name: /Home/
//     });

//     await homeTreeItem.locator('.rc-tree-switcher').click();

//     // Verify Desktop appears in the tree
//     await expect(
//         page.getByRole('treeitem', { name: /Desktop/ })
//     ).toBeVisible();
// });
//     // Click Home
//     // await page.getByRole('treeitem').filter( {
//     //     hasText : "Home"
//     // }).click();

//     // await page.getByRole('treeitem').filter( {
//     //     hasText : "Desktop"
//     // }).click();


//     // Select the Desktop checkbox
//     // const desktopCheckbox = page.getByRole('checkbox', {
//     //     name: 'Desktop'
//     // });

//     // await desktopCheckbox.check();
//     // await expect(desktopCheckbox).toBeChecked();

//     // // Verify the selected result
//     // await expect(page.locator('#result')).toContainText('desktop');

//     // await page.goto('https://demoqa.com/radio-button');

//     // // Select Yes
//     // const yesRadio = page.getByRole('radio', { name: 'Yes' });

//     // await yesRadio.check();
//     // await expect(yesRadio).toBeChecked();

//     // // Verify the result
//     // await expect(page.locator('.text-success')).toHaveText('Yes');

// //     // console.log('Checkbox and radio button practice passed.');
// // //)};

// //*********************8AUTO WAITING */
// test('Practice auto-waiting and URL waits', async ({ page }) => {

//     await page.goto(
//         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
//     );

//     await page.getByPlaceholder('Username').fill('Admin');
//     await page.getByPlaceholder('Password').fill('admin123');

//     // Start waiting for the dashboard URL before clicking Login
//     const navigation = page.waitForURL('**/dashboard/**');

//     await page.getByRole('button', { name: 'Login' }).click();

//     await navigation;

//     // Verify the destination page
//     await expect(
//         page.getByRole('heading', { name: 'Dashboard' })
//     ).toBeVisible();

//     console.log('Auto-waiting practice passed.');
// });


