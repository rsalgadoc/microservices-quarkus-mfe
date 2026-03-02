package io.github.rsalgadoc;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;
import java.util.Optional;

@Path("/api/tasks")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TaskResource {

    @Inject
    TaskService taskService;

    @GET
    public Response getAllTasks() {
        List<Task> tasks = taskService.getAllTasks();
        return Response.ok(tasks).build();
    }

    @GET
    @Path("/{id}")
    public Response getTaskById(@PathParam("id") Long id) {
        Optional<Task> task = taskService.getTaskById(id);
        if (task.isPresent()) {
            return Response.ok(task.get()).build();
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }

    @POST
    public Response createTask(Task task) {
        Task createdTask = taskService.createTask(task);
        return Response.status(Response.Status.CREATED).entity(createdTask).build();
    }

    @PUT
    @Path("/{id}")
    public Response updateTask(@PathParam("id") Long id, Task task) {
        Task updatedTask = taskService.updateTask(id, task);
        if (updatedTask != null) {
            return Response.ok(updatedTask).build();
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }

    @DELETE
    @Path("/{id}")
    public Response deleteTask(@PathParam("id") Long id) {
        boolean deleted = taskService.deleteTask(id);
        if (deleted) {
            return Response.noContent().build();
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }
}
