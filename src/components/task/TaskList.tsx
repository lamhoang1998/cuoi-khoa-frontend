import React, { useState, useEffect } from 'react';
import { getTasks } from '../../services/jiraApi';
import { Task } from '../../types';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await getTasks();
      if (response && typeof response === 'object' && 'data' in response) {
        const data = response.data as { issues: Task[] };
        if ('issues' in data) {
          setTasks(data.issues);
          setError(null);
        }
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setError('Failed to fetch tasks. Please check your network connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.fields.summary}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
