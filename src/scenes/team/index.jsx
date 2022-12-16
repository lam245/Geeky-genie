import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GRID_SINGLE_SELECT_COL_DEF } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Topbar from "../../scenes/global/Topbar";
import { useState } from "react";
import "../../index.css"
import Sidebar from "../../scenes/global/Sidebar";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);
  const [selectionModel, setSelectionModel] = useState([]);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    
  ];

  return (
    <div className="app">
      
    <div className="side-team">
      <Sidebar isSidebar={isSidebar} />
      </div>
    <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
       
    <Box m="20px">
          <Header title="Users" subtitle="Managing the users" />
          <div className="flex-main">
            <Box
              onClick={()=>console.log(selectionModel.newSelectionModel)}
            width="20%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
               colors.greenAccent[600]
                
            }
            borderRadius="4px"
          >
            
             <SecurityOutlinedIcon />
            
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              Ban 10 days
            </Typography>
            </Box>
            <Box
            width="20%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
               colors.greenAccent[600]
                
            }
            borderRadius="4px"
          >
             <SecurityOutlinedIcon />
            
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              Ban 100 days
            </Typography>
            </Box>
            <Box
            width="20%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
               colors.greenAccent[600]
                
            }
            borderRadius="4px"
          >
             <SecurityOutlinedIcon />
            
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              Ban
            </Typography>
          </Box>
          </div>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
            <DataGrid
              onSelectionModelChange={(newSelectionModel) => {
                
                setSelectionModel({
                  ...selectionModel,newSelectionModel
                }
                   
                )
              }}
              
              
                // newSelectionArray is [5,1] given the select order is 5 then 1
              
              checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
          </Box>
          
        </main>
      </div>
  );
};

export default Team;