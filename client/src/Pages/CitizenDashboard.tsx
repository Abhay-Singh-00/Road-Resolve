import NotificationBar from "../components/NotificationBar";
import PersonalizedWelcome from "../components/PersonalizedWelcome";
import StatCards from "../components/StatCards";
import Table from "../components/Table";

const CitizenDashboard = () => {
    return (
          <div className="px-4 py-2">
                    <PersonalizedWelcome/>
                    
                <NotificationBar/> 

               <StatCards
                cards={[
    { title: "My Grievance", value: 120, color: "blue" },
    { title: "Pending", value: 10, color: "amber" },
    { title: "Resolved", value: 110, color: "green" },
  ]}
/>
                <Table/>
                </div>
    )
} 
export default CitizenDashboard;