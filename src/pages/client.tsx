import ClientForm from "../components/client-form";
import styles from "./common.module.css";

const ClientPage = () => {
   return (
       <div className={styles.page}>
         <h1>Tell us about yourself</h1>
         <ClientForm/>
       </div>
   )
}

export default ClientPage;