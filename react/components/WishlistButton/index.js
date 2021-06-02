import React from "react"
import { useCssHandles } from "vtex.css-handles"
import "./index.css" 

const CSS_HANDLES = ["wishlistButtonContainer", "wishlistButtonText"]

const WishlistButton = ({AddListenBtn}) => {
  const handles = useCssHandles(CSS_HANDLES)

  const handleClick = () => {
    const wishlistButton = document.querySelector(".codeby-store-theme-0-x-wishlistButtonContainer .vtex-button")
    wishlistButton && wishlistButton.click()
  }

  return (
    <div onClick={handleClick} className={`${handles.wishlistButtonContainer}`}>
      <AddListenBtn />
      <div className={`${handles.wishlistButtonText}`}>Add To Wishlist</div>
    </div>
  )
}

export default WishlistButton