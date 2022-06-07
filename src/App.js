import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const theme = createTheme({
    palette: {
      floQastGreen: {
        main: '#8bc540',
        contrastText: '#fff',
      },
    },
  });

  return (
    <>
    <div className="titleContainer">
      <h2><img src={require('./res/floqast.png')} alt="floqast logo"/><span className="darkGray">The</span></h2>
      <h1 className='green' style={{fontSize: '60px'}}>Fastest, Most Accurate</h1>
      <h1 className='darkGray'>Way to Close Your Books!</h1>
    </div>

      <center>
        <div className="formContainer">
                <Grid container spacing={0}>
                    <Grid item xs={12} lg={4}>
                      <div className="formTitle">
                        <h1>SCHEDULE A DEMO</h1>
                        <h4>Learn more about FloQast.</h4> 
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={8} style={{paddingRight: "15px", paddingLeft: "15px"}}>
                      <h2 className="formTop"><span className="gray">Learn How FloQast Can</span> <span className="green">Improve Your Month-End</span></h2>
                      <Grid container spacing={2} style={{paddingRight: "15px", paddingLeft: "15px", paddingBottom: "15px"}}>
                        <ThemeProvider theme={theme}>
                          <Grid item xs={12} md={4}>
                            <TextField id="outlined-basic" label="First Name" variant="outlined" size='small' color="floQastGreen" required fullWidth/>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextField id="outlined-basic" label="Email" variant="outlined" size='small' color="floQastGreen" required fullWidth/>
                          </Grid>
                          <Grid item xs={12} md={4}>
                          <Button variant="contained" color="floQastGreen" fullWidth>SCHEDULE NOW</Button>
                          </Grid>
                        </ThemeProvider>
                      </Grid>
                    </Grid>
                </Grid>
          </div>
        </center>
    </>
  );
}

export default App;
