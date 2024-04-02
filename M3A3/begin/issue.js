const queue = '[{"id":1,"name":"Task 1"},{"id":2,"name":"Task 2"}]';

const item = '{"id":1,"name":"Sample Item"}';

const queueData = JSON.parse(queue);
const itemData = JSON.parse(item);

console.log(queueData);
console.log(itemData);
