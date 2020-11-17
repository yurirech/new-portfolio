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
  try ()
}
