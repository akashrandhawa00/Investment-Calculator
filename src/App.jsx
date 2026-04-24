import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results userInput={userInput} />
    </>

    // <table id="result">
    //   <th>
    //     <thead>Year</thead>
    //     <thead>Invesment Value</thead>
    //     <thead>Interest (Year)</thead>
    //     <thead>Total Interest</thead>
    //     <thead>Invested Capital</thead>
    //   </th>
    // </table>
  );
}

export default App;
