import React, { useState, useEffect } from 'react';
import { getBugs } from '../../services/jiraApi';
import { Bug } from '../../types';

const BugList: React.FC = () => {
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBugs();
  }, []);

  const fetchBugs = async () => {
    try {
      setLoading(true);
      const response = await getBugs();
      if ('data' in response && 'issues' in response.data) {
        setBugs(response.data.issues as Bug[]);
        setError(null);
      } else {
        throw new Error('Unexpected response structure');
      }
    } catch (err) {
      setError('Error fetching bugs. Please try again.');
      console.error('Error fetching bugs:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading bugs...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Bug List</h2>
      <ul>
        {bugs.map(bug => (
          <li key={bug.id}>{bug.fields.summary}</li>
        ))}
      </ul>
    </div>
  );
};

export default BugList;
