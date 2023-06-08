    const [users, setUsers] = useState();
    const getApiData = async () => {
        const response = await fetch(
            "https://blob-internal.goblitz.ai/quickdump/sales-data"
        ).then((response) => response.json());

        // update the state
        setUsers(response);
    };
    useEffect(() => {
        getApiData();
    }, []);
    const [barChart] = useState({
        labels: users.map((data)=>data.PRODUCTLINE),
        datasets:[{
            label:"Seats Avail",
            data:users.map((data)=>data.SALES),
            backgroundColor:["#e65e5e"],
            borderWidth:2,
            borderColor:"pink"
        }
            ],

    })
    return (
        <div className="app">
            <TaskBarChart chartData={barChart}/>
            {/*{users &&*/}
            {/*users.map((user) => (*/}
            {/*    <div className="item-container">*/}
            {/*        Id:{user.SALES}*/}

            {/*    </div>*/}

            {/*))}*/}
        </div>
    )
}
