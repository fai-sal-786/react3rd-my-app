import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/Button";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-medium under-line'>HELLO WORLD</h1>
    
    <div>

      <Button txtColor={"text-white"} bgColor={"bg-orange-400"} label = "HOMEPAGE"/>
      <Button txtColor={"text-white"} bgColor={"bg-purple-400"} label = "CONTACT US"/>
      <Button bgColor={"bg-yellow-400"} txtColor={"text-white"} borderColor={"border-black-500"} label = "ABOUT US"/>
      <Button bgColor={"bg-green-400"} borderColor={"border-black-500"} txtColor={"text-white"} label="PRODUCTS" />
      <Button txtColor={"text-white"} bgColor={"bg-blue-400"}label="USER PROFILE" />
      <Button txtColor={"text-white"} bgColor={"bg-pink-400"} label = "CHAT US"/>
    </div>
    </>
  )
}

export default App
