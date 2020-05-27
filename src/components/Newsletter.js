import React, { useState } from "react"
import axios from "axios"
import newsletter from "../components/newsletter.css"

export default () => {
  const [email, setEmail] = useState("")
  const [state, setState] = useState("IDLE")
  const [errorMessage, setErrorMessage] = useState(null)

  const subscribe = async () => {
    setState("LOADING")
    setErrorMessage(null)
    try {
      const response = await axios.post("/api/newsletter", { email })
      setState("SUCCESS")
    } catch (e) {
      setErrorMessage(e.response.data.error)
      setState("ERROR")
    }
  }

  return (
    <>
      {state === "ERROR" && <p>{errorMessage}</p>}
      {state === "SUCCESS" && <p>Success!</p>}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button
          id="input-button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          <img
            src="https://cl.ly/2214e2b0f8a3/download/Send.png"
            width="24px"
          />
        </button>
      </div>
      <span>Don’t miss out on the code nuggets. No Spam.</span>
    </>
  )
}
