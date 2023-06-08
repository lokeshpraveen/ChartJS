import React from 'react'

const classes ={

    LoginMain:{
        display:'flex',
        background: 'linear-gradient( to top, #82cee0 0%, #cce0e6 80%)',
        backgroundColor:'#2b2b2b',
        height: '100vh',
        fontFamily:'Light',
    },
    group1:{
      width:'50%',
    },
    group2:{
        width:'50%',
    },
    FrontContent:{
        // width:'100%',
        display: 'grid',
        placeItems:'center',
        marginTop:'4ls' +
            '0%',
        fontWeight:'100',
        fontSize:'35px',
        color:'#fff',
        textShadow: '3px 3px 2px #82cee0, 3px 3px  #82cee0',
    },
    SignIn:{
        display: 'grid',
        placeItems:'center',
        marginTop:'25%',
        fontWeight:'100',
        fontSize:'30px',
        color:'#fff',
        textShadow: '3px 3px 2px #82cee0, 3px 3px  #82cee0',
    }
}
function Login(){
    return(
        <>
            <div style={classes.LoginMain}>
         <div style={classes.group1}>
<h2 style={classes.FrontContent}>CRM</h2>
         </div>
            <div style={classes.group2}>
<h2 style={classes.SignIn}>Sign in</h2>
         </div>
            </div>



        </>

    )
}
export default Login