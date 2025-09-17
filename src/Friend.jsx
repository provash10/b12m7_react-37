export default function Friend ({friend}){
    console.log(friend);

    // const{name, email....} = friend;

    return(
        <div className="card">
            <h4>Name : {friend.name} </h4>
            <h4>User Name : {friend.username} </h4>
            <h4>Email : {friend.email} </h4>
            <h4>Address : 
                (Street : {friend.address.street}),
                (Suite: {friend.address.suite}),
                (City: {friend.address.city}),
                (Zip Code: {friend.address.zipcode}),

                (Latitude: {friend.address.geo.lat}),
                (Longitude: {friend.address.geo.lng}) 

            </h4>
            <h4>Phone : {friend.phone} </h4>
            <h4>Website : {friend.website} </h4>
            <h4>Company :
                (Name : {friend.company.name}),
                (CatchPhrase : {friend.company.catchPhrase}),
                (BS : {friend.company.bs})
            </h4>


        </div>
    )
}