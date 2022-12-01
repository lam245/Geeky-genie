import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react";
import "../../index.css"


const AccountManagement = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values) => {
        console.log(values);
    };
    return (
        <div className="app">
        <main className="content1">
          
            <Box sx={{
              width: 4000,
              height: 8000
              
              
            }}
              m="20px">
          <Header username="ACCOUNT INFO"  />
    
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
                    label="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username}
                    name="username"
                    error={!!touched.username && !!errors.username}
                    helperText={touched.username && errors.username}
                    sx={{ gridColumn: "span 4" }}
                      />
                       
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4 " }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    error={!!touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    sx={{ gridColumn: "span 4" }}
                  />
                  
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="User role"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.user_role}
                    name="user_role"
                    error={!!touched.user_role && !!errors.user_role}
                    helperText={touched.user_role && errors.user_role}
                    sx={{ gridColumn: "span 4" }}
                  />
                  
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                                    <Button type="submit" color="secondary" variant="contained"
                                        sx={{
                                            fontSize: 20,
                                            marginRight: 50,
                                            width: 500
                                        }}>
                    EDIT INFO
                                    </Button>
                                    <input type="file" name="file"  />
			<div>
				<button >Submit</button>
			</div>
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
      username: yup.string().required("required"),
      
      
      profile_pic: yup
        .string().required("required"),
      user_role: yup.string().required("required"),
      content: yup.string().required("required"),
    });
    let initialValues = {
      username: "",
      email: "",
      name: "",
      profile_pic: "",
      user_role: "",
      republish_count: "",
      content: "",
    };
export default AccountManagement
