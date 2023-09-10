import UserDetail from "./userDetail"
export default function user({last_updated_at,location,gender,key,id}){
    return <div className="usercomp">  
            <h3>Candidate {id}</h3>
            <UserDetail  dat={last_updated_at}/>
            <UserDetail  dat={location} />
            <UserDetail  dat={location} />
        </div> 
}