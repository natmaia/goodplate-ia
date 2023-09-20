import { View, Text } from 'react-native'
import React from 'react'
import { ItemProps } from '../components/Item';

export  function farmcontainer(items: ItemProps[], farmName: string) {
  for(const item of items) {
    if (item.name.toLowerCase() === farmName.toLocaleLowerCase()) { 
        return true;
        }
    } 

    return false;
}