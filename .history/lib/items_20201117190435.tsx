import {db} from "../firebase/firebase.utils";

export async function getProjectsData() {
  try {
    const projectsCollection = await db.collection('projects').get()
   return projectsCollection.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    }
  });
  } catch (err) {
    console.log(err)
  }
}

export async function getAllItemsIds() {
  const projects = await getProjectsData();
  return projects.map(project => {
    return {
      params: {
        id: project.id,
      }
    }
  })
}

export async function getProjectData(id, title, description, isSiteOn, link, image ) {
  const projects = await getProjectsData();
  projects.map((data: any) => {
    if (data.id === id) {
      title = data.title;
      description = data.description;
      isSiteOn = data.isSiteOn;
      link = data.link || null;
      image = data.image;
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
