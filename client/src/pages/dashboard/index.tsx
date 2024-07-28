import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";


export const Dashboard = () =>{
    const { user } = useUser();
    return  (
        <div className="dashboard-container">
          <h1> Hello {user?.firstName}</h1>
          <h2>Here are your finances</h2>
           <FinancialRecordForm />
          {/* <div>Total Monthly: ${totalMonthly}</div> */}
          <FinancialRecordList /> 
        </div>
      );
}