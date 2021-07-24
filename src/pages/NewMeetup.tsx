import React from "react"
import { useHistory } from "react-router-dom"
import NewMeetupForm from "../components/meetup/NewMeetupForm"

function NewMeetupPage() {
  const history = useHistory()

  const addMeetupHandler = (meetupData) => {
    fetch("https://basic-react-app-9133a-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/")
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetupPage
