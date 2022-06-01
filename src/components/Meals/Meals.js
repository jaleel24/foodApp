import {Fragment} from "react";
import AvailableMeals from "./AvailableMeal";
import SummaryMeals from "./SummaryMeals";
const Meals = () =>{

    return(
        // we are using Freagments only because React wont allow us to present two components side wise
        // so alway import {Fragment} from 'react'  in order to overcome the situation
        <Fragment>
            <SummaryMeals />
            <AvailableMeals />
        </Fragment>
    );

}
export default Meals;