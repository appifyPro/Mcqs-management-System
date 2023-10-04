import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const quesarray = [
    {
      question: "what is the answer of 2+2",
      solution: [
        { solutiontext: "a=4", iscorrect: true },
        { solutiontext: "b=2", iscorrect: false },
        { solutiontext: "c=8", iscorrect: false },
        { solutiontext: "d=9", iscorrect: false },
      ],
    },
    {
      question: "what is the answer of 9-2",
      solution: [
        { solutiontext: "a=4", iscorrect: false },
        { solutiontext: "b=2", iscorrect: false },
        { solutiontext: "c=8", iscorrect: false },
        { solutiontext: "d=7", iscorrect: true },
      ],
    },
    {
      question: "what is the answer of 9+2",
      solution: [
        { solutiontext: "a=4", iscorrect: false },
        { solutiontext: "b=2", iscorrect: false },
        { solutiontext: "c=11", iscorrect: true },
        { solutiontext: "d=9", iscorrect: false },
      ],
    },
    {
      question: "what is the answer of 12+2",
      solution: [
        { solutiontext: "a=4", iscorrect: false },
        { solutiontext: "b=2", iscorrect: false },
        { solutiontext: "c=14", iscorrect: true },
        { solutiontext: "d=9", iscorrect: false },
      ],
    },
  ];

  const [current, setcurrent] = useState(0);
  const [score, setscore] = useState(false);
  const [cal, setcal] = useState(0);
  const handleclick = (iscorrect) => {
    console.log("result is :", iscorrect);
    if (iscorrect == true) {
      setcal(cal + 1);
    }
    console.log("cal is :", cal);
    const mycurrent = current + 1;
    if (mycurrent < quesarray.length) {
      setcurrent(mycurrent);
    } else {
      setscore(true);
    }
  };
  return (
    <div className=" row mt-5 mx-5  text-center " style={{}}>
      <h2 className="text-white mb-3">Quiz APP</h2>
      {score ? (
        <div className="asmar p-4  text-center mian">
          {" "}
          <h2 className="color-change">
            Result <br />
            Your Score {cal} of {quesarray.length}
          </h2>
        </div>
      ) : (
        <>
          <div className="col-6 ">
            {/* {console.log("data is ", quesarray.length)} */}
            <h2 className="text-white">
              Q {current + 1}/{quesarray.length}
              <br /> {quesarray[current].question}
            </h2>
          </div>

          <div className="col-3 ">
            {quesarray[current].solution.map((solution) => {
              // console.log("solution is :", solution.solutiontext);
              return (
                <div key={solution.id}>
                  <button
                    onClick={() => {
                      handleclick(solution.iscorrect);
                    }}
                    className="h4 rounded-4 button text-white"
                  >
                    {solution.solutiontext}
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
