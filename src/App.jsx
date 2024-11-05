import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  return (
    <>
     <div className='bg-dark d-flex justify-content-center align-items-center'  style={{height:'100vh',width:'100%'}}>
      <div className='bg-light p-5 rounded-2' style={{width:'500px'}}>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest app</p>
        <div className='bg-warning p-3 mt-4 d-flex justify-content-center align-items-center flex-column rounded' style={{height:'130px'}}>
          <h1>₹ 100</h1>
          <p>Total simple interest</p>
        </div>
        <div className="my-3 ">
        <TextField id="outlined-basic" label="₹ Principal Amount" variant="outlined" className='w-100'/>
        </div>
        <div className="mb-3">
        <TextField id="outlined-basic" label="Rate of interest (%)" variant="outlined" className='w-100' />
        </div>
        <div className="mb-3">
        <TextField id="outlined-basic" label="Year" variant="outlined" className='w-100' />
        </div>
        <div className="mb-3 d-flex justify-content-between">
        <Button variant="contained" style={{width:'190px'}} className='p-3' color='success'>Calculate</Button>
        <Button variant="outlined" style={{width:'190px'}} className='p-3' color='success'>Reset</Button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App