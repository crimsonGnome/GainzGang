import UpdateItem from '../components/UpdateItem';
import AdminSignIn from '../components/AdminSignIn';

const Update = ({ query }) => (
  <AdminSignIn>
    <UpdateItem id={query.id} />
  </AdminSignIn>
);
export default Update;
