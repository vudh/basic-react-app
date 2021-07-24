import React from "react"
import MeetupItem from "./MeetupItem"

import "../../assets/scss/components/meetup/MeetupList.scss"

function MeetupList(props) {
  return (
    <ul className="list">
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id} id={meetup.id} image={meetup.image} title={meetup.title} address={meetup.address} description={meetup.description} />
      ))}
    </ul>
  )
}

export default MeetupList
