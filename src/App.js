import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';


function App() {
  //Method 2
  const ItemTwoName="SurfExcel";
  //optimised method which we will be using
  const response=[
    {
      itemName:"Tide",
      itemDate: "3",
      itemMonth: "March",
      itemYear: "2003"
      
    }
  ]
  return (
    <div>
      <Card>
       <Item name="Nirma"> Hello I am the first element</Item>
       <ItemDate day="1" month="Jan" year="2000"></ItemDate>

       <Item name={ItemTwoName}></Item>
       <ItemDate day="2" month="Feb" year="2001"></ItemDate>

       <Item name={response[0].itemName}></Item>
       <ItemDate day= {response[0].itemDate}  month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

       <div className="App"> Hello Jee </div>
      </Card>
      
    
       

    </div>
    
  );
}

export default App;
