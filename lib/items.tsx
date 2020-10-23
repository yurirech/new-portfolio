import { projects } from "../models/projects";

export function getAllItemsIds() {
  return projects.map(project => {
    return {
      params: {
        id: project.id,
      }
    }
  })
}

export function getProjectData(id, title, description, isSiteOn, link, image ) {
  projects.map(data => {
    if (data.id === id) {
      title = data.title;
      description = data.description;
      isSiteOn = data.isSiteOn;
      link = data.link || null;
      image = data.imageFull;
    }
  });
  return {
    id,
    title,
    description,
    isSiteOn,
    link,
    image
  }
}
