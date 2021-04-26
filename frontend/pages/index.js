import Home from '../components/Home';

const index = (props) => (
  <div>
    <Home
      filter={props.query.filter || null}
      page={parseFloat(props.query.page) || 1}
    />
  </div>
);

export default index;
