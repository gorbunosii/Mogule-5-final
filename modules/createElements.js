import modulStorage from './serviceStorage.js';
const {taskNumberStorage} = modulStorage;

const createRow = ({task, done, text, bg}) => {
  const tr = document.createElement('tr');
  tr.classList.add(`order`);
  tr.classList.add(bg);

  const tdNumber = document.createElement('td');
  tdNumber.textContent = taskNumberStorage(task) + 1;

  const tdTask = document.createElement('td');
  tdTask.classList.add(text);
  tdTask.textContent = task;

  const tdStatus = document.createElement('td');
  tdStatus.textContent = done;

  const tdDander = document.createElement('td');
  const btnDelete = document.createElement('button');
  btnDelete.classList.add(`btn`);
  btnDelete.classList.add(`btn-danger`);
  btnDelete.textContent = `Удалить`;
  const btnComplete = document.createElement('button');
  btnComplete.classList.add(`btn`);
  btnComplete.classList.add(`btn-success`);
  btnComplete.textContent = `Завершить`;
  tdDander.append(btnDelete, btnComplete);

  tr.classList.add(`order`);
  tr.append(tdNumber, tdTask, tdStatus, tdDander);

  return tr;
};

export default {
  createRow,
};

