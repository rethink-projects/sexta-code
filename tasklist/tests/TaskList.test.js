const TaskList = require('../src/TaskList'); // Ajuste o caminho conforme necessário

describe('TaskList', () => {
    let taskList;

    beforeEach(() => {
        taskList = new TaskList();
    });

    test('should add a task', () => {
        taskList.addTask('Learn Jest');
        expect(taskList.tasks.length).toBe(1);
        expect(taskList.tasks[0].description).toBe('Learn Jest');
        expect(taskList.tasks[0].completed).toBe(false);
    });

    test('should complete a task', () => {
        taskList.addTask('Learn Jest');
        taskList.completeTask(1);
        expect(taskList.tasks[0].completed).toBe(true);
    });

    test('should delete a task by id', () => {
      taskList.addTask('Task 1');
      taskList.addTask('Task 2');
      taskList.deleteTask(1);

      expect(taskList.tasks.length).toBe(1);
      expect(taskList.tasks.find(task => task.id === 1)).toBeUndefined();
      expect(taskList.tasks[0].description).toBe('Task 2');
  });

    test('should list pending tasks', () => {
        taskList.addTask('Learn Jest');
        taskList.addTask('Write tests');
        taskList.completeTask(1);

        const consoleSpy = jest.spyOn(console, 'log');
        taskList.listPendingTasks();

        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Pending tasks:'));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('2: Write tests'));
    });

    test('should set the numeric priority of a task', () => {
      taskList.addTask('Task with numeric priority');
      taskList.setPriority(1, 1); // Definindo a maior prioridade
      expect(taskList.tasks[0].priority).toBe(1);
  });

  test('should list tasks sorted by numeric priority', () => {
      taskList.addTask('Task with normal priority');
      taskList.setPriority(1, 2); // Prioridade normal

      taskList.addTask('Task with high priority');
      taskList.setPriority(2, 1); // Maior prioridade

      taskList.addTask('Task with standard priority')

      const consoleSpy = jest.spyOn(console, 'log');
      taskList.listTasksByPriority();

      // O teste verifica se a tarefa com maior prioridade é listada primeiro
      expect(consoleSpy.mock.calls[0][0]).toContain('Task with high priority');
      expect(consoleSpy.mock.calls[1][0]).toContain('Task with normal priority');
      expect(consoleSpy.mock.calls[2][0]).toContain('Task with standard priority');

      jest.clearAllMocks();
  });

    test('should set a deadline for a task', () => {
      taskList.addTask('Task with deadline');
      taskList.setDeadline(1, '2024-03-22');

      expect(taskList.tasks[0].deadline).toBe('2024-03-22');
  });

  test('should list tasks for today', () => {
      // Supondo que hoje seja 2024-03-22, ajuste conforme necessário
      taskList.addTask('Task for today');
      taskList.setDeadline(1, '2024-03-23');

      const consoleSpy = jest.spyOn(console, 'log');
      taskList.listTodaysTasks();

      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Today's tasks:"));
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('1: Task for today'));

      jest.clearAllMocks();
  });

    afterEach(() => {
        jest.clearAllMocks();
    });
});

// describe('TaskList error handling', () => {
//   let taskList;
//   let consoleSpy;

//   beforeEach(() => {
//       taskList = new TaskList();
//       consoleSpy = jest.spyOn(console, 'log');
//   });

//   test('should show error when completing a non-existent task', () => {
//       taskList.completeTask(999); // Um ID que sabemos que não existe
//       expect(consoleSpy).toHaveBeenCalledWith('Task 999 not found.');
//   });

//   test('should show error when deleting a non-existent task', () => {
//       taskList.deleteTask(999); // Um ID que sabemos que não existe
//       expect(consoleSpy).toHaveBeenCalledWith('Task 999 not found.');
//   });

//   test('should show error when setting a deadline for a non-existent task', () => {
//       taskList.setDeadline(999, '2024-03-22'); // Um ID que sabemos que não existe
//       expect(consoleSpy).toHaveBeenCalledWith('Task 999 not found.');
//   });

//   afterEach(() => {
//       jest.clearAllMocks();
//   });
// });