import { Project } from 'lib/types';
import allProjects from 'data/projects';

export async function getAllProjects(): Promise<Project[]> {
  return allProjects;
}

export async function getRecentlyProjects(): Promise<Project[]> {
  return [...allProjects].reverse().splice(0, 2);
}
