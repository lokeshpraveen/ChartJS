import Login from "./Login/Login";
import "./Fonts/Cocon-Regular-Font.otf"
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import {useEffect, useState} from "react";
import {UserData} from './Data'
import TaskBarChart from "./TaskBarChart";
import BasicTable from "./DataGridTest";
let showNotification = 1

    document.title = showNotification ? 'CRM - Login' : 'CRM - TimeOut'
//
// function App(){
//     const [datas,setDatas] = useState()
//     useEffect(()=>{
//         fetchData();
//     },[])
//     const fetchData = async () => {
//         try {
//             const response = await fetch("https://blob-internal.goblitz.ai/quickdump/sales-data");
//             const json = await response.json();
//             setDatas(json);
//             console.log(datas[0].SALES,"!!!","data set success")
//         } catch (error) {
//             console.log("error", error);
//         }
//     };
//     return (
//         <>
//         Charts
//             <TaskBarChart charData={datas}/>
//         </>
//     )
// }

function App() {
    const [users, setUsers] = useState([])

    const fetchUserData = async () => {

            const response = await  fetch("https://blob-internal.goblitz.ai/quickdump/sales-data")
        setUsers( await response.json())
    }
    useEffect(() => {
        fetchUserData()
    }, )
    {console.log(users,"!!!")}
    const [DataFromApi,setDataFromApi] = useState({
        labels: users.map((datas)=>datas.SALES),
        datasets:[{
            label:"Sales",
            data:UserData.map((data)=>data.SALES),
            backgroundColor:["#e65e5e"],
            borderWidth:2,
            borderColor:"pink"
        }],
    })
    const [userData, setUserData] = useState({
        labels: UserData.map((data)=>data.SALES),
        datasets:[{
            label:"Sales",
            data:UserData.map((data)=>data.SALES),
            backgroundColor:["#e65e5e"],
            borderWidth:2,
            borderColor:"pink"
        }]

    })
    return (
    <div className="App">
       <div style={{display:'grid',gridTemplateColumns:'50% 50%'}}>
           <div  style={{width:'100%',marginTop:'4%',marginLeft:'1%'}}>
<BarChart charData={userData}/><div style={{textAlign:'center',fontSize:'22px',fontWeight:900}}>Bar Chart</div>
        </div>
        <div  style={{width:'100%',marginTop:'4%',marginLeft:'0%'}}>
            <LineChart charData={userData}/> <div style={{textAlign:'center',fontSize:'22px',fontWeight:900}}>Line Chart</div>
        </div>
       </div>

        {/*<TaskBarChart charData={DataFromApi}/>*/}

    </div>
  );
}

export default App;
