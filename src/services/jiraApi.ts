import axios from 'axios';
import { JiraItem, JiraItemData } from '../types';
import { API_BASE_URL, API_TOKEN, PROJECT_KEY, EMAIL } from '../constants/apiConstants';

const jiraApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Basic ${btoa(`${EMAIL}:${API_TOKEN}`)}`,
    'Content-Type': 'application/json',
  },
});

export const getTasks = () => jiraApi.get(`/search?jql=project = ${PROJECT_KEY} AND issuetype = Task`);
export const getBugs = () => jiraApi.get(`/search?jql=project = ${PROJECT_KEY} AND issuetype = Bug`);

export const createItem = (itemData: JiraItemData, issuetype: 'Task' | 'Bug') => 
  jiraApi.post('/issue', {
    fields: {
      project: { key: PROJECT_KEY },
      summary: itemData.summary,
      description: itemData.description,
      issuetype: { name: issuetype },
    },
  });

export const createTask = (taskData: JiraItemData) => createItem(taskData, 'Task');
export const createBug = (bugData: JiraItemData) => createItem(bugData, 'Bug');
