1. Create  a function/method to compute the sum of the two integers passed in as parameters. 
If the two integers are the same, then return triple their sum. If not, return just their sum.

create a function with two parameters

parameters would be called a and b 

function Adding ( a , b ){
    a + b = c 

    if ( a === b ){
        return ((a+b)*3)
    }else 
    {
        return (a+b) 
    }
}

2. Create a function that gets an array of numbers as the parameter. Return the sum of all the positive numbers in that array.
There there are no positive numbers in the array, the function should return 0

const nums = [1, -4, 17, 20]

function filerting (numArry){
    fileredArray = numArry.filter((nums)=> nums >0)

    if( numArry => 0){
        return 0 
    }
}

// create default state - firstName
// create an text input element 
// when a user types change the firstName state from the input element


import React from 'react'

const myForm = () => {
    const [fname, setFName]=useState('')

    const handleText =(e)=>{
        let text = e.target.value;
        setFName(text)
    }

  return (
      <input onChange={handleText}>{fname}</input>
  )
}

