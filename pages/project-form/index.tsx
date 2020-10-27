import {useState} from "react";
import Link from 'next/link';

import {db, storageRef} from '../../firebase/firebase.utils';

import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";
import styles from './index.module.scss'
import utilStyles from '../../styles/utils.module.scss'



//TODO: Implement field validation

export default function ProjectForm() {
  const [fileUrl, setFileUrl] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [isSiteOn, setIsSiteOn] = useState(false);
  const [tags, setTags] = useState([]);
  const [success, setSuccess] = useState(false);
  const [siteUrl, setSiteUrl] = useState(null);


  const fileUpload = async (file) => {
    //target the input file
    const newFile = file.target.files[0];

    //Create file ref to the storage
    const fileRef = storageRef.child(newFile?.name || '');

    if (!newFile?.name) {
      return;
    }

    // store file in the cloud and get the file url and return the url reference
    await fileRef.put(newFile);
    return fileRef;

  }

  const handleFileUpload = async (e) => {
    const url = await fileUpload(e);
    if (!url) {
      alert('choose a file to upload');
      return;
    }
    setFileUrl(await url.getDownloadURL());

  };

  const handleThumbnailUpload = async (e) => {
    const url = await fileUpload(e);
    if (!url) {
      alert('choose a file to upload');
      return;
    }
    setThumbnailUrl(await url.getDownloadURL());
  };

  const handleTags = e => {
    setTags(e.target.value.split(',').map(item => item.trim()));
  }

  const handleSubmit = e => {
    e.preventDefault();
    db.collection('projects').add({
      title: e.target.title.value,
      description: e.target.description.value,
      tags: tags,
      isSiteOn: isSiteOn,
      siteUrl: siteUrl,
      image: fileUrl,
      thumbnail: thumbnailUrl
    }).then(() => {
      setSuccess(true);
    }).catch((err) => {
      console.log(err);
    })

  }

  return (
    <div className={`${utilStyles.container} ${styles.container}`}>
      {
        !success ?
          <form onSubmit={handleSubmit}>
              <h2>Project Upload</h2>
              <Input name='title'
                     type='text'
                     placeholder='Title'
                     label={null}
              />

              <Textarea
                name='description'
                placeholder='Description'
                label={null}
                rows={4}
              />

              <Input
                name='tags'
                type='text'
                placeholder='Tags separate by comma'
                label={null}
                onChange={handleTags}
              />

              <Input
                name='isSiteOn'
                type='checkbox'
                label='Site is on:'
                checkbox
                onChange={(e) => setIsSiteOn(e.target.checked)} />
              {
                isSiteOn ?
                  <Input
                    name='siteUrl'
                    type='text'
                    placeholder='Site Url'
                    value={siteUrl}
                    label={null}
                    onChange={(e) => setSiteUrl(e.target.value)}
                  />
                  :
                  null
              }
              <Input
                name='image'
                type="file"
                accept='image/*'
                label={null}
                onChange={handleFileUpload}
              />

              <Input
                name='thumbnail'
                type="file"
                accept='image/*'
                label={null}
                onChange={handleThumbnailUpload}/>

              <button type='submit'>submit</button>
          </form>

          :

          <div>
            <h1>Your project has been added successfully</h1>
            <Link href='/'>
              Back to home
            </Link>
            <Link href='/project-form'>
              <a onClick={() => setSuccess(false)}>Add another </a>
            </Link>
          </div>
      }
    </div>
  );
}
