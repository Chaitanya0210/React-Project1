import React from 'react'

function card({username}) {
    console.log(username)
  return (
    <div>
      <div className="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvHRLqV2tXIiTN2j_Xw8-Gjukh8lIfTLWYiY3gdH94A&s=10" />
  </div>
  <div className="flex">
    <span className="text-2xl font-medium">{username}</span>
    <span>The Anti-Patterns</span>
    <span className="flex">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>  
    </div>
  )
}

export default card
