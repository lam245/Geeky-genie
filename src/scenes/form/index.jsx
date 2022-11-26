import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Topbar from "../../scenes/global/Topbar";
import { useState } from "react";
import "../../index.css"
import Sidebar from "../../scenes/global/Sidebar";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSidebar, setIsSidebar] = useState(true);

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="app">
    <div className="side-team">
      <Sidebar isSidebar={isSidebar} />
      </div>
    <main className="content">
      
        <Box sx={{
          width: 4000,
          height: 5000
          
          
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
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
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
  translator: yup.string().required("required"),
  cover: yup.string().required("required"),
  page_count: yup
    .string().required("required"),
  public_year: yup.string().required("required"),
  content: yup.string().required("required"),
});
const initialValues = {
  title: "",
  translator: "",
  cover: "",
  page_count: "",
  public_year: "",
  content: "",
};

export default Form;
