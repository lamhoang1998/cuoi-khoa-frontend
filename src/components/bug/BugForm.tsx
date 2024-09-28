import React, { useState } from 'react';
import { createBug } from '../../services/jiraApi';
import { JiraItemData } from '../../types';

const BugForm: React.FC = () => {
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const bugData: JiraItemData = { summary, description };
      await createBug(bugData);
      setSummary('');
      setDescription('');
      alert('Bug reported successfully!');
    } catch (err) {
      setError('Error reporting bug. Please try again.');
      console.error('Error reporting bug:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Report New Bug</h2>
      <input
        type="text"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Bug summary"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Bug description"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Reporting...' : 'Report Bug'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default BugForm;
