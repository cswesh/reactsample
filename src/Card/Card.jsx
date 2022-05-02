import React,{useState} from 'react'
import './Card.css'
import {motion,AnimateSharedLayout} from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'react-apexcharts'
import {UilTimes} from '@iconscout/react-unicons';

const Card = (props) => {

    const [expanded,setExpanded] = useState(false)

  return (
    <AnimateSharedLayout>
        {
            expanded?(
                <ExpandedCard param={props}  setExpanded={()=>setExpanded(false)} />
            ):<CompactCard param ={props}  setExpanded={()=>setExpanded(true)} />
            
        }

    </AnimateSharedLayout>
  )
}
//CompactCard
function CompactCard({param,setExpanded}){
    const Png = param.png;
    
    return(
        <motion.div className="CompactCard"
        onClick={setExpanded}
        layoutId='expandableCard'
        >
            <div className="radialBar">
            <span>{param.title}</span>
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                />
                
            </div>
            
        </motion.div>
    )
}

// Expanded card
function ExpandedCard({param,setExpanded}){
    const data = {
        options:{
            chart:{
                type:'area',
                height:'auto',
            },
            dropShadow:{
                enabled:false,
                enabledOnSeries:undefined,
                top:0,
                left:0,
                blur:3,
                color:'#4E84C4',
                opacitiy:0.35,
            },
            fill:{
                colors:['#4E84C4'],
                type:'gradient',
            },
            dataLabels:{
                enabled:false
            },
            stroke:{
                curve:'smooth',
                colors:['#4E84C4']
            },
            tooltip:{
                x:{
                    format:'dd/MM/yy HH:mm',
                },
            },
            grid:{
                show:true,
            },
            xaxis:{
                type:'datetime',
                categories:[
                    '2019-09-19T00:00.000Z',
                    '2019-09-19T01:30.000Z',
                    '2019-09-19T02:30.000Z',
                    '2019-09-19T03:30.000Z',
                    '2019-09-19T04:30.000Z',
                    '2019-09-19T05:30.000Z',
                    '2019-09-19T06:30.000Z',
                ]
            }
        }
    }
    return(
        <motion.div className="ExpandedCard"
        layoutId='expandableCard'
        >
            <div style={{alignSelf:'flex-end', cursor:'pointer', color:'#4E84C4'}}>
            <UilTimes onClick={setExpanded}
            
            />
            </div>
            <span>
                {param.title}
            </span>
            <div className="chartContainer">
                <Chart series={param.series} type='area' options={data.options} />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    )
}
export default Card