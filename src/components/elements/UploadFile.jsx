import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { FaCamera } from "react-icons/fa";

const UploadFile = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [progress, setprogress] = useState(0);

  const handleFileChange = (e) => {// yaha us event ko pass kia ha
    const storage = getStorage();
    // yaha meta data remove kia kyunka jpeg paka hojata

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "images/");// yaha khatam kia ha +filename
    const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);// yaha files get kr re ha onchange pr// yaha bhi khatam kia

  // yaha meta ko khatam krna ha

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = // yaha apna progress banaya ha
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setprogress(progress);
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setFileUrl(downloadURL);// yaha firebase ka url khud ko pass krwa re ha
        });
      }
    );
  };
  return (// browser ma jo bhi show hota ha wo return ma likha hota ha isi liya ise browser JS kahta ha
  // jo bhi console ma liha hota ha wo hum likhta ha isi liya ata  ha warna nai 
    <>
      <div className="uploadfile">
        <label>
          {progress < 1 ? (// 1 ki jaga 100 ok
            <>
              <input
                type="file"
                id="input-file"
                className="form-control "
                onChange={handleFileChange}
              />
              <FaCamera size={30} /> <br />
              <progress value={progress} max="100" />
              {/* uper progress */}
            </>
          ) : (
            <img src={fileUrl} alt="..." />
          )}
        </label>
      </div>
    </>
  );
};

export default UploadFile;
