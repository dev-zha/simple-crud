const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// In-memory data store
let data = [
  {
    id: 1,
    title: 'Item 1',
    description: 'Description for Item 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: 'Item 2',
    description: 'Description for Item 2',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: 'Item 3',
    description: 'Description for Item 3',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const validateItem = (item) => {
  if (!item.title || typeof item.title !== 'string' || item.title.trim() === '') {
    throw new Error('Title is required and must be a non-empty string');
  }

  if (
    !item.description ||
    typeof item.description !== 'string' ||
    item.description.trim() === ''
  ) {
    throw new Error('Description is required and must be a non-empty string');
  }
};

// Get all items
app.get('/items', (req, res) => {
  res.json(data);
});

// Get a single item by ID
app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = data.find(item => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Create a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  try {
    validateItem(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  newItem.id = data.length + 1;
  newItem.createdAt = new Date();
  newItem.updatedAt = new Date();
  data.push(newItem);

  res.status(201).json(newItem);
});

// Update an item by ID
app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;
  try {
    validateItem(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  const index = data.findIndex(item => item.id === itemId);

  if (index !== -1) {
    updatedItem.updatedAt = new Date();
    data[index] = { ...data[index], ...updatedItem };
    res.json(data[index]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const index = data.findIndex(item => item.id === itemId);

  if (index !== -1) {
    data = data.filter(item => item.id !== itemId);
    res.json({ message: 'Item deleted successfully' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
