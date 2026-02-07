const users = require('../models/data');

// Helper to create a new unique ID
const generateId = () => (users.length? Math.max(...users.map(u => u.id)) + 1 : 1);

exports.getAllUsers = (req, res) => {
    res.status(200).json(users);
};

exports.getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
};

exports.createUser = (req, res) => {
    const { firstName, lastName, hobby } = req.body;
    const newUser = { id: generateId(), firstName, lastName, hobby };
    users.push(newUser);
    res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return res.status(404).json({ error: 'User not found' });

    const { firstName, lastName, hobby } = req.body;
    users[index] = { id, firstName, lastName, hobby };
    res.status(200).json(users[index]);
};

exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return res.status(404).json({ error: 'User not found' });

    users.splice(index, 1);
    res.status(200).json({ message: 'User deleted successfully' });
};