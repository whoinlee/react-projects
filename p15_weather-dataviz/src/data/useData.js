import { useState, useEffect } from 'react';
import { json } from 'd3-fetch';
//-- Data
import * as CONSTANTS from './constants';
import secrets from './secrets.json';


const {API} = secrets;
const json_url = `${CONSTANTS.QUERY_PREFIX}?id=${CONSTANTS.CITY_ID}&appid=${API}&units=metric`;
//
export const useData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      json(json_url).then(result => {
              console.log("result?\n", result);
              const data = CONSTANTS.KEYS.map(key => ({
                    key,
                    values: result.list.map((d, i) => ({
                      i,
                      x: d.dt * 1000,
                      y: d[key.key1] ? d[key.key1][key.key2] || 0 : 0 
                    }))
                  })).reduce((prev, curr) => {
                    return {...prev, [curr.key.name]: curr.values}
                  }, {
                    'city-name': (
                      result &&
                      result.city &&
                      result.city.name
                    ) || 'Unknown'
              });//.map
              setData(data);
            })
    }, []);

    return data;
}