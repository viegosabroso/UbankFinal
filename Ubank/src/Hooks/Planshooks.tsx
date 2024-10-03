import { useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';
import{ DataBaseServiceplan } from '../Services/FinantialPlans';
export const Planshooks = () => {
const location = useLocation();
  const valuesstate = location.state;

  const [optionsvalue, setOptionsvalue] = useState([]);
  const [plans, setPlans] = useState<any>([]);
  const [filteredPlans, setFilteredPlans] = useState<any>([]);
  const [plansIndex, setPlansIndex] = useState(3);
  const [title, setTitle] = useState('');


  const { getdbPlans } = DataBaseServiceplan();

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getdbPlans();
        setPlans(data);  
        setOptionsvalue(valuesstate?.optionvalue || []); 
        console.log(plans);
        
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [optionsvalue]);

  
  const mostFrequent = (arr: any[]): any => {
    const counts = arr.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});
  
    const transformedCounts = Object.keys(counts).reduce((a, b) => 
        (counts[a] > counts[b] ? a : b));

    console.log("Most frequent item:", transformedCounts);
    return transformedCounts;
    
  };

  useEffect(() => {
    if (plans.length > 0 && optionsvalue.length > 0) {
      const frequentPlan = mostFrequent(optionsvalue);
      setPlansIndex(frequentPlan);  // Update plansIndex
    }
  }, [optionsvalue, plans]);
  
  useEffect(() => {
    if (plans.length > 0 && plansIndex !== null) {
      const plann = plans[plansIndex];  // Access plan based on updated plansIndex
      if (plann) {
        setTitle(plann.Title);
        setFilteredPlans(plann.Description || []);
      }
    }
  }, [plansIndex, plans]);  //
  return {

    filteredPlans,
    
    title,
    
    
    
  }
  
  
}