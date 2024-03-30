import './User.css';

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
         <h1 className="userTitle">Edit User</h1>
         <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
         <div className="userShow">
            <div className="userShowTop">
               <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
               <div className="userShowTopTitle">
                  <span className="userShowUsername">Anna Becker</span>
                  <span className="userShowUserTitle">Web Developer</span>
               </div>
            </div>
            <div className="userShowBottom"></div>
         </div>
         <div className="userUpdate"></div>
      </div>
    </div>
  )
}
