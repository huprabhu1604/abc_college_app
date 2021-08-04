import './App.css';
import { useEffect, useState } from "react";
import Widget from './components/Widget/Widget';

function App() {
  const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hightlights, setHighlights] = useState([]);
    const [filterH, setFilterH] = useState();
    const [buyers, setBuyers] = useState([]);
    const [filterB, setFilterB] = useState();
    const [countries, setCountries] = useState([]);
    const [filterC, setFilterC] = useState();
    const [income, setIncome] = useState([]);
    const [filterI, setFilterI] = useState();
    useEffect(() => {
        findAnyName();
      }, []);
      const findAnyName = async() => {
        const urls = ['http://13.232.99.42/get_highlight', 
        'http://13.232.99.42/get_buyer', 
        'http://13.232.99.42/get_country', 
      'http://13.232.99.42/get_income'];
          try{
            let res = await Promise.all(urls.map(e => fetch(e)))
            let resJson = await Promise.all(res.map(e => e.json()))
            resJson = resJson.map(e => e.data);
            setHighlights(resJson[0]);
            setFilterH(resJson[0].filter);
            setBuyers(resJson[1]);
            setFilterB(resJson[1].filter)
            setCountries(resJson[2]);
            setFilterC(resJson[2].filter);
            setIncome(resJson[3]);
            setFilterI(resJson[3].filter);
            setIsLoaded(true);
          }catch(err) {
            console.log(err)
          }
      }
      if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="App">
            <Widget filters={filterH} list={hightlights} type="HIGHLIGHTS" url="get_highlight"></Widget>
            <Widget filters={filterB} list={buyers} type="BUYERS" url="get_buyer"></Widget>
            <Widget filters={filterC} list={countries} type="COUNTRIES" url="get_country"></Widget>
            <Widget filters={filterI} list={income} type="INCOME" url="get_income"></Widget>
          </div>
        );
      }
}

export default App;
