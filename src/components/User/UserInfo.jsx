function UserInfo({info}) {
  return (
    <div className="max-w-4xl min-h-96 flex items-center justify-center gap-5 bg-lime-200">
      <div >
        <img className="w-44" src={info.picture.large} alt="My Pic" />
      </div>
      <div className="font-medium border-inherit flex-col justify-between">
        <h4>Id: {info.id}</h4>
        <p>{info.name.title} {info.name.first} {info.name.last}</p>
        <p>{new Date(info.dob.date).toLocaleDateString('en-US')}</p>
        <p>{info.email}</p>
        <p>{info.location.street.number}, {info.location.street.name}, {info.location.city},</p>
        <p>{info.location.state}, {info.location.country}, {info.location.postcode}</p>
      </div>
    </div>
  )
}

export default UserInfo
