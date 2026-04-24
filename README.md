# Investment Calculator

A simple React app that calculates investment growth using yearly compound interest and displays a dynamic results table.

## Features

- Inputs for initial investment, annual contribution, return rate, and duration
- Real-time updates as inputs change
- Year-by-year breakdown including:
  * Investment value
  * Interest earned
  * Total interest
  * Invested capital
- Basic input validation (duration must be greater than 0)

## Getting Started

```bash
git clone https://github.com/akashrandhawa00/Investment-Calculator.git
cd investment-calculator
npm install
npm run dev
```

## Overview

The app uses controlled components to manage user input and dynamically recalculates investment data on every change. Results are rendered in a table format for easy visualization of growth over time.

## Notes

This project was built to practice core React concepts such as:

* State management
* Handling user input
* Conditional rendering
* Component structure
