import React from 'react'
import { useEffect, useState } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import { updateDoc, doc, collection, query, getDocs, where, orderBy, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import arrowRight from "../assets/svg/keyboardArrowRightIcon.svg";
import homeIcon from "../assets/svg/homeIcon.svg";
import ListingItem from "../components/ListingItem"
import logo from "../assets/jpg/logo 1.png";


function Profile() {
  const auth = getAuth()
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  const {name, email} = formData

  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserListing = async () => {
      const listingsRef = collection(db, "listings")
      const q = query(listingsRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc"))
      const querySnap = await getDocs(q)
      let listings = []
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data:doc.data()
        })
      })
      setListings(listings)
      setLoading(false)
    }
    fetchUserListing()
  
  }, [auth.currentUser.uid])
  
  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }
  
  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name
        })
      }
      const userRef = doc(db, 'users', auth.currentUser.uid)
      await updateDoc(userRef, {
        name
      })
    } catch (error) {
      toast.error('Could not update personal details')
    }

  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,

    }))
  }

  const onDelete = async(listingId) => {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      await deleteDoc(doc(db, "listings", listingId))
      const updatedListings = listings.filter((listing) =>
        listing.id !== listingId)
      setListings(updatedListings)
      toast.success("Your listing has been successfully deleted!")
    }
  }

  const onEdit = (listingId) => navigate(`/edit-listing/${listingId}`)
  

  return (
    <div className="profile">
      <header className="profileHeader">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <p className="headerTitle">Hello, {name} !</p>
        
        <button className="logOut" type="button" onClick={onLogout}>
          Logout
        </button>
      </header>
      <main>
        <p className="pageHeader">My profile</p>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">Personal Details</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {changeDetails ? "Done" : "Edit"}
          </p>
        </div>
        <div className="profileCard">
          <form>
            <input
              type="text"
              id="name"
              className={!changeDetails ? "profileName" : "profileNameActive"}
              disabled={!changeDetails}
              onChange={onChange}
              value={name}
            />
            <input
              type="text"
              id="email"
              className={!changeDetails ? "profileEmail" : "profileEmailActive"}
              disabled={!changeDetails}
              onChange={onChange}
              value={email}
            />
          </form>
        </div>
        <Link to="/create-listing" className="createListing">
          <img src={homeIcon} alt="home" />
          <p>Sell or rent a venue.</p>
          <img src={arrowRight} alt="arrow right" />
        </Link>
        {!loading && listings?.length > 0 && (
          <>
            <p className="listingText">Your Listings</p>
            <ul className="listingsList">
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                  onDelete={() => onDelete(listing.id)}
                  onEdit={() => onEdit(listing.id)}
                />
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
}

export default Profile