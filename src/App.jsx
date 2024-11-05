import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

	const [Principle,setPrinciple] = useState("")
	const [rate, setRate] = useState("")
	const [year, setYear] = useState("")
	const [isPrinciple,setIsPrinciple] = useState(true)
	const [isRate,setIsRate] = useState(true)
	const [isYear,setIsYear] = useState(true)
	const [Interest,setInterest] = useState(0)

	
	const validate = (e) =>{
		const {name,value} = e.target
		console.log(name);
		console.log(value);
		
		//match(regExp) - return array when values matches wit the regular expression else returns null 
		// ^[0-9]$
		if(!!value.match('^[0-9]*$')){
			if(name == 'principle'){
				setPrinciple(value)
				setIsPrinciple(true)
			}
			else if(name == 'rate'){
				setRate(value)
				setIsRate(true)
			}
			else{
				setYear(value)
				setIsYear(true)
			}
		}
		else{
			if(name == 'principle'){
				setPrinciple(value)
				setIsPrinciple(false)
			}
			else if(name == 'rate'){
				setRate(value)
				setIsRate(false)
			}
			else{
				setYear(value)
				setIsYear(false)
			}
		}
		}
		

	const handleReset = ()=>{
		setPrinciple("")
		setRate("")
		setYear("")
		setIsPrinciple(true)
		setIsRate(true)
		setIsYear(true)
		setInterest(0)
	}
			
	const calculate =()=>{
		setInterest((Principle*rate*year)/100)
	}
	return (
		<>
			<div className='bg-black d-flex justify-content-center align-items-center' style={{ height: '100vh', width: '100%' }}>
				<div className='bg-light p-5 rounded-2' style={{ width: '500px' }}>
					<h1>Simple Interest App</h1>
					<p>Calculate your simple interest easily</p>

					<div className='bg-warning d-flex justify-content-center align-items-center p-3 rounded mt-4 flex-column' style={{ height: '150px' }}>
						<h1>₹ {Interest}</h1>
						<h5>Total simple interest</h5>
					</div>
					<div className='my-3'>
						<TextField id="outlined-basic" value={Principle} className='w-100' label="₹ Principle amount" name='principle' variant="outlined" onChange={(e)=>validate(e)} />
						{ isPrinciple == false && <p className='text-danger'>*Invalid Input</p>}

					</div>
					<div className="mb-3">
						<TextField id="outlined-basic" className='w-100' value={rate} label="Rate of Interest (%)" name='rate' variant="outlined" onChange={(e)=>validate(e)} />
						{ isRate == false && <p className='text-danger'>*Invalid Input</p>}

					</div>
					<div className="mb-3">
						<TextField id="outlined-basic" className='w-100' value={year} label="Year" variant="outlined" name='year' onChange={(e)=>validate(e)} />
						{ isYear == false &&<p className='text-danger'>*Invalid Input</p>}

					</div>
					<div className="mb-3 d-flex justify-content-between">
					<Button variant="contained" style={{width:'190px'}} color='success' className='p-3' onClick={calculate} disabled={isPrinciple && isRate && isYear ? false :true}>Calculate</Button>
					<Button variant="outlined" style={{width:'190px'}} className='p-3' onClick={handleReset}>Reset</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default App