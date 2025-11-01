import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', description: '' });
  const [serverInfo, setServerInfo] = useState('');

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchItems();
    checkHealth();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/items`);
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkHealth = async () => {
    try {
      const response = await fetch(`${API_URL}/health`);
      const data = await response.json();
      setServerInfo(`Connected to: ${data.instance}`);
    } catch (error) {
      setServerInfo('Backend unavailable');
    }
  };

  const addItem = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      });
      if (response.ok) {
        setNewItem({ name: '', description: '' });
        fetchItems();
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="App">
      <h1>Full Stack App on AWS</h1>
      <p className="server-info">{serverInfo}</p>

      <div className="form-section">
        <form onSubmit={addItem}>
          <input
            type="text"
            placeholder="Item name"
            value={newItem.name}
            onChange={(e) => setNewItem({...newItem, name: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={newItem.description}
            onChange={(e) => setNewItem({...newItem, description: e.target.value})}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>

      <div className="items-section">
        <h2>Items ({items.length})</h2>
        {loading ? <p>Loading...</p> : (
          <ul>
            {items.map((item) => (
              <li key={item._id}>
                <strong>{item.name}</strong>: {item.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
