const request = require('supertest');
const app = require('../src/app');
const Task = require('../src/models/taskModel');
const User = require('../src/models/userModel');

describe('Task Management', () => {
    let user;
    let token;

    beforeAll(async () => {
        user = await User.create({ username: 'testuser', password: 'password123' });
        token = await request(app)
            .post('/api/auth/login')
            .send({ username: 'testuser', password: 'password123' })
            .then(res => res.body.token);
    });

    afterAll(async () => {
        await User.deleteMany({});
        await Task.deleteMany({});
    });

    it('should create a new task', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .set('Authorization', `Bearer ${token}`)
            .send({ title: 'Test Task', status: 'pending' });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('task');
        expect(res.body.task.title).toEqual('Test Task');
    });

    it('should retrieve all tasks for the user', async () => {
        const res = await request(app)
            .get('/api/tasks')
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('tasks');
        expect(res.body.tasks.length).toBeGreaterThan(0);
    });

    it('should update a task', async () => {
        const task = await Task.create({ title: 'Update Task', status: 'pending', user: user._id });
        
        const res = await request(app)
            .put(`/api/tasks/${task._id}`)
            .set('Authorization', `Bearer ${token}`)
            .send({ title: 'Updated Task', status: 'completed' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('task');
        expect(res.body.task.title).toEqual('Updated Task');
        expect(res.body.task.status).toEqual('completed');
    });

    it('should delete a task', async () => {
        const task = await Task.create({ title: 'Delete Task', status: 'pending', user: user._id });
        
        const res = await request(app)
            .delete(`/api/tasks/${task._id}`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toEqual(204);
    });
});