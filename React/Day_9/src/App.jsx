import React, { useReducer } from "react";

/* ---------------- Initial State ---------------- */
const initialState = {
  step: 1,
  isSubmitted: false,
  formData: {
    name: "",
    email: "",
    username: "",
    password: ""
  }
};

/* ---------------- Reducer ---------------- */
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value
        }
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

/* ---------------- Component ---------------- */
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, formData, isSubmitted } = state;

  /* ---------------- Step Validation ---------------- */
  const isStep1Valid = formData.name && formData.email;
  const isStep2Valid = formData.username && formData.password;

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Multi-Step Registration</h2>
      <p>Step {step} / 3</p>

      {/* ---------------- Step 1 ---------------- */}
      {step === 1 && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value
              })
            }
          />
          <br /><br />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value
              })
            }
          />
          <br /><br />

          <button
            disabled={!isStep1Valid}
            onClick={() => dispatch({ type: "NEXT_STEP" })}
          >
            Next
          </button>
        </>
      )}

      {/* ---------------- Step 2 ---------------- */}
      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "username",
                value: e.target.value
              })
            }
          />
          <br /><br />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "password",
                value: e.target.value
              })
            }
          />
          <br /><br />

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>
          &nbsp;
          <button
            disabled={!isStep2Valid}
            onClick={() => dispatch({ type: "NEXT_STEP" })}
          >
            Next
          </button>
        </>
      )}

      {/* ---------------- Step 3 ---------------- */}
      {step === 3 && !isSubmitted && (
        <>
          <h3>Review Details</h3>
          <p><b>Name:</b> {formData.name}</p>
          <p><b>Email:</b> {formData.email}</p>
          <p><b>Username:</b> {formData.username}</p>

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>
          &nbsp;
          <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
            Submit
          </button>
        </>
      )}

      {/* ---------------- Success ---------------- */}
      {isSubmitted && (
        <>
          <h3>✅ Registration Successful!</h3>
          <button onClick={() => dispatch({ type: "RESET_FORM" })}>
            Reset Form
          </button>
        </>
      )}
    </div>
  );
}

export default App;
