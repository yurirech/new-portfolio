import {db} from "../firebase/firebase.utils";

export async function getProjectsData() {
  try {
    const projectsCollection = await db.collection('projects').orderBy('date', 'desc').get()
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
  try {
    const projects = await getProjectsData();
  return projects.map(project => {
    return {
      params: {
        id: project.id,
      }
    }
  })
  } catch (err) {
    console.log(err);
  }
}

export async function getProjectData(id, title, description, isSiteOn, link, image ) {
  try {
    const projects = await getProjectsData();
  projects.map((data: any) => {
    console.log(data);
    if (data.id === id) {
      title = data.title;
      description = data.description;
      isSiteOn = data.isSiteOn;
      link = data.siteUrl || null;
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
  } catch (err) {
    console.log(err);
  }
}
