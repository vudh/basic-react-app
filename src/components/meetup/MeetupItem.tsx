import React, { useContext, useState } from "react"
import { IMeetup } from "types/IMeetup"
import FavoritesContext from "../../store/favorites-context"

import "../../assets/scss/components/meetup/MeetupItem.scss"
import { MeetupItemProps } from "types/MeetupItemProps"

function MeetupItem(props: MeetupItemProps) {
  const favoritesCtx = useContext(FavoritesContext)

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.item?.id)

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.item?.id)
    } else {
      favoritesCtx.addFavorite({
        id: props.item?.id,
        title: props.item?.title,
        description: props.item?.description,
        image: props.item?.image,
        address: props.item?.address,
      })
    }
  }

  const removeMeetup = (e) => {
    e.preventDefault()

    if (props.onRemoveMeetup) props.onRemoveMeetup(props.item?.id)
  }

  return (
    <li className="item">
      <div className="image">
        <img src={props.item?.image} alt={props.item?.title} />
      </div>
      <div className="content">
        <h3>{props.item?.title}</h3>
        <address>{props.item?.address}</address>
        <p>{props.item?.description}</p>
      </div>
      <div className="actions">
        <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? "Remove from Favorites" : "Add To Favorites"}</button>
        <button onClick={removeMeetup}>Remove</button>
      </div>
    </li>
  )
}

export default MeetupItem
