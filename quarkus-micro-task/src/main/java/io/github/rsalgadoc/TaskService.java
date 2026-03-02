package io.github.rsalgadoc;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@ApplicationScoped
public class TaskService {
    
    @Inject
    TaskRepository taskRepository;

    @Transactional
    public Task createTask(Task task) {
        taskRepository.persist(task);
        return task;
    }

    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findByIdOptional(id);
    }

    public List<Task> getAllTasks() {
        return taskRepository.listAll();
    }

    @Transactional
    public Task updateTask(Long id, Task updatedTask) {
        Optional<Task> existingTask = taskRepository.findByIdOptional(id);
        if (existingTask.isPresent()) {
            Task task = existingTask.get();
            if (updatedTask.getPriority() != null) {
                task.setPriority(updatedTask.getPriority());
            }
            if (updatedTask.getDescription() != null) {
                task.setDescription(updatedTask.getDescription());
            }
            if (updatedTask.getType() != null) {
                task.setType(updatedTask.getType());
            }
            taskRepository.persist(task);
            return task;
        }
        return null;
    }

    @Transactional
    public boolean deleteTask(Long id) {
        return taskRepository.deleteById(id);
    }
}
