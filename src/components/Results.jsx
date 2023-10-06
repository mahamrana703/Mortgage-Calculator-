import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Results = (data) => {
  const { homeValue, loanAmount, loanterm, interestRate } = data.data;
  const totalLoanMonths = loanterm * 12;
  const totalInterest = interestRate / 100;
  const interestPerMonth = totalInterest / 12;

  const MonthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);
  const totalInterestGenerated = MonthlyPayment + totalLoanMonths - loanAmount;
  const pieChartData = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  console.log(loanAmount, totalInterestGenerated);
  return (
    <Stack>
      <Typography textAlign={"center"} variant="h5">
        Monthly Payment: ${MonthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction={"row"} justifyContent={"center"}>
        <div style={{ width: "300px", height: "300px" }}>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  );
};

export default Results;
