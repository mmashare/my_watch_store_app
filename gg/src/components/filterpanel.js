import React,{useState} from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import styles from "./filterpanel.module.css";
import {useDispatch} from "react-redux"
import {myPrice1,myPrice2,myPrice3,myBreitling,myPatekPhilippe,myaudemarsPiguet,mygarmin,myhublot,mymen,
mysmartWatch,myomega,mywomen,myrichardMille,myrolex,myzenith,allValueOff} from "../redux/filterValue.js"
const Filterpanel = () => {
    const dispatch = useDispatch();
    const [mytoogle,setMyToogle] = useState(false)
    const [firstInput,setFirstInput] = useState(false);
    const [secInput,setSecInput] = useState(false);
    const [thirdInput,setThirdInput] = useState(false);

    const [men,setMen] = useState(false)
    const [women,setWomen] = useState(false)
    const [smartWatch,setSmartwatch] = useState(false)
    

    const [patekPhilippe,setPatekphilippe] = useState(false)
    const [rolex,setRolex] = useState(false)
    const [audemarsPiguet,setAudemarsPiguet] = useState(false)
    const [hublot,setHublot] = useState(false)
    const [zenith,setZenith] = useState(false)
    const [omega,setOmega] = useState(false)
    const [Breitling,setBreitling] = useState(false)
    const [richardMille,setRichardMille] = useState(false)
    const [garmin,setGarmin] = useState(false)
   
    dispatch(myPrice1(firstInput)) 
    dispatch(myPrice2(secInput)) 
    dispatch(myPrice3(thirdInput))
    // ----------------------------------------
    dispatch(mymen(men))
    dispatch(mywomen(women))
    dispatch(mysmartWatch(smartWatch))
    // ----------------------------------------
    dispatch(myPatekPhilippe(patekPhilippe))
    dispatch(myrolex(rolex))
    dispatch(myaudemarsPiguet(audemarsPiguet))
    dispatch(myhublot(hublot))
    dispatch(myzenith(zenith))
    dispatch(myomega(omega))
    dispatch(myBreitling(Breitling))
    dispatch(myrichardMille(richardMille))
    dispatch(mygarmin(garmin))

    const handleChange = (e)=>{
        // console.log([e.target.name] , e.target.checked)  
        if(e.target.name === "100to1k" && e.target.checked){
            setFirstInput(true) 
            setSecInput(false)
            setThirdInput(false)
            setPatekphilippe(false)
            setRolex(false)
            setAudemarsPiguet(false)
            setHublot(false)
            setZenith(false)
            setOmega(false)
            setBreitling(false)
            setRichardMille(false)
            setGarmin(false)
        }else if((e.target.name === "1kto100k" && e.target.checked)){
            setFirstInput(false)
            setSecInput(true)
            setThirdInput(false)
            setPatekphilippe(false)
            setRolex(false)
            setAudemarsPiguet(false)
            setHublot(false)
            setZenith(false)
            setOmega(false)
            setBreitling(false)
            setRichardMille(false)
            setGarmin(false)
        }else if((e.target.name === "1mto100m" && e.target.checked)){
           
            setFirstInput(false)
            setSecInput(false)
            setThirdInput(true)
            setPatekphilippe(false)
            setRolex(false)
            setAudemarsPiguet(false)
            setHublot(false)
            setZenith(false)
            setOmega(false)
            setBreitling(false)
            setRichardMille(false)
            setGarmin(false)
        }else{  
            setFirstInput(false)
            setSecInput(false)
            setThirdInput(false)
        }
    }
    const handleChangeForBtn1 = ()=>{
        // dispatch(mymen(men))
        setMen(!men);
        setWomen(false);
        setSmartwatch(false);
        setPatekphilippe(false)
        setRolex(false)
        setAudemarsPiguet(false)
        setHublot(false)
        setZenith(false)
        setOmega(false)
        setBreitling(false)
        setRichardMille(false)
        setGarmin(false)
        setFirstInput(false)
        setSecInput(false)
        setThirdInput(false)
    }
    const handleChangeForBtn2 = ()=>{
        // dispatch(mywomen(women))
        setMen(false);
        setWomen(!women);
        setSmartwatch(false);
        setPatekphilippe(false)
        setRolex(false)
        setAudemarsPiguet(false)
        setHublot(false)
        setZenith(false)
        setOmega(false)
        setBreitling(false)
        setRichardMille(false)
        setGarmin(false)
        setFirstInput(false)
        setSecInput(false)
        setThirdInput(false)
    }
    const handleChangeForBtn3 = ()=>{
        // dispatch(mysmartWatch(smartWatch))
        setMen(false);
        setWomen(false);
        setSmartwatch(!smartWatch);
        setPatekphilippe(false)
        setRolex(false)
        setAudemarsPiguet(false)
        setHublot(false)
        setZenith(false)
        setOmega(false)
        setBreitling(false)
        setRichardMille(false)
        setGarmin(false)
        setFirstInput(false)
        setSecInput(false)
        setThirdInput(false)
    }
    const handlechangeForCompany = (e)=>{
        if(e.target.name === "patekPhilippe" && e.target.checked){
            dispatch(myPatekPhilippe(patekPhilippe))
            setPatekphilippe(true)
            setRolex(false)
            setAudemarsPiguet(false)
            setHublot(false)
            setZenith(false)
            setOmega(false)
            setBreitling(false)
            setRichardMille(false)
            setGarmin(false)
            setFirstInput(false)
            setSecInput(false)
            setThirdInput(false)
            setMen(false);
            setWomen(false);
            setSmartwatch(false);
        }else if(e.target.name === "rolex" && e.target.checked){
            dispatch(myrolex(rolex))
            setPatekphilippe(false)
            setRolex(true)
            setAudemarsPiguet(false)
            setHublot(false)
            setZenith(false)
            setOmega(false)
            setBreitling(false)
            setRichardMille(false)
            setGarmin(false)
            setFirstInput(false)
            setSecInput(false)
            setThirdInput(false)
            setMen(false);
            setWomen(false);
            setSmartwatch(false);
        }else if(e.target.name === "audemarsPiguet" && e.target.checked){
            dispatch(myaudemarsPiguet(audemarsPiguet))
            setPatekphilippe(false)
            setRolex(false)
            setAudemarsPiguet(true)
            setHublot(false)
            setZenith(false)
            setOmega(false)
            setBreitling(false)
            setRichardMille(false)
            setGarmin(false)
            setFirstInput(false)
            setSecInput(false)
            setThirdInput(false)
            setMen(false);
            setWomen(false);
            setSmartwatch(false);
        }else if(e.target.name === "hublot" && e.target.checked){
            dispatch(myhublot(hublot))
            setPatekphilippe(false)
            setRolex(false)
            setAudemarsPiguet(false)
            setHublot(true)
            setZenith(false)
            setOmega(false)
            setBreitling(false)
            setRichardMille(false)
            setGarmin(false)
            setFirstInput(false)
            setSecInput(false)
            setThirdInput(false)
            setMen(false);
            setWomen(false);
            setSmartwatch(false);
        } else if(e.target.name === "zenith" && e.target.checked){
            dispatch(myzenith(zenith))
            setPatekphilippe(false)
            setRolex(false)
            setAudemarsPiguet(false)
            setHublot(false)
            setZenith(true)
            setOmega(false)
            setBreitling(false)
            setRichardMille(false)
            setGarmin(false)
            setFirstInput(false)
            setSecInput(false)
            setThirdInput(false)
            setMen(false);
            setWomen(false);
            setSmartwatch(false);
        } else if(e.target.name === "omega" && e.target.checked){
            dispatch(myomega(omega))
            setPatekphilippe(false)
            setRolex(false)
            setAudemarsPiguet(false)
            setHublot(false)
            setZenith(false)
            setOmega(true)
            setBreitling(false)
            setRichardMille(false)
            setGarmin(false)
            setFirstInput(false)
            setSecInput(false)
            setThirdInput(false)
            setMen(false);
            setWomen(false);
            setSmartwatch(false);
        } else if(e.target.name === "Breitling" && e.target.checked){
            dispatch(myBreitling(Breitling))
            setPatekphilippe(false)
            setRolex(false)
            setAudemarsPiguet(false)
            setHublot(false)
            setZenith(false)
            setOmega(false)
            setBreitling(true)
            setRichardMille(false)
            setGarmin(false)
            setFirstInput(false)
            setSecInput(false)
            setThirdInput(false)
            setMen(false);
            setWomen(false);
            setSmartwatch(false);
        }else if(e.target.name === "richardMille" && e.target.checked){
            dispatch(myrichardMille(richardMille))
            setPatekphilippe(false)
            setRolex(false)
            setAudemarsPiguet(false)
            setHublot(false)
            setZenith(false)
            setOmega(false)
            setBreitling(false)
            setRichardMille(true)
            setGarmin(false)
            setFirstInput(false)
            setSecInput(false)
            setThirdInput(false)
            setMen(false);
            setWomen(false);
            setSmartwatch(false);
        }else if(e.target.name === "garmin" && e.target.checked){
            dispatch(mygarmin(garmin))
            setPatekphilippe(false)
            setRolex(false)
            setAudemarsPiguet(false)
            setHublot(false)
            setZenith(false)
            setOmega(false)
            setBreitling(false)
            setRichardMille(false)
            setGarmin(true)
            setFirstInput(false)
            setSecInput(false)
            setThirdInput(false)
            setMen(false);
            setWomen(false);
            setSmartwatch(false);
        }else{
            setPatekphilippe(false)
            setRolex(false)
            setAudemarsPiguet(false)
            setHublot(false)
            setZenith(false)
            setOmega(false)
            setBreitling(false)
            setRichardMille(false)
            setGarmin(false)
          

        }

    }
    // console.log(men)
    // console.log(women)
    // console.log(smartWatch)
  return (
    <main className={mytoogle?styles.OpenContainer:styles.container}>
        <section className={styles.Wrapper}>
            <h3 className={styles.textt} style={{color: '#111111'}}>Filter</h3>
            <AiOutlinePlus className={mytoogle?styles.crossicon:styles.plusIcon} style={{color: '#111111'}} onClick={()=>{setMyToogle(!mytoogle)}}/>
        </section>
        
        <section className={mytoogle?styles.OpenPriceContainer:styles.priceContainer}>

            <p className={styles.priceTitle} style={{color: '#111111'}}>Price</p>
            {/* first column */}
            <article className={styles.firstPriceContainer}>
                <div className={styles.firstPriceContainerInputContainer}>

                <input 
                 type="checkbox"
                 name="100to1k" 
                 value={firstInput}
                 className={styles.firstPriceContainerInput} 
                 onChange={handleChange} 
                 checked={firstInput?"checked":""}
                 />

                </div>
                <div className={styles.firstPricetitleDiv}>
                    <p className={styles.title1} style={{color: '#111111'}}>$100 to $1k</p>
                </div>

            </article>
            {/* second column */}
            <article className={styles.TwoPriceContainer}>
                <div className={styles.TwoPriceContainerInputContainer}>

                <input type="checkbox" 
                name="1kto100k" 
                value={secInput} 
                className={styles.TwoPriceContainerInput} 
                onChange={handleChange}
                checked={secInput?"checked":""}
                />
                </div>
                <div className={styles.TwoPricetitleDiv}>
                    <p className={styles.title2} style={{color: '#111111'}}>$1k to $100k</p>
                </div>

            </article>
            {/* third column */}
            <article className={styles.ThirdPriceContainer}>
                <div className={styles.ThirdPriceContainerInputContainer}>

                <input type="checkbox" 
                name="1mto100m"  
                value={thirdInput} 
                className={styles.ThirdPriceContainerInput} 
                onChange={handleChange}
                checked={thirdInput?"checked":""}
                />

                </div>
                <div className={styles.ThirdPricetitleDiv}>
                <p className={styles.title3} style={{color: '#111111'}}>$1m to $100m</p>
                </div>

            </article>
        </section>
        {/* btn section */}
        <section className={mytoogle?styles.OpenCategoryContainer:styles.categoryContainer}>
            <button className={styles.btn1} onClick={handleChangeForBtn1} >Men</button>
            <button className={styles.btn2} onClick={handleChangeForBtn2} >Women</button>
            <button className={styles.btn3} onClick={handleChangeForBtn3} >Smart-Watch</button>
        </section>

        
        <section className={mytoogle?styles.OpenCompanyContainer:styles.companyContainer}>

        <p className={styles.campanyTitle} style={{color: '#111111'}}>Collection</p>

             <article className={styles.firstCompanyContainer}>
                <div className={styles.firstCompanyContainerInputContainer}>
               
                <input 
                type="checkbox" 
                name="patekPhilippe"
                 className={styles.firstCompanyContainerInput}
                 value={patekPhilippe}
                 onChange={handlechangeForCompany}
                 checked={patekPhilippe?"checked":""}
                 />

                </div>
                <div className={styles.firstCompanytitleDiv}>
                    <p className={styles.titleOfCompany1} style={{color: '#111111'}}>Patek-Philippe</p>
                </div>
            </article>

            <article className={styles.secCompanyContainer}>
                <div className={styles.secCompanyContainerInputContainer}>
                
                <input 
                type="checkbox" 
                name="rolex" 
                className={styles.secCompanyContainerInput}
                value={rolex}
                 onChange={handlechangeForCompany}
                 checked={rolex?"checked":""}
                />

                </div>
                <div className={styles.secCompanytitleDiv}>
                <p className={styles.titleOfCompany2} style={{color: '#111111'}}>Rolex</p> 
                </div>
            </article>

            <article className={styles.thirdCompanyContainer}>
                <div className={styles.thirdCompanyContainerInputContainer}>
                
                <input type="checkbox" 
                name="audemarsPiguet" 
                className={styles.thirdCompanyContainerInput}
                value={audemarsPiguet}
                 onChange={handlechangeForCompany}
                 checked={audemarsPiguet?"checked":""}
                />

                </div>
                <div className={styles.thirdCompanytitleDiv}>
                <p className={styles.titleOfCompany3} style={{color: '#111111'}}>Audemars-Piguet</p> 
                </div>
            </article>

            <article className={styles.fourthCompanyContainer}>
                <div className={styles.fourthCompanyContainerInputContainer}>
                
                <input 
                type="checkbox" 
                name="hublot" 
                className={styles.fourthCompanyContainerInput}
                value={hublot}
                onChange={handlechangeForCompany}
                checked={hublot?"checked":""}
                />

                </div>
                <div className={styles.fourthCompanytitleDiv}>
                <p className={styles.titleOfCompany4} style={{color: '#111111'}}>Hublot</p>  
                </div>
            </article>

            <article className={styles.fifthCompanyContainer}>
                <div className={styles.fifthCompanyContainerInputContainer}>
                
                <input 
                type="checkbox" 
                name="zenith" 
                className={styles.fifthCompanyContainerInput}
                value={zenith}
                onChange={handlechangeForCompany}
                checked={zenith?"checked":""}
                />

                </div>
                <div className={styles.fifthCompanytitleDiv}>
                <p className={styles.titleOfCompany5} style={{color: '#111111'}}>Zenith</p>  
                </div>
            </article>

            <article className={styles.sixthCompanyContainer}>
                <div className={styles.sixthCompanyContainerInputContainer}>
                
                <input 
                type="checkbox"
                name="omega" 
                className={styles.sithxCompanyContainerInput}
                value={omega}
                onChange={handlechangeForCompany}
                checked={omega?"checked":""}
                />

                </div>
                <div className={styles.sixthCompanytitleDiv}>
                <p className={styles.titleOfCompany6} style={{color: '#111111'}}>Omega</p> 
                </div>
            </article>

            <article className={styles.sevenCompanyContainer}>
                <div className={styles.sevenCompanyContainerInputContainer}>
               
                <input 
                type="checkbox" 
                 name="Breitling" 
                 className={styles.sevenCompanyContainerInput}
                 value={Breitling}
                 onChange={handlechangeForCompany}
                 checked={Breitling?"checked":""}
                 />

                </div>
                <div className={styles.sevenCompanytitleDiv}>
                <p className={styles.titleOfCompany7} style={{color: '#111111'}}>Breitling</p> 
                </div>
            </article>

            <article className={styles.eightCompanyContainer}>
                <div className={styles.eightCompanyContainerInputContainer}>
                
                <input 
                type="checkbox"
                name="richardMille" 
                className={styles.eightCompanyContainerInput}
                value={richardMille}
                onChange={handlechangeForCompany}
                checked={richardMille?"checked":""}

                />

                </div>
                <div className={styles.eightCompanytitleDiv}>
                <p className={styles.titleOfCompany8}style={{color: '#111111'}}> Richard-Mille</p> 
                </div>
            </article>

            <article className={styles.ninthCompanyContainer}>
                <div className={styles.ninthCompanyContainerInputContainer}>
                
                <input 
                type="checkbox"
                name="garmin" 
                className={styles.ninthCompanyContainerInput}
                value={garmin}
                onChange={handlechangeForCompany}
                checked={garmin?"checked":""}
                />

                </div>
                <div className={styles.ninthCompanytitleDiv}>
                <p className={styles.titleOfCompany9} style={{color: '#111111'}}>Garmin</p> 
                </div>
            </article>

        </section>
    </main>
  )
}

export default Filterpanel;