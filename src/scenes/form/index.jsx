import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Topbar from "../../scenes/global/Topbar";
import "../../index.css"
import Sidebar from "../../scenes/global/Sidebar";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import axios from "axios"


const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [isSidebar, setIsSidebar] = useState(true);
  const [age, setAge] = useState("")

  
  const [Info, setInfos] = useState(initialValues);
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
 
  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
        
        console.log(imageUrls)

      });
    });
  };
  

  const handleFormSubmit = (e) => {
    axios.post(`http://127.0.0.1:5000/books?state=${localStorage.getItem('state')}`, {
      "title": "second book added via api",
      "page_count": 88,
      "public_year": 3033,
      "content": "...(mandatory)",
      "descript": "...(mandatory)",
      "translator": null,
      "cover": null,
      "republish_count": null,
      "genres": [
          "ggenre1",
          "genre2"
      ],
      "authors": [
          1,
          3,
          4
      ]
  }, {
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        'Content-Type': 'application/json'
      },
    })
      .then(function (response) {
        console.log(response.data);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="app">
    <div className="side-team">
      <Sidebar isSidebar={isSidebar} />
      </div>
    <main className="content">
      
        <Box sx={{
          width: 4000,
          height: 2000
          
          
        }}
          m="20px">
      <Header title="CREATE BOOK" subtitle="Create a New Book Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          
        }) => (
              <form onSubmit={handleSubmit}>
                
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 2" }}
                  />
                   
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Translator"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.translator}
                name="translator"
                error={!!touched.translator && !!errors.translator}
                helperText={touched.translator && errors.translator}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Cover"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cover}
                name="cover"
                error={!!touched.cover && !!errors.cover}
                helperText={touched.cover && errors.cover}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Page count"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.page_count}
                name="page_count"
                error={!!touched.page_count && !!errors.page_count}
                helperText={touched.page_count && errors.page_count}
                sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Author"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.author}
                name="author"
                error={!!touched.author && !!errors.author}
                helperText={touched.author && errors.author}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Public year"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.public_year}
                name="public_year"
                error={!!touched.public_year && !!errors.public_year}
                helperText={touched.public_year && errors.public_year}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="content"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.content}
                name="content"
                error={!!touched.content && !!errors.content}
                helperText={touched.content && errors.content}
                sx={{ gridColumn: "span 4" }}
              />
                </Box>
                <Box sx={{marginTop : 2 }} display="flex" flexDirection={"row"}  m="  0  0 20px 0" justifyContent={"space-between"}>
                  <input 
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button type="button" onClick={uploadFile}> Upload Image</button>
                  </Box>
                  <Box>
                    
       <img src={imageUrls} width={100} height={100} marginTop={300} />
      
                  </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" >
                Create New User
              </Button>
            </Box>
          </form>
        )}
          </Formik>
          
        </Box>
        </main>
      </div>
  );
};



const checkoutSchema = yup.object().shape({
  title: yup.string().required("required"),
  
  
  page_count: yup
    .string().required("required"),
  public_year: yup.string().required("required"),
  content: yup.string().required("required"),
});
const initialValues = {
  author: "",
  title: "",
  translator: "",
  cover: "",
  page_count: "",
  public_year: "",
  republish_count: "",
  content: "",
};

export default Form;