import Slidercomponent from "./common/Slidercomponent";

const Sliderselect = ({ data, setData }) => {
  const bank_limit = 10000;
  return (
    <>
      <Slidercomponent
        label="Home Value"
        min={1000}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value,
          })
        }
        unit="$"
        amount={data.homeValue}
      />
      <Slidercomponent
        label="Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: data.homeValue - value,
            downPayment: value,
          })
        }
        unit="$"
        amount={data.downPayment}
      />
      <Slidercomponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value,
          })
        }
        unit="$"
        amount={data.loanAmount}
      />
      <Slidercomponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultvalue={data.interestRate}
        value={data.interestRate}
        step={1}
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
        unit="%"
        amount={data.interestRate}
      />
    </>
  );
};

export default Sliderselect;
