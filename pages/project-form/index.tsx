import {db, storageRef} from '../../firebase/firebase.utils'
import {useState} from "react";

// const handleInput = (e) => {
//   e.preventDefault();
// };

export default function ProjectForm() {
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileUpload = async (e) => {

    //target the input file
    const file = e.target.files[0];

    //Create file ref to the storage
    const fileRef = storageRef.child(file.name);

    // store file in the cloud and get the file url and set it ot the state
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());


  };

  const handleSubmit = e => {
    e.preventDefault();
    db.collection('test').add({
      title: e.target.title.value,
      description: e.target.title.value,
      image: fileUrl
    }).then(() => {
      console.log('SUCCESS!');
    }).catch((err) => {
      console.log(err);
    })

  }

  return (
    <div style={{position: 'absolute', bottom: '0'}}>
      <form onSubmit={handleSubmit}>
        <input name='title' type="text"/>
        <input name='description' type="text"/>
        <input name='image' type="file" accept='image/*' onChange={handleFileUpload}/>
        <button type='submit'>submit</button>
        <img width='50px' src={fileUrl} alt=""/>
      </form>
    </div>
  );
}
