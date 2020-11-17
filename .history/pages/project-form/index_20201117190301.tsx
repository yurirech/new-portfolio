import {useEffect, useState} from "react";
import Link from 'next/link';

import {db, storageRef, auth} from '../../firebase/firebase.utils';
import { signIn } from "../../lib/auth";

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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
  }, [isUserLoggedIn]);

  const fileUpload = async (file) => {
    try {
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
    } catch (err) {
      console.log(err);
    }
  }

  const handleFileUpload = async (e) => {
    try {
      const url = await fileUpload(e);
    if (!url) {
      alert('choose a file to upload');
      return;
    }
    setFileUrl(await url.getDownloadURL());
    }

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

  const handleSignIn = e => {
    e.preventDefault();
    signIn(e.target.email.value, e.target.password.value);
  };

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
        !isUserLoggedIn ?
        <form onSubmit={handleSignIn}>
          <h2>Sign In</h2>
          <Input name='email'
                 type='text'
                 placeholder='Your Email'
                 label={null}
          />
          <Input name='password'
                 type='password'
                 placeholder='Your Email'
                 label={null}
          />
          <button type='submit'>submit</button>
        </form>
        :
        (!success ?
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

          <div className={`${utilStyles.container} ${styles.container}`}>
             <div className={styles.content}>
               <h2>Your project has been added successfully</h2>
               <Link href='/'>
                 <a className={utilStyles.linkAnimation}>Back to home</a>
               </Link>
               <Link href='/project-form'>
                 <a className={utilStyles.linkAnimation}
                    onClick={() => setSuccess(false)}>Add another </a>
               </Link>
             </div>
          </div>)
      }
    </div>
  );
}
