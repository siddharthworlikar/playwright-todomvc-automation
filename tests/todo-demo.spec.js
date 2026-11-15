import { test, expect } from '@playwright/test';

test('Add Tasks', async ({ page }) => {
  
  await page.goto('https://todomvc.com/examples/react/dist/', {
    waitUntil: 'networkidle'
  });


  // Add tasks to the todo list
  const todoAdd = page.getByTestId('text-input');

  await todoAdd.fill('Buy Groceries');
  await todoAdd.press('Enter');

  await todoAdd.fill('Clean the house');
  await todoAdd.press('Enter');

  await todoAdd.fill('Pay bills');
  await todoAdd.press('Enter');

  await todoAdd.fill('Go for a Run!');
  await todoAdd.press('Enter');

  // Verify that all tasks were added successfully
  const todoCount = await page.getByTestId('todo-item-label').count();
  if (todoCount === 4){
    console.log('All tasks added successfully');
  }
  else {
    console.log('Some tasks were not added successfully');
  }

  //Verify the individual items in the todo list.
  const todoItems = await page.getByTestId('todo-item-label');

  await expect(todoItems.nth(0)).toHaveText('Buy Groceries');
  await expect(todoItems.nth(1)).toHaveText('Clean the house');
  await expect(todoItems.nth(2)).toHaveText('Pay bills');
  await expect(todoItems.nth(3)).toHaveText('Go for a Run!');

  console.log('All items verified successfully');

  //Mark as complete
  const todoComplete = await page.getByTestId('todo-item-toggle');

  await todoComplete.nth(0).click();
  await todoComplete.nth(1).click();
  await todoComplete.nth(2).click();
  await todoComplete.nth(3).click();

  console.log('All items marked as complete successfully');
  await page.getByRole('link', { name: 'Completed' }).click();
  
  const completedCount = await page.getByTestId('todo-item-label').count();
  console.log(`Number of completed tasks: ${completedCount}`);

  //Unmark as complete
  await page.getByRole('link', { name: 'All' }).click();

  await todoComplete.nth(0).click();
  await todoComplete.nth(1).click();
  await todoComplete.nth(2).click();
  await todoComplete.nth(3).click();
  await page.getByRole('link', { name: 'Active' }).click();

  const activeCount = await page.getByTestId('todo-item-label').count();
  console.log(`Number of active tasks: ${activeCount}`);

  //Remove all tasks
  await page.getByRole('link', { name: 'All' }).click();

  for (let i = 1; i <= 4; i++) {
    const todoItemsCount = page.getByTestId('todo-item-label').first();
    await todoItemsCount.hover()
    await page.getByTestId('todo-item-button').first().hover();
    await page.getByTestId('todo-item-button').first().click();
}
  const newCount = await page.getByTestId('todo-item-label').count(); 

  console.log('All items removed successfully');
  console.log(`Number of tasks after removal: ${newCount}`);
});